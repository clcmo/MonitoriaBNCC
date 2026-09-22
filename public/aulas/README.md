# Física Lab | Aula

Base React para aulas de Física com identidade visual unificada, conteúdo separado da interface e espaço para simuladores.

## Stack

- React + Vite
- KaTeX / react-katex para fórmulas
- Lucide React para ícones
- CSS próprio com variáveis de tema
- Canvas para o simulador de movimento

## Rodar

```bash
npm install
npm run dev
```

Depois abra a URL indicada pelo Vite.

## Estrutura

```text
src/
├── components/
│   ├── Aula/
│   ├── Lab/
│   └── Layout/
├── data/
│   └── aulas/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
```

## Criar uma nova aula

O conteúdo fica em `src/data/aulas/`.

Crie um arquivo seguindo o modelo de `movimentoUniforme.js` e passe o objeto para o componente `<Aula />`.

A ideia é manter:

**conteúdo da aula → data**

**visual e comportamento → components**

Assim, uma nova aula não precisa copiar o layout inteiro.

## Identidade

Nome principal:

**Física Lab | Aula**

O mesmo padrão pode futuramente receber:

- Física Lab | Simulador
- Física Lab | Experimento
- Física Lab | Exercícios
- Física Lab | Monitoria
