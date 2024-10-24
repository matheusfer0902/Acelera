'use client'

import { useState } from 'react';

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(0); // Estado para controlar a imagem atual

  // Lista de categorias e imagens associadas
  const categories = [
    { label: 'Segurança', imageUrl: '/yellow-background.png' },
    { label: 'Facilidade', imageUrl: '/yellow-background.png' },
    { label: 'Velocidade', imageUrl: '/yellow-background.png' },
  ];

  return (
    <div className="bg-purple-600 h-screen flex justify-center items-center flex-col">
      {/* Botões no topo */}
      <div className="flex space-x-4 mb-6 bg-purple-600 p-2 rounded-lg shadow-md">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)} // Altera a imagem ao clicar
            className={`py-2 px-4 rounded-full focus:outline-none transition-colors duration-300 
              ${selectedImage === index ? 'bg-white text-black shadow-md' : 'bg-gray-200 text-gray-500'}`}
            >
              {category.label}
          </button>
        ))}
      </div>

      {/* Imagem central */}
      <div className="bg-purple-600 w-full h-64 flex justify-center items-center bg-gray-100">
        <img
          src={categories[selectedImage].imageUrl}
          alt={categories[selectedImage].label}
          className="object-contain w-1/2 h-full"
        />
      </div>
    </div>
  );
};

export default Features;
