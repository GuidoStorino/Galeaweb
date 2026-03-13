import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
            src="https://res.cloudinary.com/dkrnlomsj/image/upload/v1773409044/cropped-cropped-Galea-Logo-oficial-e1680360050697-1-600x200_sfpjdb.png"
            alt="GaLea LG"
          />
        </Link>

        {/* Desktop links */}
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

        {/* Hamburger */}
        <button
          className={`navbar-burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile menu */}
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