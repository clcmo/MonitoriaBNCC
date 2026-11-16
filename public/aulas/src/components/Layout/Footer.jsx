export default function Footer({ data }) {
  return (
    <footer className="footer">
      <p>© 2026 Apprendendo • Todos os Direitos Reservados</p>
      <p>
        Desenvolvido com suporte nativo a simulações visuais e equações matematicamente
        formatadas em LaTeX (KaTeX).
      </p>
      <p>
        Aula: {data.titulo} · Componente curricular: Física · Inclui objetivos, conceitos,
        simulador visual e exercícios interativos.
      </p>
    </footer>
  );
}