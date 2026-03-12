import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="https://galealg.com/wp-content/uploads/2023/04/cropped-cropped-Galea-Logo-oficial-e1680360050697-1-145x48.png"
            alt="GaLea LG"
          />
          <p>Más de 30 años fabricando reguladores de gas de alta calidad. Empresa certificada ISO 9001.</p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/gale-ai">🤖 Gale-Ai</Link>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>República Argentina 946</p>
          <p>Gerli, Buenos Aires</p>
          <p>Tel: 011 4228-2255</p>
          <p>info@galealg.com</p>
        </div>

        <div className="footer-col">
          <h4>Horario</h4>
          <p>Lun - Vie: 08:30 - 16:30</p>
          <p>Sáb: 09:30 - 12:30</p>
          <a href="https://instagram.com/galealg" target="_blank" rel="noreferrer">
            📸 @galealg
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 GaLea LG · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}