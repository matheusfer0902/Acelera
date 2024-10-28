import React from 'react';

const Navbar = ({ bgColor, textColor, hoverColor, underlineColor }) => {
  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${bgColor}`}>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-7">
          <a href="#home" className="flex-shrink-0">
            <img src="img/logo.png" alt="Logo" className="w-36" />
          </a>
          <div className="hidden sm:flex space-x-4">
            <a href="#home" className={`relative ${textColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
              Home
            </a>
            <div className="border-r-2"></div>
            <a href="#quemSomos" className={`relative ${textColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
              Quem somos?
            </a>
            <div className="border-r-2"></div>
            <a href="#tecnologias" className={`relative ${textColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
              Tecnologias
            </a>
            <div className="border-r-2"></div>
            <a href="#contato" className={`relative ${textColor} ${hoverColor} after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 ${underlineColor} after:transition-all after:duration-300 hover:after:w-full`}>
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
