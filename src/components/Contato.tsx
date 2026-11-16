import { useState } from 'react';
import { enviarMensagemContato } from '../services/email';

type Status = 'idle' | 'enviando' | 'sucesso' | 'erro';

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    disciplina: 'Física',
    serie: '',
    assunto: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [erroMsg, setErroMsg] = useState('');

  const atualizarCampo = (campo: keyof typeof form, valor: string) => {
    setForm((atual) => ({ ...atual, [campo]: valor }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');
    setErroMsg('');

    try {
      const detalhesAcademicos = [
        `Componente curricular: ${form.disciplina}`,
        form.serie ? `Série/Ano: ${form.serie.replace('_', 'º ')}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      await enviarMensagemContato({
        nome: form.nome,
        email: form.email,
        assunto: `[Monitoria - ${form.disciplina}] ${form.assunto}`,
        mensagem: `${detalhesAcademicos}\n\n${form.mensagem}`,
      });
      setStatus('sucesso');
      setForm({
        nome: '',
        email: '',
        disciplina: 'Física',
        serie: '',
        assunto: '',
        mensagem: '',
      });
    } catch (err) {
      setStatus('erro');
      setErroMsg(err instanceof Error ? err.message : 'Não foi possível enviar sua mensagem.');
    }
  };

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Contato e dúvidas</h2>
        <p>
          Envie dúvidas sobre aulas e exercícios ou fale com a coordenação e a equipe pedagógica.
        </p>
      </div>

      <div className="card theory-card">
        {status === 'sucesso' && (
          <div className="alert alert-success" role="status">
            ✓ Mensagem enviada! A equipe vai responder em breve.
          </div>
        )}
        {status === 'erro' && <div className="alert alert-danger" role="alert">{erroMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="contato-disciplina">Componente curricular</label>
              <select
                id="contato-disciplina"
                value={form.disciplina}
                onChange={(e) => atualizarCampo('disciplina', e.target.value)}
              >
                <option value="Física">Física (Ciências da Natureza)</option>
                <option value="Química">Química (Ciências da Natureza)</option>
                <option value="Biologia">Biologia (Ciências da Natureza)</option>
                <option value="Matemática">Matemática e suas Tecnologias</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="contato-serie">Série / Ano (opcional)</label>
              <select
                id="contato-serie"
                value={form.serie}
                onChange={(e) => atualizarCampo('serie', e.target.value)}
              >
                <option value="">Não se aplica</option>
                <option value="1_EM">1º Ano — Ensino Médio</option>
                <option value="2_EM">2º Ano — Ensino Médio</option>
                <option value="3_EM">3º Ano — Ensino Médio</option>
              </select>
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="contato-nome">Seu nome</label>
              <input
                id="contato-nome"
                type="text"
                required
                value={form.nome}
                onChange={(e) => atualizarCampo('nome', e.target.value)}
                placeholder="Ex: Maria Silva"
              />
            </div>
            <div className="field">
              <label htmlFor="contato-email">Seu e-mail</label>
              <input
                id="contato-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => atualizarCampo('email', e.target.value)}
                placeholder="seu.email@escola.sp.gov.br"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contato-assunto">Assunto</label>
            <input
              id="contato-assunto"
              type="text"
              required
              value={form.assunto}
              onChange={(e) => atualizarCampo('assunto', e.target.value)}
              placeholder="Ex: Dúvida sobre um exercício"
            />
          </div>

          <div className="field">
            <label htmlFor="contato-mensagem">Mensagem ou dúvida</label>
            <textarea
              id="contato-mensagem"
              rows={5}
              required
              value={form.mensagem}
              onChange={(e) => atualizarCampo('mensagem', e.target.value)}
              placeholder="Descreva sua dúvida, exercício ou mensagem para a equipe..."
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'enviando'}>
            {status === 'enviando' ? 'Enviando…' : 'Enviar mensagem'}
          </button>
        </form>
      </div>

      <div className="contact-list" style={{ marginTop: 20 }}>
        <div className="card contact-item">
          <strong>E-mail Institucional</strong>
          <a href="mailto:monitoriaetecbraz@gmail.com">monitoriaetecbraz@gmail.com</a>
        </div>
        <div className="card contact-item">
          <strong>Repositório do Projeto</strong>
          <a href="https://github.com/clcmo/MonitoriaBNCC" target="_blank" rel="noreferrer">
            github.com/clcmo/MonitoriaBNCC
          </a>
        </div>
      </div>
    </section>
  );
}
