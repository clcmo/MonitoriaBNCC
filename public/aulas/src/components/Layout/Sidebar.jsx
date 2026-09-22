import { BookOpen, FlaskConical, GraduationCap, Lightbulb, Target } from "lucide-react";

const items = [
  ["inicio", "Aula", BookOpen],
  ["objetivos", "Objetivos", Target],
  ["teoria", "Teoria", Lightbulb],
  ["laboratorio", "Laboratório", FlaskConical],
  ["exercicios", "Exercícios", GraduationCap],
];

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <p className="sidebar-label">Navegação</p>

      <nav className="nav-list">
        {items.map(([id, label, Icon]) => (
          <a
            key={id}
            className={`nav-item ${id === "inicio" ? "active" : ""}`}
            href={`#${id}`}
            onClick={onNavigate}
          >
            <Icon size={17} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div style={{ marginTop: 30 }}>
        <p className="sidebar-label">Física Lab</p>
        <div className="nav-item">
          <span>Monitoria & aulas</span>
        </div>
      </div>
    </aside>
  );
}