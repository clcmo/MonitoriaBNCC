# Monitoria BNCC | Aulas

Aulas interativas da Monitoria BNCC, com conteúdo separado da interface e espaço para simuladores.

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

HTML individuais de aulas ficam na raiz desta pasta e compartilham
`lesson-shell.css` e `lesson-shell.js` para o menu, ações e créditos.
```

## Criar uma nova aula

O conteúdo fica em `src/data/aulas/`.

Crie um arquivo seguindo o modelo de `movimentoUniforme.js` e passe o objeto para o componente `<Aula />`.

A ideia é manter:

**conteúdo da aula → data**

**visual e comportamento → components**

Assim, uma nova aula não precisa copiar o layout inteiro.

## Identidade

Use **Monitoria BNCC** como nome da plataforma. Para cada página HTML individual,
defina os metadados `lesson-title`, `lesson-discipline`, `lesson-test-target` e
`lesson-technical`; o título do navegador e o rodapé técnico são montados a partir deles.

O menu compartilhado reúne as âncoras da aula, a impressão em PDF e o acesso às questões.
