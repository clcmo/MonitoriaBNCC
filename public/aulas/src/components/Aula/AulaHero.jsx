export default function AulaHero({ data }) {
  return (
    <section className="hero" id="inicio">
      <span className="eyebrow">Monitoria de Física · {data.codigo}</span>

      <h1>{data.titulo}</h1>

      <p>{data.subtitulo}</p>

      <div className="hero-meta">
        <span className="pill">{data.modulo}</span>
        <span className="pill">Física Lab | Aula</span>
        <span className="pill">Material interativo</span>
      </div>
    </section>
  );
}