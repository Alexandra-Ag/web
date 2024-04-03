import { Container, Row, Col, Button} from 'react-bootstrap'
import '../css/Estilos.css';
import '../css/fontello.css';
import routes from '../helpers/routes';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <Container>
            <Row className='mt-5'>
                <Col>
                <main>
        <section id="Banner">
          <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/banner.jpg?raw=true" alt="Banner" />
          <div className="contenedor">
            <h1>Bienvenido a FarMuniQ</h1>
            
          </div>
        </section>
        <section id="Bienvenidos">
          <div className="contenedor">
            <h2>Inventario</h2>
            <p>
              Este sistema automatizado permite registrar y supervisar de manera eficiente los productos farmacéuticos disponibles, manteniendo un seguimiento detallado de las existencias, fechas de vencimiento y movimientos de inventario. Además, el software proporciona funcionalidades adicionales como la generación de facturas, la gestión de proveedores. Con un inventario de software bien implementado, la farmacia puede agilizar sus procesos, reducir errores en el recuento de existencias y garantizar que los medicamentos y productos estén siempre disponibles para satisfacer las necesidades de los clientes de manera oportuna y segura.
            </p>
          </div>
        </section>
        <section id="Blog">
          <h3>Nuestro Servicio es:</h3>
          <div className="contenedor">
            <article>
              <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/Optimo.jpg?raw=true" alt="Optimo" width="250" height="250" />
              <h4>Optimo</h4>
            </article>
            <article>
              <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/Seguro.jpg?raw=true" alt="Seguro" width="250" height="250" />
              <h4>Seguro</h4>
            </article>
            <article>
              <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/Confiable.jpg?raw=true" alt="Confiable" width="250" height="250" />
              <h4>Confiable</h4>
            </article>
          </div>
        </section>
        <section id="Info">
          <h3>Proveedores</h3>
          <div className="contenedor">
            <div className="Proveedor">
              <a href="https://www.tqconfiable.com/">
                <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/Tecno.png?raw=true" alt="TecnoQuimicas" width="250" height="250" />
                <h4>TecnoQuimicas</h4>
              </a>
            </div>
            <div className="Proveedor">
              <a href="https://www.latam.abbott/">
                <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/abbott.jpg?raw=true" alt="Abbott" width="250" height="250" />
                <h4>Abbott</h4>
              </a>
            </div>
            <div className="Proveedor">
              <a href="https://www.sanofi.com.co">
                <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/sanofi.png?raw=true" alt="Sanofi" width="250" height="250" />
                <h4>Sanofi</h4>
              </a>
            </div>
            <div className="Proveedor">
              <a href="https://www.bayer.com">
                <img src="https://github.com/DIEGXX-HuB/FarmUniq/blob/diogo/img/bayer.jpg?raw=true" alt="Bayer" width="250" height="250" />
                <h4>Bayer</h4>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
    <div className="redes-sociales">
      <a href="https://es-la.facebook.com/"><span className="icon-facebook"></span>Facebook</a>
      <a href="https://www.instagram.com/"><span className="icon-instagram"></span>Instagram</a>
      <a href="https://twitter.com/"><span className="icon-twitter"></span>Twitter</a>
    </div>
  </footer>
                </Col>
            </Row>
        </Container>
    )
}