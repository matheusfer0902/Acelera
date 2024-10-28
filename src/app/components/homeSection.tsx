import React from 'react';

const HomeSection = () => {
  return (
    <div className="bg-purple-600 h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center p-4 md:space-x-4">
        {/* Texto e formulário */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Lorem Ipsum</h1>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tincidunt augue, vel vestibulum risus.
          </p>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <img
            src="/PhoneIMG.png"
            alt="Mulher segurando moeda"
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;