import './Contacto.css'

const items = [
  { icon: '📍', titulo: 'Ubicación',          lineas: ['República Argentina 946', 'Gerli, Provincia de Buenos Aires'] },
  { icon: '📞', titulo: 'Teléfono',            lineas: ['011 4228-2255'] },
  { icon: '✉️', titulo: 'Email',               lineas: ['info@galealg.com.ar', 'administracion@galealg.com.ar'] },
  { icon: '🕐', titulo: 'Horario de atención', lineas: ['Lun - Vie: 09:00 - 17:00'] },
]

export default function Contacto() {
  return (
    <main className="contacto-page">
      <div className="container">
        <div className="page-header">
          <h1>Contactanos</h1>
          <p>Comunicate con nosotros y te responderemos a la brevedad</p>
        </div>

        <div className="contacto-grid">
          <div className="contacto-info">
            {items.map(item => (
              <div key={item.titulo} className="contacto-card">
                <span className="contacto-icon">{item.icon}</span>
                <div>
                  <h4>{item.titulo}</h4>
                  {item.lineas.map((l, i) => (
                    <p key={i}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
            
              <a href="https://wa.me/5491159780535"
              target="_blank"
              rel="noreferrer"
              className="btn-primary whatsapp-cta"
            >
              💬 Escribinos por WhatsApp
            </a>
          </div>

          <div className="contacto-mapa">
            <iframe
              title="Ubicación GaLea LG"
              src="https://maps.google.com/maps?q=República+Argentina+946+Gerli+Buenos+Aires&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px', minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  )
}