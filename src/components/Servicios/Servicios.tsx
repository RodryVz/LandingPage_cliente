import React from 'react';
import "./Servicios.css"

interface ServicioCardProps {
  titulo: string;
  descripcion: string;
  iconoClase: string;
}

const ServicioCard: React.FC<ServicioCardProps> = ({ titulo, descripcion, iconoClase }) => (
  <div className="card">
    <h3>{titulo}</h3>
    <p>{descripcion}</p>
    <div className={`icono ${iconoClase}`}></div>
  </div>
);

interface ServiciosProps {
  id: string;
}

const Servicios: React.FC<ServiciosProps> = ({ id }) => {
  return (
    <div className="servicios" id={id}>
      <h1>Servicios</h1>
      <div className="card-container">
        <ServicioCard
          titulo="Calidad y Seguridad"
          descripcion="Nuestros trabajadores pasan por un riguroso proceso de verificación y selección, asegurando que solo los mejores y más confiables profesionales entren a tu hogar."
          iconoClase="icono-calidad"
        />
        <ServicioCard
          titulo="Rapidez y Eficiencia"
          descripcion="Obtén respuestas y soluciones de manera inmediata. Con Oficlic, conectas con expertos en minutos, asegurando que tus necesidades sean atendidas sin demoras."
          iconoClase="icono-rapidez"
        />
        <ServicioCard
          titulo="Facilidad de Uso"
          descripcion="Desde la solicitud hasta la finalización del trabajo, nuestro proceso es simple y directo. Oficlic te permite resolver cualquier necesidad en tu hogar con solo unos clics. Totalmente gratuita!"
          iconoClase="icono-facilidad"
        />
      </div>
      <div className="cta-container">
      <a href="https://tally.so/r/n9v7rX" target="_blank" rel="noopener noreferrer">
              <button className="hero-cta">Comenzar Ahora</button>
            </a>
      </div>
      <hr />
    </div>
  );
};

export default Servicios;
