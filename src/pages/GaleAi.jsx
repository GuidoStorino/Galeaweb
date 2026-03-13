import { useState, useRef } from 'react'
import RobotSVG from '../components/RobotSVG'   // o RobotSVG con imagen PNG
import ChatBox from '../components/ChatBox'
import './GaleAi.css'

export default function GaleAi() {
  const [speaking, setSpeaking] = useState(false)

  return (
    <main className="galeai-page">
      <div className="container">
        <div className="page-header">
          <h1 className='etrusco'>Hablá con <span>Gale-Ai</span> 🤖</h1>
          <p>Tu asistente virtual de GaLea LG. Preguntame lo que quieras sobre nuestros productos.</p>
        </div>

        <div className="galeai-layout">
          <div className="galeai-robot-wrap">
            <div className="galeai-robot-scene">
              <RobotSVG talking={speaking} />
            </div>
          </div>
          <div className="galeai-chat-wrap">
            <ChatBox onSpeakingChange={setSpeaking} />
          </div>
        </div>
      </div>
    </main>
  )
}