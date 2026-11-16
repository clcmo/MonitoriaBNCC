import { AreaBNCC, ComponenteCurricular, Disciplina } from './disciplinas';

export type Serie = '1_EM' | '2_EM' | '3_EM';

export interface Aula {
  id: string;
  titulo: string;
  disciplina: ComponenteCurricular;
  disciplinasIntegradas?: Disciplina[];
  areaBNCC?: AreaBNCC | AreaBNCC[];
  monitorDisponibilizador?: string;
  serie: Serie | Serie[];
  descricao: string;
  data: string; // formato ISO, ex: '2026-09-08'
  materialUrl?: string;
}

// Dados de exemplo — usados enquanto a API real de aulas não existir.
// Ver src/services/aulasApi.ts para o ponto de troca.
export const AULAS_MOCK: Aula[] = [
    {
        id:'1',
        titulo: 'Circuitos, Força e Movimento',
        disciplina: 'Física',
        monitorDisponibilizador: 'Camila',
        serie: '2_EM',
        descricao: 'Correntes Eletricas e suas Leis',
        data: '2026-09-22',
        materialUrl: './aulas/circuitos.html'
    },
    {
        id:'2',
        titulo: 'Trigonometria Aplicada',
        disciplina: 'Física',
        monitorDisponibilizador: 'Camila',
        serie: '1_EM',
        descricao: 'Seno, Cosseno e Tangente Aplicadas',
        data: '2026-09-29',
        materialUrl: './aulas/trigonometria.html'
    },
  {
    id:'3',
        titulo: 'Simulado Provão',
        disciplina: 'Física',
        monitorDisponibilizador: 'Camila',
        serie: '1_EM',
        descricao: 'Simulado dedicado as questões de ciências exatas',
        data: '2026-10-20',
        materialUrl: './aulas/simulado.html'
  },
  {
    id:'4',
        titulo: 'Revisão',
        disciplina: 'Interdisciplinar',
        monitorDisponibilizador: 'Camila',
        disciplinasIntegradas: ['Física', 'Química', 'Biologia', 'Matemática'],
        areaBNCC: [
          'Ciências da Natureza e suas Tecnologias',
          'Matemática e suas Tecnologias',
        ],
        serie: ['1_EM','2_EM'],
        descricao: 'Revisão dedicado as questões de ciências exatas e das naturezas aplicadas ao Ensino Médio e Técnico',
        data: '2026-10-20',
        materialUrl: './aulas/revisao.html'
  },
  {
    id: '5',
    titulo: 'Óptica Geométrica: a luz também faz contas',
    disciplina: 'Física',
    monitorDisponibilizador: 'Camila',
    areaBNCC: 'Ciências da Natureza e suas Tecnologias',
    serie: ['2_EM', '3_EM'],
    descricao: 'Reflexão, refração e lentes com trigonometria, equações e simuladores interativos.',
    data: '2026-11-15',
    materialUrl: './aulas/optica.html'
  }
];
