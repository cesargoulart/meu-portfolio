import React from "react";
import "./Home.css";
import profileImg from "../assets/images/foto.png";

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <p className="hello">
          Olá, eu sou
        </p>
        <h1 className="name">
          César Goulart
        </h1>
        <h3 className="title">
          Desenvolvedor Web
        </h3>
        <p className="description">
          Sou um desenvolvedor apaixonado por criar experiências web interativas
          e responsivas. Especializado em React, JavaScript e design de
          interfaces.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn primary-btn">
            Contato
          </a>
          <a href="#projects" className="btn secondary-btn">
            Ver Projetos
          </a>
        </div>
      </div>
      <div className="home-image">
        <div className="image-container">
          <img src={profileImg} alt="César Goulart" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;