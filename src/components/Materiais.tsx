import { useEffect, useState } from 'react';
import { AULAS_MOCK } from '../data/aulas';

const API_URL =
  'https://apprendendo.blog/wp-json/wp/v2/posts?per_page=6&_fields=date,link,title,excerpt';
const RSS_URL = 'https://apprendendo.blog/feed/';

interface WordPressPost {
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

interface Artigo {
  titulo: string;
  resumo: string;
  url: string;
  data: string;
}

function isWordPressPost(value: unknown): value is WordPressPost {
  if (!value || typeof value !== 'object') return false;
  const post = value as Record<string, unknown>;
  const title = post.title;
  const excerpt = post.excerpt;

  return (
    typeof post.date === 'string' &&
    typeof post.link === 'string' &&
    !!title &&
    typeof title === 'object' &&
    typeof (title as Record<string, unknown>).rendered === 'string' &&
    !!excerpt &&
    typeof excerpt === 'object' &&
    typeof (excerpt as Record<string, unknown>).rendered === 'string'
  );
}

function textoSemHtml(html: string): string {
  return new DOMParser().parseFromString(html, 'text/html').body.textContent?.trim() ?? '';
}

function converterArtigo(post: WordPressPost): Artigo {
  const url = new URL(post.link);
  if (url.origin !== 'https://apprendendo.blog') {
    throw new Error('O feed retornou um link fora do Apprendendo.blog.');
  }

  const data = new Date(post.date);
  if (Number.isNaN(data.getTime())) {
    throw new Error('O feed retornou uma data de publicação inválida.');
  }

  return {
    titulo: textoSemHtml(post.title.rendered),
    resumo: textoSemHtml(post.excerpt.rendered),
    url: url.href,
    data: data.toLocaleDateString('pt-BR'),
  };
}

export default function Materiais() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [atualizacao, setAtualizacao] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarArtigos() {
      setCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch(API_URL, { signal: controller.signal });
        if (!resposta.ok) {
          throw new Error(`Não foi possível carregar o Apprendendo.blog (${resposta.status}).`);
        }

        const dados: unknown = await resposta.json();
        if (!Array.isArray(dados) || !dados.every(isWordPressPost)) {
          throw new Error('O Apprendendo.blog retornou um formato de feed inesperado.');
        }

        setArtigos(dados.map(converterArtigo));
      } catch (e) {
        if (!controller.signal.aborted) {
          setErro(e instanceof Error ? e.message : 'Erro inesperado ao carregar o feed.');
        }
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }

    void carregarArtigos();
    return () => controller.abort();
  }, [atualizacao]);

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <h2>Materiais de consulta</h2>
          <p>Aulas e recursos compartilhados pelos monitores, além de artigos do Apprendendo.blog.</p>
        </div>
      </div>

      <section className="materials-group" aria-labelledby="materiais-monitores">
        <div className="materials-heading">
          <div>
            <h3 id="materiais-monitores">Materiais dos monitores</h3>
            <p>Acesse aulas, listas e revisões preparados para a monitoria.</p>
          </div>
        </div>

        <div className="cards">
          {AULAS_MOCK.filter((aula) => aula.materialUrl).map((aula) => (
            <article className="card theory-card" key={aula.id}>
              <span className="card-tag">
                {[aula.disciplina, ...(aula.disciplinasIntegradas ?? [])].join(' · ')}
              </span>
              <h3>{aula.titulo}</h3>
              <p>{aula.descricao}</p>
              <p className="material-author">
                Monitor(a): {aula.monitorDisponibilizador ?? 'não informado'}
              </p>
              <a className="btn btn-primary material-link" href={aula.materialUrl}>
                Abrir material
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="materials-group" aria-labelledby="artigos-apprendendo">
        <div className="materials-heading">
          <div>
            <h3 id="artigos-apprendendo">Apprendendo.blog</h3>
            <p>Publicações recentes do feed RSS para ampliar os estudos.</p>
          </div>
          <div className="materials-actions">
            <a className="btn" href={RSS_URL} target="_blank" rel="noreferrer">
              Abrir RSS
            </a>
            <button
              className="btn"
              type="button"
              onClick={() => setAtualizacao((valor) => valor + 1)}
              disabled={carregando}
            >
              Atualizar
            </button>
          </div>
        </div>

        {carregando && <p className="loading-text">Carregando publicações…</p>}
        {erro && <div className="alert alert-danger">{erro}</div>}
        {!carregando && !erro && artigos.length === 0 && (
          <p className="loading-text">Nenhuma publicação encontrada no momento.</p>
        )}

        {artigos.length > 0 && (
          <div className="cards">
            {artigos.map((artigo) => (
              <article className="card theory-card" key={artigo.url}>
                <span className="card-tag">Publicado em {artigo.data}</span>
                <h3>{artigo.titulo}</h3>
                <p>{artigo.resumo || 'Leia o artigo completo no Apprendendo.blog.'}</p>
                <a
                  className="btn btn-primary material-link"
                  href={artigo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ler artigo
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
