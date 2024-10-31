import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HomeSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4" style={{ background: "linear-gradient(to right, black, red)" }}>
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-white mb-4">ACELERA</h1>
        <p className="text-white text-lg mb-2">
          Somos a Acelera! Uma empresa que desenvolve soluções inovadoras para transformar o seu negócio.
        </p>
        <p className="text-white text-lg font-light pb-7">
          Confira os nossos produtos e explore o que podemos oferecer!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <a
            href="https://drive.google.com/file/d/1DFEBd7YK4crrdvOZWof5M5FZMo_0284o/view?usp=sharing"
            className="bg-red-600 rounded-lg p-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border hover:border-red-600 font-semibold text-lg mb-4 flex items-center"
          >
            Chatbot inteligente
            <ArrowUpRight className="ml-2" />
          </a>
          <p className="text-gray-700">
            Atendente de voz personalizado para cada ocasião do seu negócio, oferecendo uma experiência mais próxima e eficiente.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
          <a
            href="https://drive.google.com/file/d/18uQQXJfeO5MzSB8a8LLzco0KQ-t237kp/view?usp=sharing"
            className="bg-red-600 rounded-lg p-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border hover:border-red-600 font-semibold text-lg mb-4 flex items-center"
          >
            Tutor inteligente
            <ArrowUpRight className="ml-2" />
          </a>
          <p className="text-gray-700">
            Auxilia na administração geral da sua empresa, oferecendo suporte nas áreas financeira e operacional, seja por texto ou por voz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
