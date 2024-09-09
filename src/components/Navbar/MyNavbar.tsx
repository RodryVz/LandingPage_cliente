import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { MessagesSquare } from 'lucide-react';
import './MyNavbar.css';


interface MyNavbarProps {
  phoneNumber: string;
}

const MyNavbar: React.FC<MyNavbarProps> = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola! Te contacto desde tu sitio web OfiClic.")}`;

  return (
    <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
      <div className="Navbar-container">
        <div className="navbar-left">
        </div>
        <div className="navbar-right">
          {isMobile && (
            <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="inicio" smooth={true} duration={500} className="navbar-link" onClick={closeNavbar}>Inicio</Link>
            </li>
            <li className="navbar-item">
              <Link to="servicios" smooth={true} duration={500} className="navbar-link" onClick={closeNavbar}>Servicios</Link>
            </li>
            <li className="navbar-item">
              <Link to="categorias" smooth={true} duration={500} className="navbar-link" onClick={closeNavbar}>Categorías</Link>
            </li>
            <li className="navbar-item">
              <Link to="como-funciona" smooth={true} duration={500} className="navbar-link" onClick={closeNavbar}>Cómo funciona</Link>
            </li>
            <li className="navbar-item">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="navbar-link whatsapp-link"
                onClick={closeNavbar}
              >
                <MessagesSquare className="whatsapp-icon" />
                <span className='contacto'>Contacto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;