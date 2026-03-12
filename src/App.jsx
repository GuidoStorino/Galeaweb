import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import GaleAi from './pages/GaleAi'
import Clientes from './pages/Clientes'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros"  element={<Nosotros />} />
        <Route path="/contacto"  element={<Contacto />} />
        <Route path="/gale-ai"   element={<GaleAi />} />
        <Route path="/clientes"  element={<Clientes />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}