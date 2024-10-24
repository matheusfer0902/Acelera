import Image from "next/image";
import Navbar from "./components/navbar";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";
import Features from "./components/featuresSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSection />
      <AboutSection 
        title={"Lorem ipsum dolor sit amet"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        imgSrc={"/icons8-bot-100.png"}
      />
      <Features />
    </div>
  );
}
