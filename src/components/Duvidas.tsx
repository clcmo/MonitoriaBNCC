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
    <section className="box">
      <h2 className="title is-4">Envio de Dúvidas por Componente (BNCC)</h2>
      <p className="mb-4">
        Escolha a disciplina e envie sua dúvida sobre exercícios, relatórios ou conceitos das aulas.
      </p>

      {sucesso && (
        <div className="notification is-success is-light">
          ✓ Seu leitor de e-mail foi aberto para confirmar o envio da dúvida!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Componente Curricular</label>
          <div className="control">
            <div className="select is-fullwidth">
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
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Seu Nome Completo</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  required
                  value={duvida.nomeAluno}
                  onChange={(e) => setDuvida({ ...duvida, nomeAluno: e.target.value })}
                  placeholder="Ex: Maria Silva"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">E-mail ou Contato</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  required
                  value={duvida.emailAluno}
                  onChange={(e) => setDuvida({ ...duvida, emailAluno: e.target.value })}
                  placeholder="seu.email@escola.sp.gov.br"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Série / Ano</label>
              <div className="control">
                <div className="select is-fullwidth">
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
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Descrição da Dúvida / Exercício</label>
          <div className="control">
            <textarea
              className="textarea"
              rows={5}
              required
              value={duvida.duvidaTexto}
              onChange={(e) => setDuvida({ ...duvida, duvidaTexto: e.target.value })}
              placeholder="Descreva a dúvida com o máximo de detalhes possível..."
            />
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-link">
            Enviar Dúvida
          </button>
        </div>
      </form>
    </section>
  );
}
