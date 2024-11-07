'use client'
import Navbar from "./components/navbar";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";

export default function Home() {

  const columnsData = [
    { subtitle: "Propósito", description: "Transformar o mundo através da tecnologia." },
    { subtitle: "História", description: "Startup em fase de incubação, focada em inovação." },
    { subtitle: "Equipe", description: "Pesquisadores e Profissionais talentosos e apaixonados por tecnologia." }
  ];

  const columnsTecnologias = [
    { subtitle: "IA e PLN", description: "Inteligência Artificial avançada para processamento de linguagem natural." },
    { subtitle: "Chatbot inteligente", description: "Assistentes virtuais inteligentes para atendimento automatizado." },
    { subtitle: "IoT e Hardware", description: "Soluções de Internet das Coisas e hardware especializado." }
  ];

  return (
    <div>
      <Navbar/>
      <div id="quemSomos">
        <AboutSection
          titleQuemSomos="Quem Somos?"
          columnsQuemSomos={columnsData}
          titleTecnologias="Tecnologias"
          columnsTecnologias={columnsTecnologias}
        />
      </div>
      <div id="home">
        <HomeSection/>
      </div>
    </div>
  );
}
