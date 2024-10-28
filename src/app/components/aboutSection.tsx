import React from 'react';

const SaibaSection = ({ title, columns }) => {
  return (
    <div className="py-16 text-gray-800 h-screen flex flex-col justify-center items-center">
      {/* Título centralizado */}
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      {/* Colunas com subtítulos e descrições */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {columns.map((column, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">{column.subtitle}</h3>
            <p className="text-gray-600">{column.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaibaSection;
