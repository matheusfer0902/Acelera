import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HomeSection = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-8" style={{ background: "linear-gradient(to right, black, red)" }}>
      <div className="hidden md:block text-center mb-8 max-w-2xl sm:pt-4">
        <h1 className="text-5xl font-extrabold text-white mb-4">AcelerAI</h1>
        <p className="text-white text-lg mb-2">
          Somos a AcelerAI! Uma empresa que desenvolve soluções inovadoras para transformar o seu negócio.
        </p>
        <p className="text-white text-lg font-light">
          Confira os nossos produtos e explore o que podemos oferecer!
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-between max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center h-30 sm:h-65 w-full md:w-[48%] mb-10 md:mb-0">
          <a
            href="https://drive.google.com/file/d/1DFEBd7YK4crrdvOZWof5M5FZMo_0284o/view?usp=sharing"
            className="bg-red-600 rounded-lg p-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border hover:border-red-600 font-semibold text-lg mb-4 flex items-center"
          >
            Chatbot inteligente
            <ArrowUpRight className="ml-2" />
          </a>
          <p className="text-gray-700 font-semibold">
            Chatbot personalizado para cada ocasião do seu negócio.
          </p>
          <img src='/chatbot.png' className='h-20 w-20 sm:h-40 sm:w-40'></img>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center h-65 w-full md:w-[48%]">
          <a
            href="https://drive.google.com/file/d/18uQQXJfeO5MzSB8a8LLzco0KQ-t237kp/view?usp=sharing"
            className="bg-red-600 rounded-lg p-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border hover:border-red-600 font-semibold text-lg mb-4 flex items-center"
          >
            Tutor inteligente
            <ArrowUpRight className="ml-2" />
          </a>
          <p className="text-gray-700 font-semibold">
            Auxilia na sua preparação para cursos e concursos.
          </p>
          <img src='/tutor.png' className='h-20 w-20 sm:h-40 sm:w-40'></img>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
