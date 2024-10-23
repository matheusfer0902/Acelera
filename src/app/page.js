import Image from "next/image";
import Navbar from "./components/navbar";
import HomeSection from "./components/homeSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSection />
    </div>
  );
}
