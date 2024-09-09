import React from 'react';
import { Link } from 'react-scroll';
import { MessagesSquare } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  phoneNumber: string;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola! Te contacto desde tu sitio web OfiClic.")}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>OfiClic</h2>
          <p>Innovando desde 2024</p>
        </div>
        <nav className="footer-section links">
          <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
          <Link to="servicios" smooth={true} duration={500}>Servicios</Link>
          <Link to="categorias" smooth={true} duration={500}>Categorías</Link>
          <Link to="como-funciona" smooth={true} duration={500}>Cómo funciona</Link>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-link whatsapp-link"
          >
            <MessagesSquare className="whatsapp-icon" />
            <span className='contacto'>Contacto</span>
          </a>
        </nav>
        <div className="footer-section cta">
        <a href="https://tally.so/r/n9v7rX" target="_blank" rel="noopener noreferrer">
              <button className="hero-cta">Comenzar Ahora</button>
            </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OfiClic. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
