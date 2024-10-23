import React from 'react';

const Navbar = () => {
  return (
    <header>
        <nav className="bg-white-500">
            <div className="container mx-auto flex justify-between items-center py-7">
                <a href="index.html" className="flex-shrink-0">
                    <img src="img/logo.png" alt="Logo" className="w-36 text-gray-800" />
                </a>
                <div className="hidden sm:flex space-x-4">
                    <a href="#" className="text-gray-800 hover:text-purple-600">Sobre</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600">Funcionalidades</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600">Feedbacks</a>
                    <a href="#" className="text-gray-800 hover:text-purple-600">Contato</a>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;