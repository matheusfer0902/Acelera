'use client'

const Features = () => {
  // Lista de categorias com título e descrição
  const categories = [
    { title: 'IA e PLN', description: 'Exploração de inteligência artificial e processamento de linguagem natural para automação avançada.' },
    { title: 'Chatbots', description: 'Desenvolvimento de chatbots para interação automática e inteligente com usuários.' },
    { title: 'IoT e Hardware', description: 'Integração de dispositivos IoT e componentes de hardware para soluções inovadoras.' },
  ];

  return (
    <div className="bg-purple-600 h-screen flex justify-center items-center flex-col space-y-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`bg-white text-gray-800 p-6 rounded-lg shadow-md w-80 transition-transform duration-300 
            ${index === 1 ? 'ml-16' : index === 0 ? 'mr-20' : 'mr-20'}`} // Aplica margem extra na categoria do meio
          style={{ transform: index === 1 ? 'translateX(40px)' : 'none' }} // Move a segunda categoria para a direita
        >
          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
          <p className="text-sm">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
