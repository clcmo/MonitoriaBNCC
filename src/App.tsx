import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Sobre from './components/Sobre';
import Horarios from './components/Horarios';
import Aulas from './components/Aulas';
import Duvidas from './components/Duvidas';
import Contato from './components/Contato';
import Footer from './components/Footer';

export type Secao = 'sobre' | 'horarios' | 'aulas' | 'duvidas' | 'contato';

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<Secao>('sobre');
  const [menuAberto, setMenuAberto] = useState(false);

  const irPara = (s: Secao) => {
    setSecaoAtiva(s);
    setMenuAberto(false);
  };

  return (
    <div className="page">
      <Header menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
      <div className="app-shell">
        <Sidebar secaoAtiva={secaoAtiva} onSelect={irPara} aberto={menuAberto} />
        <main className="content">
          {secaoAtiva === 'sobre' && <Sobre />}
          {secaoAtiva === 'horarios' && <Horarios />}
          {secaoAtiva === 'aulas' && <Aulas />}
          {secaoAtiva === 'duvidas' && <Duvidas />}
          {secaoAtiva === 'contato' && <Contato />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
