interface HeaderProps {
  menuAberto: boolean;
  setMenuAberto: (v: boolean) => void;
}

export default function Header({ menuAberto, setMenuAberto }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="brand-wrap">
        <button
          className="mobile-menu"
          aria-label="Abrir menu de navegação"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
        <div className="brand">
          <span className="brand-icon">Σ</span>
          <span>
            Monitoria Exatas
            <small>BNCC · Ensino Médio</small>
          </span>
        </div>
      </div>
      <div className="header-actions">
        <a
          className="header-button"
          href="https://github.com/clcmo/MonitoriaBNCC"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
}
