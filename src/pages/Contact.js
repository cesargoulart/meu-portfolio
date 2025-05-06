import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="section-title">Entre em Contato</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="details">
              <h4>Email</h4>
              <p>seuemail@exemplo.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="details">
              <h4>Telefone</h4>
              <p>+xx (xx) xxxxx-xxxx</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="details">
              <h4>Localização</h4>
              <p>Sua Cidade, País</p>
            </div>
          </div>
          <div className="social-links">
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
        <div className="contact-form">
          <h3>Envie uma Mensagem</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Assunto" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" rows="7" required></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;