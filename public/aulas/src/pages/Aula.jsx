import { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";
import AulaHero from "../components/Aula/AulaHero";
import Section from "../components/Aula/Section";
import TheoryCard from "../components/Aula/TheoryCard";
import Exercise from "../components/Aula/Exercise";
import SimulatorCard from "../components/Lab/SimulatorCard";

export default function Aula({ data }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="page">
      <Header onMenu={() => setSidebarOpen((value) => !value)} />

      <div className="app-shell">
        <Sidebar
          open={sidebarOpen}
          onNavigate={() => setSidebarOpen(false)}
        />

        <main className="content">
          <AulaHero data={data} />

          <Section
            id="objetivos"
            title="Objetivos da aula"
            description="Ao final desta aula, a pessoa estudante deverá conseguir:"
          >
            <div className="objectives">
              {data.objetivos.map((objetivo, index) => (
                <div className="objective" key={objetivo}>
                  <strong>0{index + 1}</strong>
                  <span>{objetivo}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="teoria"
            title="Conceitos fundamentais"
            description="A teoria fica em componentes reutilizáveis para que novas aulas possam usar o mesmo padrão."
          >
            <div className="cards">
              {data.teoria.map((item) => (
                <TheoryCard key={item.titulo} item={item} />
              ))}
            </div>
          </Section>

          <Section
            id="laboratorio"
            title="Laboratório"
            description="Um espaço reservado para transformar o conteúdo matemático em uma experiência interativa."
          >
            <SimulatorCard laboratorio={data.laboratorio} />
          </Section>

          <Section
            id="exercicios"
            title="Exercícios"
            description="As questões também ficam separadas do layout para facilitar a criação de novas aulas."
          >
            <div className="exercise-list">
              {data.exercicios.map((item, index) => (
                <Exercise key={item.titulo} item={item} index={index} />
              ))}
            </div>
          </Section>

          <Footer />
        </main>
      </div>
    </div>
  );
}