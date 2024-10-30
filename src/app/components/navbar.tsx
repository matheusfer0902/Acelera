import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed bg-white text-slate-800 w-full z-50 transition-colors duration-300">
      <nav>
        <div className="pl-5 container mx-auto flex justify-between items-center py-7">
          <a href="#home" className="flex-shrink-0">
            <img src="img/logo.png" alt="Logo" className="w-36" />
          </a>
          <div className="hidden sm:flex space-x-4">
            <a
              href="#home"
              className="relative text-slate-800 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <div className="border-r-2"></div>
            <a
              href="#quemSomos"
              className="relative text-slate-800 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre
            </a>
            <div className="border-r-2"></div>
            <a
              href="#contato"
              className="p-1 text-red-600 border-2 border-red-600 rounded-lg hover:text-white hover:bg-red-600"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
