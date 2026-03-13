import './Nosotros.css'

export default function Nosotros() {
  return (
    <main className="nosotros-page">
      <div className="container">
        <div className="page-header">
          <h1 className='etrusco'>Acerca de <span>Nosotros</span></h1>
          <p>Dedicados a la industria del gas desde hace más de treinta años</p>
        </div>

        <div className="nosotros-grid">
          <div className="nosotros-text">
            <h2 >Nuestra historia</h2>
            <p>Estamos dedicados a la industria del gas desde hace más de treinta años, en donde el cliente nos sigue eligiendo por nuestra idoneidad, buena predisposición, y calidad, tanto técnica como humana.</p>
            <p>Antes de la fundación de esta sociedad, nos dedicábamos a la actividad metalúrgica. Por inquietud en el mercado del gas y a través de diversos vínculos comerciales con empresas relacionadas con el rubro, surge GALEA LG.</p>
            <p>Desde entonces, nuestros productos han sido ampliamente aceptados gracias a un trabajo persistente, siempre en la búsqueda de una mejora continua sostenida en los años.</p>
            <p>Hoy en día, proveemos a empresas distribuidoras de gas de alto prestigio y brindamos servicios de asesoramiento según la necesidad de cada cliente.</p>
          </div>

          <div className="nosotros-valores">
            {[
              { icon: '🏆', titulo: 'Experiencia', desc: 'Más de 30 años de experiencia en el mercado del gas.' },
              { icon: '✅', titulo: 'Calidad', desc: 'Nuestros productos tienen un 98,9% de aceptación entre nuestros clientes.' },
              { icon: '🔬', titulo: 'Certificación', desc: 'Empresa certificada ISO 9001 y aprobada por el Instituto del Gas Argentino.' },
              { icon: '💡', titulo: 'Innovación', desc: 'Creamos nuevos productos para satisfacer las necesidades de los usuarios.' },
            ].map(v => (
              <div key={v.titulo} className="valor-card">
                <span>{v.icon}</span>
                <div>
                  <h4>{v.titulo}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}