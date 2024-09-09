import funcion from '../../assets/funcion.png'
import './Funcion.css';
import { UserRoundSearch, Zap, SquareCheckBig } from 'lucide-react';

interface FuncionProps {
  id: string;
}

const Funcion: React.FC<FuncionProps> = ({ id })  => {
  return (
    <div className="contenedor-principal" id={id}>
      <h2 className="titulo-principal">¿Cómo Funciona?</h2>
      <p className="parrafo-intro">Descubre la simplicidad y eficacia de nuestro proceso para conectarte con profesionales de confianza para tus necesidades del hogar.</p>
      
      <div className="contenedor-card">
        <div className="card-color">
          <UserRoundSearch className="card-icon" />
          <div className="card-content">
            <h3>Explora y Solicita</h3>
            <p>Describe fácilmente lo que necesitas. Nuestra plataforma te guía para encontrar el servicio exacto que buscas en solo unos pasos.</p>
          </div>
        </div>
        <div className="card-funcion">
          <Zap className="card-icon" />
          <div className="card-content">
            <h3>Conexión Rápida</h3>
            <p>En minutos, te conectamos con un profesional verificado que cumple con los estándares de calidad y seguridad que tu hogar merece.</p>
          </div>
        </div>
        <div className="card-funcion">
          <SquareCheckBig className="card-icon" />
          <div className="card-content">
            <h3>Trabajo Completado</h3>
            <p>El profesional realiza el trabajo con excelencia, y tú tienes el control para valorar la experiencia, asegurando la mejora continua de nuestro servicio.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="contenedor-imagen">
        <img src={funcion} alt="Cómo funciona" />
      </div>

    </div>
  );
};
export default Funcion;