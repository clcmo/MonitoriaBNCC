export default function AulaHero({ data }) {
  return (
    <section className="hero" id="inicio">
      <span className="eyebrow">Monitoria BNCC · Física · {data.codigo}</span>

      <h1>{data.titulo}</h1>

      <p>{data.subtitulo}</p>

      <div className="hero-meta">
        <span className="pill">{data.modulo}</span>
        <span className="pill discipline-indicator">
          <span>Física</span>
          <i className="fa-solid fa-bolt" aria-hidden="true" />
          <span className="sr-only">Disciplina: Física</span>
        </span>
        <span className="pill">Material interativo</span>
      </div>
    </section>
  );
}