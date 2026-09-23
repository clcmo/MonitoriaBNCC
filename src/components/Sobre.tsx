export default function Sobre() {
  return (
    <div>
      <section className="hero">
        <span className="eyebrow">Projeto de Monitoria</span>
        <h1>Suporte contínuo em Ciências Exatas, alinhado à BNCC</h1>
        <p>
          Atendimento síncrono (presencial e online) e plantão de dúvidas para o Ensino
          Médio, com foco no desenvolvimento da autonomia dos estudantes, do raciocínio
          crítico-científico e da resolução de problemas práticos do cotidiano.
        </p>
        <div className="hero-meta">
          <span className="pill">Física</span>
          <span className="pill">Química</span>
          <span className="pill">Biologia</span>
          <span className="pill">Matemática</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Como atuamos</h2>
          <p>Três pilares orientam o trabalho da monitoria ao longo do ano letivo.</p>
        </div>
        <div className="objectives">
          <div className="objective">
            <strong>Aprendizagem Ativa</strong>
            <span>Apoio focado no protagonismo do estudante na resolução de problemas.</span>
          </div>
          <div className="objective">
            <strong>Integração BNCC</strong>
            <span>Foco nas competências de investigação científica e modelagem matemática.</span>
          </div>
          <div className="objective">
            <strong>Autonomia</strong>
            <span>Incentivo ao raciocínio crítico-científico e à resolução prática de problemas.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
