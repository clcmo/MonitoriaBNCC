import { useState } from 'react';
import { enviarMensagemContato } from '../services/email';

type Status = 'idle' | 'enviando' | 'sucesso' | 'erro';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [erroMsg, setErroMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');
    setErroMsg('');

    try {
      await enviarMensagemContato(form);
      setStatus('sucesso');
      setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    } catch (err) {
      setStatus('erro');
      setErroMsg(err instanceof Error ? err.message : 'Não foi possível enviar sua mensagem.');
    }
  };

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Canais de Contato</h2>
        <p>Envie uma mensagem direto para a coordenação do projeto e a equipe pedagógica.</p>
      </div>

      <div className="card theory-card">
        {status === 'sucesso' && (
          <div className="alert alert-success">✓ Mensagem enviada! A equipe vai responder em breve.</div>
        )}
        {status === 'erro' && <div className="alert alert-danger">{erroMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label>Seu Nome</label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Ex: Maria Silva"
              />
            </div>
            <div className="field">
              <label>Seu E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu.email@escola.sp.gov.br"
              />
            </div>
          </div>

          <div className="field">
            <label>Assunto</label>
            <input
              type="text"
              required
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              placeholder="Ex: Dúvida sobre horários de atendimento"
            />
          </div>

          <div className="field">
            <label>Mensagem</label>
            <textarea
              rows={5}
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Escreva sua mensagem..."
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'enviando'}>
            {status === 'enviando' ? 'Enviando…' : 'Enviar Mensagem'}
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
