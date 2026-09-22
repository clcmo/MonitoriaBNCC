export const aulaMovimentoUniforme = {
  codigo: "FIS-01",
  modulo: "Cinemática",
  titulo: "Movimento Uniforme",
  subtitulo:
    "Uma base visual para compreender posição, deslocamento, velocidade e a descrição matemática do movimento.",
  objetivos: [
    "Compreender posição, deslocamento e intervalo de tempo.",
    "Relacionar deslocamento e velocidade média.",
    "Interpretar a representação matemática de um movimento."
  ],
  teoria: [
    {
      titulo: "Velocidade média",
      descricao:
        "A velocidade média relaciona a variação da posição de um móvel com o intervalo de tempo considerado. Nesta base, a equação aparece separada do texto para facilitar a leitura durante a aula.",
      formula: "\\bar{v} = \\frac{\\Delta s}{\\Delta t}",
      observacao: "Δs representa o deslocamento e Δt representa o intervalo de tempo."
    },
    {
      titulo: "Função horária da posição",
      descricao:
        "No movimento uniforme, a posição pode ser descrita a partir da posição inicial e da velocidade constante.",
      formula: "s(t) = s_0 + vt",
      observacao: "s₀ é a posição inicial e v é a velocidade."
    }
  ],
  laboratorio: {
    titulo: "Simulador de Movimento",
    descricao:
      "Altere a velocidade e o tempo para observar a posição do móvel em uma representação simples.",
    velocidadeInicial: 2,
    tempoInicial: 5
  },
  exercicios: [
    {
      titulo: "Questão 1",
      enunciado:
        "Um móvel parte da posição 10 m e se desloca com velocidade constante de 2 m/s. Qual é sua posição após 5 s?",
      resposta:
        "Usando s(t) = s₀ + vt: s = 10 + 2 · 5 = 20 m."
    },
    {
      titulo: "Questão 2",
      enunciado:
        "Um móvel percorre 60 m em 12 s. Considerando o deslocamento no mesmo sentido do movimento, determine sua velocidade média.",
      resposta:
        "Usando v̄ = Δs/Δt: v̄ = 60/12 = 5 m/s."
    }
  ]
};