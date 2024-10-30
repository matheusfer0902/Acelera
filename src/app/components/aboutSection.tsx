import React from 'react';
import { BookOpenText, Users, Target, BrainCog, Cpu, BotMessageSquare } from 'lucide-react';

const SaibaSection = ({ titleQuemSomos, columnsQuemSomos, titleTecnologias, columnsTecnologias }) => {
  const renderIcon = (subtitle) => {
    switch (subtitle) {
      case "História":
        return <BookOpenText className="text-red-600 w-8 h-8 mb-2" />;
      case "Equipe":
        return <Users className="text-red-600 w-8 h-8 mb-2" />;
      case "Propósito":
        return <Target className="text-red-600 w-8 h-8 mb-2" />;
      case "IA e PLN":
        return <BrainCog className="text-red-600 w-8 h-8 mb-2" />;
      case "IoT e Hardware":
        return <Cpu className="text-red-600 w-8 h-8 mb-2" />;
      case "Chatbots":
        return <BotMessageSquare className="text-red-600 w-8 h-8 mb-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="text-gray-800 h-screen flex flex-col justify-between items-center bg-white px-4 py-6 md:px-12 md:py-8">
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-bold pt-20 text-center text-red-600 mb-8">{titleQuemSomos}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columnsQuemSomos.map((column, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border-t-4 border-red-600">
              {renderIcon(column.subtitle)}
              <h3 className="text-xl font-semibold mb-3 text-black">{column.subtitle}</h3>
              <p className="text-gray-700 text-sm text-center">{column.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full mt-8">
        <h2 className="text-3xl pt-4 font-bold text-center text-red-600 mb-8">{titleTecnologias}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columnsTecnologias.map((column, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border-t-4 border-red-600">
              {renderIcon(column.subtitle)}
              <h3 className="text-xl font-semibold mb-3 text-black">{column.subtitle}</h3>
              <p className="text-gray-700 text-sm text-center">{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaibaSection;
