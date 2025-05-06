import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Meu Portfólio</h3>
          <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:seu-email@exemplo.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;