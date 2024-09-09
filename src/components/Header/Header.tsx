import { Col, Container, Row } from 'react-bootstrap';
import header1 from '../../assets/header1.png';
import './Header.css';

interface HeaderProps {
  id: string;
}

function Header({ id }: HeaderProps) {
  return (
    <section className="hero-section" id={id}>
      <Container>
        <Row className="align-items-center">
          {/* Sección Izquierda */}
          <Col md={6} className="hero-left">
            <h1 className="hero-title">OFICLIC</h1>
            <p className="hero-description">
              Conectamos clientes con profesionales de oficios, para cualquier necesidad en el hogar.
              Encuentra al experto adecuado con un simple clic, y contrata con total tranquilidad.
            </p>
            <p className='parrafo2'>¡Sin comisiones! Totalmente gratuito</p>
            <a href="https://tally.so/r/n9v7rX" target="_blank" rel="noopener noreferrer">
              <button className="hero-cta">Comenzar Ahora</button>
            </a>
          </Col>

          {/* Sección Derecha */}
          <Col md={6} className="hero-right">
            <img
              src={header1}
              alt="Oficlic servicios profesionales"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
