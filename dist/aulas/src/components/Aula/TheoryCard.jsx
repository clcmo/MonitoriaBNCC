import { BlockMath } from "react-katex";

export default function TheoryCard({ item }) {
  return (
    <article className="card theory-card">
      <span className="card-tag">Conceito</span>
      <h3>{item.titulo}</h3>
      <p>{item.descricao}</p>

      <div className="formula-card" style={{ marginTop: 20 }}>
        <span className="formula-label">Equação</span>
        <BlockMath math={item.formula} />
        <span className="formula-note">{item.observacao}</span>
      </div>
    </article>
  );
}