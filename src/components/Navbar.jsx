import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'true')

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('darkMode', dark)
  }, [dark])

  const links = [
    { to: '/',          label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/nosotros',  label: 'Nosotros' },
    { to: '/contacto',  label: 'Contacto' },
    { to: '/gale-ai',   label: '🤖 Gale-Ai' },
    { to: '/clientes',  label: 'Clientes' },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
src='https://res.cloudinary.com/dkrnlomsj/image/upload/v1773674649/Galea-Logo-oficial-e1680360050697-768x393_vqacam.png'            alt="GaLea LG"
          />
        </Link>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => isActive ? 'active' : ''}
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button
            className="dark-toggle"
            onClick={() => setDark(!dark)}
            title={dark ? 'Modo claro' : 'Modo oscuro'}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            className={`navbar-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      <div className={`navbar-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setOpen(false)}
            end={l.to === '/'}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}