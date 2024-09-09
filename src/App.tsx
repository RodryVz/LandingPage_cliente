
import Navbar from './components/Navbar/MyNavbar';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import FrequentCategories from './components/Categorias/Categorias';
import Funcion from './components/Funcion/Funcion';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar phoneNumber={'543624968347'} />
      <Header id="inicio" />
      <Servicios id="servicios" />
      <FrequentCategories id="categorias" />
      <Funcion id="como-funciona" />
      <Footer phoneNumber={'543624968347'}/>
    </>
  );
}

export default App;