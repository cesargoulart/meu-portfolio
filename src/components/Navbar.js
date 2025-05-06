import React from 'react';
import './Navbar.css'; // Criaremos este arquivo em seguida

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Meu Portfólio</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">Início</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projetos</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;