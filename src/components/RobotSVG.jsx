import './RobotSVG.css'
import galeImg from '../assets/gale-ai-robot.png'

export default function RobotSVG({ talking }) {
  return (
    <div className={`robot-wrapper${talking ? ' tk' : ''}`}>

      {/* Imagen PNG real del robot */}
      <img
        src={galeImg}
        alt="Gale-Ai"
        className="robot-img"
        draggable={false}
      />

      {/* Halo de glow iridiscente detrás */}
      <div className="robot-halo" />

      {/* Overlay de boca animada — se superpone sobre la cara */}

      {/* Partículas de energía al hablar */}
      {talking && (
        <div className="energy-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`ep ep-${i}`} />
          ))}
        </div>
      )}

    </div>
  )
}
