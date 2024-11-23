// src/components/Layout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = ({ navbarColor }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Demo App</h1>
        <nav>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
            <li><Link to="/counter" className="hover:text-gray-300">Compteur</Link></li>
            <li><Link to="/todo" className="hover:text-gray-300">Todo List</Link></li>
            <li><Link to="/form" className="hover:text-gray-300">Formulaire Dynamique</Link></li>
            <li><Link to="/calculator" className="hover:text-gray-300">Calculatrice</Link></li>
            <li><Link to="/tictactoe" className="hover:text-gray-300">Morpion</Link></li>
            <li><Link to="/api" className="hover:text-gray-300">Appel API</Link></li>
            <li><Link to="/theme" className="hover:text-gray-300">Gestion d'État</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className={`bg-${navbarColor}-500 text-white p-4`}>
          <h2 className="text-xl font-bold">Navbar</h2>
        </div>
        
        {/* Page content */}
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;