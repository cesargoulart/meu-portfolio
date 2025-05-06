import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="section-title" data-aos="fade-down">Entre em Contato</h2>
      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
          <h3 data-aos="fade-up" data-aos-delay="200">Informações de Contato</h3>
          <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="details">
              <h4>Email</h4>
              <p>seuemail@exemplo.com</p>
            </div>
          </div>
          <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="details">
              <h4>Telefone</h4>
              <p>+xx (xx) xxxxx-xxxx</p>
            </div>
          </div>
          <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="details">
              <h4>Localização</h4>
              <p>Sua Cidade, País</p>
            </div>
          </div>
          <div className="social-links" data-aos="zoom-in" data-aos-delay="600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="contact-form" data-aos="fade-left" data-aos-delay="100">
          <h3 data-aos="fade-up" data-aos-delay="200">Envie uma Mensagem</h3>
          <form>
            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <input type="text" placeholder="César Goulart" required />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="400">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="500">
              <input type="text" placeholder="Assunto" required />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-delay="600">
              <textarea placeholder="Sua Mensagem" rows="7" required></textarea>
            </div>
            <button type="submit" className="btn submit-btn" data-aos="fade-up" data-aos-delay="700">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;