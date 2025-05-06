import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <p className="hello">Olá, eu sou</p>
        <h1 className="name">Seu Nome</h1>
        <h3 className="title">Desenvolvedor Web</h3>
        <p className="description">
          Sou um desenvolvedor apaixonado por criar experiências web interativas e responsivas.
          Especializado em React, JavaScript e design de interfaces.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn primary-btn">Contato</a>
          <a href="#projects" className="btn secondary-btn">Ver Projetos</a>
        </div>
      </div>
      <div className="home-image">
        <div className="image-container">
          {/* Adicione sua imagem de perfil aqui */}
          <div className="profile-img-placeholder"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;