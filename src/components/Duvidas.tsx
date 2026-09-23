import { useState } from 'react';

export default function Duvidas() {
  const [duvida, setDuvida] = useState({
    disciplina: 'Física',
    nomeAluno: '',
    emailAluno: '',
    serie: '1_EM',
    duvidaTexto: '',
  });
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const destinatario = 'monitoriaetecbraz@gmail.com';
    const assunto = encodeURIComponent(`[Monitoria - ${duvida.disciplina}] Dúvida de ${duvida.nomeAluno}`);

    const corpoEmail = encodeURIComponent(
      `Dúvida enviada via Portal de Monitoria\n\n` +
      `Aluno(a): ${duvida.nomeAluno}\n` +
      `E-mail do Aluno: ${duvida.emailAluno}\n` +
      `Componente: ${duvida.disciplina}\n` +
      `Série/Ano: ${duvida.serie.replace('_', 'º ')}\n\n` +
      `Dúvida / Exercício:\n${duvida.duvidaTexto}`
    );

    // Abre o leitor de e-mail padrão do usuário com tudo preenchido
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpoEmail}`;

    setSucesso(true);
    setTimeout(() => setSucesso(false), 5000);
    setDuvida({ disciplina: 'Física', nomeAluno: '', emailAluno: '', serie: '1_EM', duvidaTexto: '' });
  };

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Envio de Dúvidas por Componente (BNCC)</h2>
        <p>Escolha a disciplina e envie sua dúvida sobre exercícios, relatórios ou conceitos das aulas.</p>
      </div>

      <div className="card theory-card">
        {sucesso && (
          <div className="alert alert-success">
            ✓ Seu leitor de e-mail foi aberto para confirmar o envio da dúvida!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Componente Curricular</label>
            <select
              value={duvida.disciplina}
              onChange={(e) => setDuvida({ ...duvida, disciplina: e.target.value })}
            >
              <option value="Física">Física (Ciências da Natureza)</option>
              <option value="Química">Química (Ciências da Natureza)</option>
              <option value="Biologia">Biologia (Ciências da Natureza)</option>
              <option value="Matemática">Matemática e suas Tecnologias</option>
            </select>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>Seu Nome Completo</label>
              <input
                type="text"
                required
                value={duvida.nomeAluno}
                onChange={(e) => setDuvida({ ...duvida, nomeAluno: e.target.value })}
                placeholder="Ex: Maria Silva"
              />
            </div>
            <div className="field">
              <label>E-mail ou Contato</label>
              <input
                type="email"
                required
                value={duvida.emailAluno}
                onChange={(e) => setDuvida({ ...duvida, emailAluno: e.target.value })}
                placeholder="seu.email@escola.sp.gov.br"
              />
            </div>
            <div className="field">
              <label>Série / Ano</label>
              <select
                value={duvida.serie}
                onChange={(e) => setDuvida({ ...duvida, serie: e.target.value })}
              >
                <option value="1_EM">1º Ano — Ensino Médio</option>
                <option value="2_EM">2º Ano — Ensino Médio</option>
                <option value="3_EM">3º Ano — Ensino Médio</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Descrição da Dúvida / Exercício</label>
            <textarea
              rows={5}
              required
              value={duvida.duvidaTexto}
              onChange={(e) => setDuvida({ ...duvida, duvidaTexto: e.target.value })}
              placeholder="Descreva a dúvida com o máximo de detalhes possível..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar Dúvida
          </button>
        </form>
      </div>
    </section>
  );
}
