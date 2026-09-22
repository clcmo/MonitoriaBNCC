import { CheckCircle2 } from "lucide-react";

export default function Exercise({ item, index }) {
  return (
    <article className="card exercise">
      <span className="card-tag">Questão {index + 1}</span>
      <h3>{item.titulo}</h3>
      <p>{item.enunciado}</p>

      <div className="answer">
        <strong>
          <CheckCircle2 size={15} style={{ verticalAlign: "-3px", marginRight: 6 }} />
          Resolução
        </strong>
        <div style={{ marginTop: 7 }}>{item.resposta}</div>
      </div>
    </article>
  );
}