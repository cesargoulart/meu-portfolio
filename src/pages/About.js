import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-container">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="about-img-placeholder"></div>
        </div>
        <div className="about-text">
          <h3>Quem Sou</h3>
          <p>
            Sou um desenvolvedor web apaixonado por criar soluções digitais
            elegantes e funcionais. Com experiência em React e tecnologias
            front-end modernas, busco constantemente aprimorar minhas habilidades
            e enfrentar novos desafios.
          </p>
          
          <div className="about-details">
            <div className="experience">
              <h3>Experiência</h3>
              <div className="exp-item">
                <h4>Desenvolvedor Front-end</h4>
                <p>2022 - Presente</p>
                <p>Empresa XYZ</p>
              </div>
              <div className="exp-item">
                <h4>Web Designer</h4>
                <p>2020 - 2022</p>
                <p>Estúdio ABC</p>
              </div>
            </div>
            
            <div className="skills">
              <h3>Habilidades</h3>
              <div className="skills-list">
                <div className="skill-item">React</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">HTML & CSS</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">UI/UX Design</div>
                <div className="skill-item">Responsive Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;