import { useEffect, useRef, useState } from "react";

export default function MotionSimulator({ velocidadeInicial = 2, tempoInicial = 5 }) {
  const canvasRef = useRef(null);
  const [velocidade, setVelocidade] = useState(velocidadeInicial);
  const [tempo, setTempo] = useState(tempoInicial);

  const posicao = 10 + velocidade * tempo;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, width, height);

    const y = height / 2;
    const left = 50;
    const right = width - 50;

    ctx.strokeStyle = "#26354d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();

    for (let i = 0; i <= 10; i++) {
      const x = left + ((right - left) * i) / 10;
      ctx.strokeStyle = "#17233a";
      ctx.beginPath();
      ctx.moveTo(x, y - 9);
      ctx.lineTo(x, y + 9);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "12px Inter, sans-serif";
      ctx.fillText(`${i * 10} m`, x - 12, y + 30);
    }

    const normalized = Math.min(posicao / 100, 1);
    const x = left + (right - left) * normalized;

    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "600 13px Inter, sans-serif";
    ctx.fillText(`s = ${posicao.toFixed(1)} m`, Math.min(x + 20, right - 90), y - 22);
  }, [posicao]);

  return (
    <div className="card lab-card">
      <div className="lab-controls">
        <label className="control">
          <div className="control-row">
            <span>Velocidade</span>
            <output>{velocidade.toFixed(1)} m/s</output>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={velocidade}
            onChange={(event) => setVelocidade(Number(event.target.value))}
          />
        </label>

        <label className="control">
          <div className="control-row">
            <span>Tempo</span>
            <output>{tempo.toFixed(1)} s</output>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={tempo}
            onChange={(event) => setTempo(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="canvas-wrap">
        <canvas ref={canvasRef} width="900" height="270" />
      </div>

      <div className="result-grid">
        <div className="result">
          <small>Posição inicial</small>
          <strong>10 m</strong>
        </div>
        <div className="result">
          <small>Velocidade</small>
          <strong>{velocidade.toFixed(1)} m/s</strong>
        </div>
        <div className="result">
          <small>Posição final</small>
          <strong>{posicao.toFixed(1)} m</strong>
        </div>
      </div>
    </div>
  );
}