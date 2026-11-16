export default function Sobre() {
  return (
    <div>
      <section className="hero">
        <span className="eyebrow">Projeto de Monitoria BNCC</span>
        <h1>Aprendizagem e apoio em todas as áreas da BNCC</h1>
        <p>
          Nosso compromisso é com a formação integral dos estudantes do Ensino Médio.
          Oferecemos apoio para desenvolver autonomia, pensamento crítico e conhecimentos
          conectados aos desafios do cotidiano.
        </p>
        <div className="hero-meta">
          <span className="pill">Linguagens e suas Tecnologias</span>
          <span className="pill">Matemática e suas Tecnologias</span>
          <span className="pill">Ciências da Natureza e suas Tecnologias</span>
          <span className="pill">Ciências Humanas e Sociais Aplicadas</span>
        </div>
      </section>

      <section className="card theory-card home-announcement" aria-labelledby="humanas-2027">
        <span className="card-tag">Novidade · 2027</span>
        <h2 id="humanas-2027">Ciências Humanas estreia em 2027</h2>
        <p>
          Estamos ampliando a monitoria para incluir Ciências Humanas e Sociais Aplicadas.
          Em 2027, os estudantes também poderão contar com apoio nessa área.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Como atuamos</h2>
          <p>Três pilares orientam nosso compromisso com as áreas de conhecimento da BNCC.</p>
        </div>
        <div className="objectives">
          <div className="objective">
            <strong>Aprendizagem Ativa</strong>
            <span>Apoio focado no protagonismo do estudante na resolução de problemas.</span>
          </div>
          <div className="objective">
            <strong>Integração BNCC</strong>
            <span>Conexões entre áreas, competências e situações reais de aprendizagem.</span>
          </div>
          <div className="objective">
            <strong>Autonomia</strong>
            <span>Incentivo ao pensamento crítico e à resolução de problemas em diferentes contextos.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
