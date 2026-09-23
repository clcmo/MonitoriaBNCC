import { MONITORES } from '../data/monitores';

export default function Horarios() {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Horários de Atendimento</h2>
        <p>Confira a disponibilidade para atendimentos presenciais e plantões digitais.</p>
      </div>

      <div className="cards">
        {MONITORES.map((m) => (
          <div className="card theory-card" key={m.id}>
            <span className="card-tag">{m.areaBNCC}</span>
            <h3>{m.materia}</h3>
            <p>{m.nome}</p>
            <p style={{ marginTop: 10, color: '#cbd5e1' }}>
              {m.horario} · {m.local}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
