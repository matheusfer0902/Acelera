import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HomeSection = () => {
  return (
    <div className="bg-purple-600 h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">LOGO</h1>
        <p className="text-white">
          Somos a Acelera! Uma empresa que desenvolve soluções Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
        </p>
        <p className="text-white">
          Confira as nossas demos!
        </p>
      </div>
      <div className="flex space-x-4">
        <div className='border border-white-2 rounded-lg p-4'>
          <a
            href="https://drive.google.com/file/d/1DFEBd7YK4crrdvOZWof5M5FZMo_0284o/view?usp=sharing"
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-white flex items-center"
          >
            Atendente por voz
            <ArrowUpRight className="ml-2" />
          </a>
          <p className='pt-2'>Atendente de voz personalizado para cada ocasião do seu negócio. 
            lorem Lorem lorem lorem Atendente de voz personalizado para cada ocasião do seu negócio. 
            lorem Lorem lorem lorem Atendente de voz personalizado para cada ocasião do seu negócio. 
            lorem Lorem lorem lorem
          </p>
        </div>
        <div className='border border-white-2 rounded-lg p-4'>
          <a
            href="https://drive.google.com/file/d/18uQQXJfeO5MzSB8a8LLzco0KQ-t237kp/view?usp=sharing"
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-white flex items-center"
          >
            Gestor inteligente
            <ArrowUpRight className="ml-2" />
          </a>
          <p className='pt-2'>Gestor inteligente, auxilia na administração geral da sua empresa. 
            Seja a área financeira, como porcentagem de vendas, faturamento. 
            O gestor funciona tanto com texto, como por voz!
          </p>
        </div>
        <div className='border border-white-2 rounded-lg p-4'>
          <a
            href="https://drive.google.com/file/d/1LedJXzVlRjBJ-puujQrFLsXq7sLGmo3j/view?usp=sharing"
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-white flex items-center"
          >
            Plataforma de vendas
            <ArrowUpRight className="ml-2" />
          </a>
          <p className='pt-2'>Plataforma de gerenciamento de chatbots com IA. 
            Plataforma completa para o gerenciamento e monitoramento de vendas. 
            Uma IA ira supervisionar chatbots para as vendas
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
