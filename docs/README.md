# MonitoriaBNCC

[![GitHub license](https://img.shields.io/github/license/clcmo/MonitoriaBNCC?style=for-the-badge)](https://github.com/clcmo/MonitoriaBNCC)
[![GitHub stars](https://img.shields.io/github/stars/clcmo/MonitoriaBNCC?style=for-the-badge)](https://github.com/clcmo/MonitoriaBNCC/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/clcmo/MonitoriaBNCC?style=for-the-badge)](https://github.com/clcmo/MonitoriaBNCC/network)
[![GitHub issues](https://img.shields.io/github/issues/clcmo/MonitoriaBNCC?style=for-the-badge)](https://github.com/clcmo/MonitoriaBNCC/issues)
[![GitHub donate](https://img.shields.io/github/sponsors/clcmo?color=pink&style=for-the-badge)](https://github.com/sponsors/clcmo)

Plataforma de monitoria voltada às disciplinas de Ciências Exatas — Física, Matemática e áreas afins de Ciências da Natureza e suas Tecnologias — com conteúdo alinhado à Base Nacional Comum Curricular (BNCC).

🌐 Disponível em: [dev.camilaloliveira.me/MonitoriaBNCC](http://dev.camilaloliveira.me/MonitoriaBNCC/)

## Começando

Instruções para iniciar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) e npm instalados
- Git

### Instalação
1. Clone o repositório:

   ```bash
   git clone https://github.com/clcmo/MonitoriaBNCC.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd MonitoriaBNCC
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Após a instalação, o ambiente de desenvolvimento é iniciado com:

```bash
npm run dev
```

> O projeto conta com um workflow configurado (`.github`) que já automatiza a execução/build a partir desse comando.

Funcionalidades da plataforma:

- Acesso às aulas por meio de uma API integrada ao blog [Apreendendo](https://apreendendo.blog), trazendo apenas os conteúdos relacionados à Base Comum (a implementar)
- Consulta aos dias e horários já definidos da monitoria
- Espaço para os alunos tirarem dúvidas diretamente pela plataforma (a implementar)

> 🚧 Em desenvolvimento: API integrada ao blog,encaminhamento automático das dúvidas enviadas na plataforma para e-mail.

## Contribuindo

Instruções para contribuir com o projeto estão presentes em [CONTRIBUTTING](CONTRIBUTING.md).

## Licença

Licença [MIT](https://github.com/clcmo/MonitoriaBNCC/blob/main/docs/LICENSE)