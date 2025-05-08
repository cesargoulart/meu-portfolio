import React from 'react';
import './About.css';
import foto2 from '../assets/images/foto2.png';

function About() {
  return (
    <section id="about" className="about-container">
      <h2 className="section-title" data-aos="fade-down">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-image" data-aos="fade-right" data-aos-delay="100">
          <div className="about-img-placeholder">
            <img src={foto2} alt="Foto de perfil" className="about-img" />
          </div>
        </div>
        <div className="about-text" data-aos="fade-left" data-aos-delay="200">
          <h3 data-aos="fade-up" data-aos-delay="300">Quem Sou</h3>
          <p data-aos="fade-up" data-aos-delay="400">
            Sou um desenvolvedor web apaixonado por criar soluções digitais
            elegantes e funcionais. Com experiência em React e tecnologias
            front-end modernas, busco constantemente aprimorar minhas habilidades
            e enfrentar novos desafios.
          </p>
          
          <div className="about-details">
            <div className="experience" data-aos="fade-up" data-aos-delay="500">
              <h3>Experiência</h3>
              <div className="exp-item" data-aos="zoom-in" data-aos-delay="600">
                <h4>Desenvolvedor Front-end</h4>
                <p>2022 - Presente</p>
                <p>Empresa XYZ</p>
              </div>
              <div className="exp-item" data-aos="zoom-in" data-aos-delay="700">
                <h4>Web Designer</h4>
                <p>2020 - 2022</p>
                <p>Estúdio ABC</p>
              </div>
            </div>
            
            <div className="skills" data-aos="fade-up" data-aos-delay="800">
              <h3>Habilidades</h3>
              <div className="skills-list">
                <div className="skill-item" data-aos="flip-left" data-aos-delay="900">React</div>
                <div className="skill-item" data-aos="flip-left" data-aos-delay="1000">JavaScript</div>
                <div className="skill-item" data-aos="flip-left" data-aos-delay="1100">HTML & CSS</div>
                <div className="skill-item" data-aos="flip-left" data-aos-delay="1200">Node.js</div>
                <div className="skill-item" data-aos="flip-left" data-aos-delay="1300">UI/UX Design</div>
                <div className="skill-item" data-aos="flip-left" data-aos-delay="1400">Responsive Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;