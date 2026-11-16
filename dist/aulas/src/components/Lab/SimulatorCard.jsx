import { FlaskConical } from "lucide-react";
import MotionSimulator from "./MotionSimulator";

export default function SimulatorCard({ laboratorio }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 15 }}>
        <FlaskConical size={19} color="var(--emerald)" />
        <strong>{laboratorio.titulo}</strong>
      </div>

      <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
        {laboratorio.descricao}
      </p>

      <MotionSimulator
        velocidadeInicial={laboratorio.velocidadeInicial}
        tempoInicial={laboratorio.tempoInicial}
      />
    </div>
  );
}