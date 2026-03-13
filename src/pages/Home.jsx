import { Link } from 'react-router-dom'
import './Home.css'
import GaleaPortada from '../assets/GaleaPortada.PNG'
import RobotTrabajando from '../assets/RobotTrabajando.PNG'
import ReguladorDosEtapas from '../assets/ReguladorDosEtapas.JPG'
import { useState, useEffect } from 'react'

const heroImages = [
  GaleaPortada,
  'https://galealg.com/wp-content/uploads/2023/05/IMG-3231-600x600.jpg',
  RobotTrabajando,
  ReguladorDosEtapas,
]

export default function Home() {
  const [slideActivo, setSlideActivo] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setSlideActivo(i => (i + 1) % heroImages.length)
  }, 4000)
  return () => clearInterval(timer)
}, [])
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            
            <h1 className='etrusco' >Galea <span>LG</span></h1>
            <p>Más de 30 años en la industria del gas.</p>
            <div className="hero-ctas">
              <Link to="/productos" className="btn-primary">Ver productos</Link>
              <Link to="/nosotros" className="btn-outline">Conocé más</Link>
            </div>
          </div>
          <div className="hero-image">
  <div className="slider">
    {heroImages.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`GaLea LG ${i + 1}`}
        className={`slide ${i === slideActivo ? 'active' : ''}`}
      />
    ))}
    <div className="slider-dots">
      {heroImages.map((_, i) => (
        <button
          key={i}
          className={`dot ${i === slideActivo ? 'active' : ''}`}
          onClick={() => setSlideActivo(i)}
        />
      ))}
    </div>
  </div>
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