'use client'
import Navbar from "./components/navbar";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";
import Features from "./components/featuresSection";

export default function Home() {

  const columnsData = [
    { subtitle: "Propósito", description: "Transformar o mundo através da tecnologia." },
    { subtitle: "História", description: "Startup em fase de incubação, focada em inovação." },
    { subtitle: "Equipe", description: "Pesquisadores e Profissionais talentosos e apaixonados por tecnologia." }
  ];

  return (
    
    <div>
      <Navbar/>
      <HomeSection id="home"/>
      <AboutSection 
        title={"Quem somos?"}
        columns={columnsData}
        id="quemSomos"
      />
      <Features id="tecnologias"/>
    </div>
  );
}
