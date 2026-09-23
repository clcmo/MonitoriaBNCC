import { useEffect, useState } from 'react';
import { Aula } from '../data/aulas';
import { listarAulas } from '../services/aulasapi';

export default function Aulas() {
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    listarAulas()
      .then(setAulas)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Aulas</h2>
        <p>Confira as próximas aulas e materiais de apoio disponíveis.</p>
      </div>

      {carregando && <p className="loading-text">Carregando aulas…</p>}
      {erro && <div className="alert alert-danger">{erro}</div>}

      <div className="cards">
        {aulas.map((aula) => (
          <div className="card theory-card" key={aula.id}>
            <span className="card-tag">{aula.disciplina}</span>
            <h3>{aula.titulo}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.82rem', margin: '4px 0 10px' }}>
              {new Date(aula.data).toLocaleDateString('pt-BR')}
            </p>
            <p>{aula.descricao}</p>
            {aula.materialUrl && (
              <a
                className="btn btn-primary"
                style={{ marginTop: 16 }}
                href={aula.materialUrl}
                target="_blank"
                rel="noreferrer"
              >
                Confira a Aula
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
