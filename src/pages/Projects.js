import React from 'react';
import './Projects.css';

function Projects() {
  // Dados de exemplo para projetos
  const projects = [
    {
      id: 1,
      title: "Aplicação E-commerce",
      description: "Uma loja online completa com carrinho de compras, sistema de pagamento e painel de administração.",
      image: "ecommerce-placeholder.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "App de Gerenciamento de Tarefas",
      description: "Uma aplicação para organização de tarefas com categorias, prioridades e datas de vencimento.",
      image: "taskapp-placeholder.jpg",
      tags: ["React", "Firebase", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "Site Responsivo",
      description: "Um site institucional totalmente responsivo com animações modernas e alta performance.",
      image: "website-placeholder.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <div className="img-placeholder"></div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                  Github
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;