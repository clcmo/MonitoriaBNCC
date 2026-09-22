import { Atom, Menu, Printer } from "lucide-react";

export default function Header({ onMenu }) {
  return (
    <header className="app-header">
      <div className="brand-wrap">
        <button className="mobile-menu" onClick={onMenu} aria-label="Abrir menu">
          <Menu size={19} />
        </button>

        <a className="brand" href="#">
          <span className="brand-icon">
            <Atom size={20} />
          </span>
          <span>
            Física Lab <small>| Aula</small>
          </span>
        </a>
      </div>

      <div className="header-actions">
        <button
          className="header-button"
          onClick={() => window.print()}
          title="Imprimir ou salvar como PDF"
        >
          <Printer size={16} />
          <span>Imprimir / PDF</span>
        </button>
      </div>
    </header>
  );
}