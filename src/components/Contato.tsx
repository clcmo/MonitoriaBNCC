export default function Contato() {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Canais de Contato</h2>
        <p>Entre em contato com a coordenação do projeto ou diretamente com a equipe pedagógica.</p>
      </div>

      <div className="contact-list">
        <div className="card contact-item">
          <strong>E-mail Institucional</strong>
          <a href="mailto:monitoriaetecbraz@gmail.com">monitoriaetecbraz@gmail.com</a>
        </div>
        <div className="card contact-item">
          <strong>Atendimento Presencial</strong>
          Consulte os horários na aba "Horários"
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
