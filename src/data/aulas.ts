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
        titulo: 'Circuitos, Força e Movimento',
        disciplina: 'Física',
        serie: '2_EM',
        descricao: 'Correntes Eletricas e suas Leis',
        data: '2026-09-22',
        materialUrl: './aulas/circuitos'
    },
];
