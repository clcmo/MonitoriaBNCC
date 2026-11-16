export const DISCIPLINAS_POR_AREA = {
  'Linguagens e suas Tecnologias': [
    'Língua Portuguesa',
    'Língua Inglesa',
    'Arte',
    'Educação Física',
  ],
  'Matemática e suas Tecnologias': ['Matemática'],
  'Ciências da Natureza e suas Tecnologias': ['Física', 'Química', 'Biologia'],
  'Ciências Humanas e Sociais Aplicadas': [
    'História',
    'Geografia',
    'Filosofia',
    'Sociologia',
  ],
} as const;

export type AreaBNCC = keyof typeof DISCIPLINAS_POR_AREA;
export type Disciplina = (typeof DISCIPLINAS_POR_AREA)[AreaBNCC][number];
export type ComponenteCurricular = Disciplina | 'Interdisciplinar';
