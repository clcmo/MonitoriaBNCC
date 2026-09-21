export default function Contato() {
  return (
    <section className="box">
      <h2 className="title is-4">Canais de Contato</h2>
      <p className="mb-4">
        Entre em contato com a coordenação do projeto ou diretamente com a equipe pedagógica.
      </p>
      <div className="content">
        <ul>
          <li><strong>E-mail Institucional:</strong> <a href="mailto:monitoriaetecbraz@gmail.com">monitoriaetecbraz@gmail.com</a></li>
          <li><strong>Atendimento Presencial:</strong> Consulte os <a href="./Horarios">horários</a></li>
          <li>
            <strong>Repositório do Projeto:</strong>{' '}
            <a href="https://github.com/clcmo/MonitoriaBNCC" target="_blank" rel="noreferrer">
              github.com/clcmo/MonitoriaBNCC
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}