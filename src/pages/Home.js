import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-content" data-aos="fade-up">
        <p className="hello" data-aos="fade-right" data-aos-delay="100">Olá, eu sou</p>
        <h1 className="name" data-aos="fade-left" data-aos-delay="200">Seu Nome</h1>
        <h3 className="title" data-aos="fade-up" data-aos-delay="300">Desenvolvedor Web</h3>
        <p className="description" data-aos="fade-up" data-aos-delay="400">
          Sou um desenvolvedor apaixonado por criar experiências web interativas e responsivas.
          Especializado em React, JavaScript e design de interfaces.
        </p>
        <div className="cta-buttons" data-aos="zoom-in" data-aos-delay="500">
          <a href="#contact" className="btn primary-btn">Contato</a>
          <a href="#projects" className="btn secondary-btn">Ver Projetos</a>
        </div>
      </div>
      <div className="home-image" data-aos="fade-left" data-aos-delay="600">
        <div className="image-container">
          {/* Adicione sua imagem de perfil aqui */}
          <div className="profile-img-placeholder"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;