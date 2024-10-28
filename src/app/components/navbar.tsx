import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white-500 z-50">
        <nav className="bg-white-500">
            <div className="container mx-auto flex justify-between items-center py-7">
                <a href="#home" className="flex-shrink-0">
                    <img src="img/logo.png" alt="Logo" className="w-36 text-gray-800" />
                </a>
                <div className="hidden sm:flex space-x-4">
                    <a href="#quemSomos" className="text-gray-800 hover:text-purple-600">Quem somos?</a>
                    <a href="#tecnologias" className="text-gray-800 hover:text-purple-600">Tecnologias</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600">Demos</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600">Contato</a>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;