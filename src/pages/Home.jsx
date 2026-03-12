import { Link } from 'react-router-dom'
import './Home.css'
import GaleaPortada from '../assets/GaleaPortada.PNG'

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="hero-badge">Industria Argentina 🇦🇷</span>
            <h1>Reguladores de gas <span>de alta calidad</span></h1>
            <p>Más de 30 años fabricando reguladores de gas certificados por el Instituto del Gas Argentino. Empresa certificada ISO 9001.</p>
            <div className="hero-ctas">
              <Link to="/productos" className="btn-primary">Ver productos</Link>
              <Link to="/nosotros" className="btn-outline">Conocé más</Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={GaleaPortada}
              alt="GaLea LG"
              
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <h3>30+ años</h3>
            <p>de experiencia en el mercado</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <h3>98,9%</h3>
            <p>de aceptación entre clientes</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🔬</span>
            <h3>ISO 9001</h3>
            <p>empresa certificada</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⚡</span>
            <h3>Innovación</h3>
            <p>productos para cada necesidad</p>
          </div>
        </div>
      </section>

      {/* Gale-Ai promo */}
      <section className="galeai-promo">
        <div className="container galeai-inner">
          <div className="galeai-text">
            <h2>Conocé a <span>Gale-Ai</span> 🤖</h2>
            <p>Nuestro asistente virtual inteligente. Preguntale sobre nuestros productos, instalación, características técnicas y más. ¡Disponible las 24 horas!</p>
            <Link to="/gale-ai" className="btn-primary">Hablar con Gale-Ai</Link>
          </div>
          <div className="galeai-img">
            <img src="/gale-ai-robot.png" alt="Gale-Ai"/>
          </div>
        </div>
      </section>
    </main>
  )
}