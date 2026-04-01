import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="https://res.cloudinary.com/dkrnlomsj/image/upload/v1773674649/Galea-Logo-oficial-e1680360050697-768x393_vqacam.png"
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
          <p>Lun - Vie: 09:00 - 17:00</p>
          <a href="https://instagram.com/galea.lg" target="_blank" rel="noreferrer">
          📸 @galea.lg </a>
          <a href="https://www.linkedin.com/company/galea-lg" target="_blank" rel="noreferrer">
          🌐 LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 GaLea LG · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}