import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed bg-white text-slate-800 w-full z-50 transition-colors duration-300">
      <nav>
        <div className="container mx-auto flex justify-between items-center py-4 px-5">
          <a href="#home" className="flex items-center">
            <img src='/logonavbar.jpeg' className='h-8' alt="Logo" />
          </a>
          
          <div className="hidden sm:flex space-x-6 items-center">
            <a href="#home" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:text-red-500">
              Home
            </a>
            <div className="border-r-2 h-5"></div>
            <a href="#quemSomos" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:text-red-500">
              Sobre
            </a>
            <div className="border-r-2 h-5"></div>
            <a href="https://forms.gle/DzbvBU3ks9yCzYwv9" className="text-red-500 border-2 border-red-500 rounded-md px-3 py-1 transition-colors duration-300 hover:bg-red-500 hover:text-white">
              Contato
            </a>
          </div>

          <a
            href="https://forms.gle/DzbvBU3ks9yCzYwv9"
            className="sm:hidden text-red-500 border-2 border-red-500 rounded-md px-3 py-1 transition-colors duration-300 hover:bg-red-500 hover:text-white"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
