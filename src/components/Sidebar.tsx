import { Secao } from '../App';

interface SidebarProps {
  secaoAtiva: Secao;
  onSelect: (s: Secao) => void;
  aberto: boolean;
}

const ABAS: { id: Secao; label: string }[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'horarios', label: 'Horários' },
  { id: 'aulas', label: 'Aulas' },
  { id: 'duvidas', label: 'Tirar Dúvidas' },
  { id: 'contato', label: 'Contato' },
];

export default function Sidebar({ secaoAtiva, onSelect, aberto }: SidebarProps) {
  return (
    <aside className={`sidebar${aberto ? ' open' : ''}`}>
      <p className="sidebar-label">Navegação</p>
      <nav className="nav-list">
        {ABAS.map((aba) => (
          <a
            key={aba.id}
            className={`nav-item${secaoAtiva === aba.id ? ' active' : ''}`}
            onClick={() => onSelect(aba.id)}
          >
            {aba.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
