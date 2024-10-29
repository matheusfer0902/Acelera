'use client'
import { useState, useEffect, useRef } from 'react';
import Navbar from "./components/navbar";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";
import Features from "./components/featuresSection";

export default function Home() {
  const [navbarStyles, setNavbarStyles] = useState({
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    hoverColor: 'hover:text-purple-600',
    underlineColor: 'after:bg-purple-600'
  });
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = () => {
    const homeTop = homeRef.current.getBoundingClientRect().top;
    const aboutTop = aboutRef.current.getBoundingClientRect().top;
    const featuresTop = featuresRef.current.getBoundingClientRect().top;

    if (homeTop <= 0 && aboutTop > 0) {
      setNavbarStyles({
        bgColor: 'bg-white',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-purple-600',
        underlineColor: 'after:bg-purple-600'
      });
    } else if (aboutTop <= 0 && featuresTop > 0) {
      setNavbarStyles({
        bgColor: 'bg-purple-600',
        textColor: 'text-white',
        hoverColor: 'hover:text-cyan-400',
        underlineColor: 'after:bg-cyan-400'
      });
    } else if (featuresTop <= 0) {
      setNavbarStyles({
        bgColor: 'bg-white',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-purple-600',
        underlineColor: 'after:bg-purple-600'
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const columnsData = [
    { subtitle: "Propósito", description: "Transformar o mundo através da tecnologia." },
    { subtitle: "História", description: "Startup em fase de incubação, focada em inovação." },
    { subtitle: "Equipe", description: "Pesquisadores e Profissionais talentosos e apaixonados por tecnologia." }
  ];

  return (
    <div>
      <Navbar 
        bgColor={navbarStyles.bgColor} 
        textColor={navbarStyles.textColor}
        hoverColor={navbarStyles.hoverColor}
        underlineColor={navbarStyles.underlineColor}
      />
      <div ref={homeRef}>
        <HomeSection id="home"/>
      </div>
      <div ref={aboutRef}>
        <AboutSection title={"Quem somos?"} columns={columnsData} id="quemSomos"/>
      </div>
      <div ref={featuresRef}>
        <Features id="tecnologias"/>
      </div>
    </div>
  );
}
