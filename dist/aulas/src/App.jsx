import Aula from "./pages/Aula";
import { aulaMovimentoUniforme } from "./data/aulas/movimentoUniforme";

export default function App() {
  return <Aula data={aulaMovimentoUniforme} />;
}