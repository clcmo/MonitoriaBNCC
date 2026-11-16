import { AreaBNCC, ComponenteCurricular, Disciplina } from './disciplinas';

export interface Monitor {
  id: string;
  materia: ComponenteCurricular;
  disciplinasIntegradas?: Disciplina[];
  areaBNCC: AreaBNCC | AreaBNCC[];
  nome: string;
  horario: string;
  local: string;
}

export const MONITORES: Monitor[] = [
  {
    id: '1',
    materia: 'Física',
    areaBNCC: 'Ciências da Natureza e suas Tecnologias',
    nome: 'Camila',
    horario: 'Segundas — 7h às 9h',
    local: 'Sala de aula',
  },
  {
    id: '2',
    materia: 'Física',
    areaBNCC: 'Ciências da Natureza e suas Tecnologias',
    nome: 'Felipe',
    horario: 'Terças — 7h às 9h',
    local: 'Sala de aula',
  },
  {
    id: '3',
    materia: 'Matemática',
    areaBNCC: 'Matemática e suas Tecnologias',
    nome: 'Lucas',
    horario: 'Quartas — 13h às 15h',
    local: 'Sala de aula',
  },
  {
    id: '4',
    materia: 'Matemática',
    areaBNCC: 'Matemática e suas Tecnologias',
    nome: 'Gabriel',
    horario: 'Quartas — 7h às 9h',
    local: 'Sala de aula',
  },
];