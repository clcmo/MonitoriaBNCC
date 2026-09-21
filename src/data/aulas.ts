export interface Aula {
  id: string;
  titulo: string;
  disciplina: 'Física' | 'Química' | 'Biologia' | 'Matemática';
  serie: '1_EM' | '2_EM' | '3_EM';
  descricao: string;
  data: string; // formato ISO, ex: '2026-09-08'
  materialUrl?: string;
}

// Dados de exemplo — usados enquanto a API real de aulas não existir.
// Ver src/services/aulasApi.ts para o ponto de troca.
export const AULAS_MOCK: Aula[] = [
    {
        id:'1',
        titulo: 'Eletrodinâmica',
        disciplina: 'Física',
        serie: '2_EM',
        descricao: 'Correntes Eletricas e suas Leis',
        data: '2026-09-15'
        materialUrl: './aulas/circuitos.html'
    },
    {
    id: '2',
    titulo: 'Cinemática: Movimento Uniforme',
    disciplina: 'Física',
    serie: '1_EM',
    descricao: 'Introdução aos conceitos de deslocamento, velocidade e MU.',
    data: '2026-09-15',
  },
  {
    id: '3',
    titulo: 'Leis de Newton',
    disciplina: 'Física',
    serie: '2_EM',
    descricao: 'Revisão das três leis de Newton com exercícios aplicados.',
    data: '2026-09-22',
  },
  {
    id: '4',
    titulo: 'Funções do 1º grau',
    disciplina: 'Matemática',
    serie: '1_EM',
    descricao: 'Construção de gráficos e resolução de problemas.',
    data: '2026-09-11',
  },
];