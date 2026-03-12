import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productos, categorias } from '../data/productos'
import './Productos.css'

export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const filtrados = productos.filter(p => {
    const matchCategoria = categoriaActiva === 'Todos' || p.categoria === categoriaActiva
    const matchBusqueda =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.codigo.toLowerCase().includes(busqueda.toLowerCase())
    return matchCategoria && matchBusqueda
  })

  return (
    <main className="productos-page">
      <div className="container">
        <div className="page-header">
          <h1>Nuestros <span>Productos</span></h1>
          <p>Reguladores, flexibles y accesorios certificados por el Instituto del Gas Argentino</p>
        </div>

        <div className="productos-toolbar">
          <input
            className="productos-search"
            type="text"
            placeholder="🔍 Buscar por nombre o código..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <div className="categorias-filter">
            {categorias.map(cat => (
              <button
                key={cat}
                className={`cat-btn ${categoriaActiva === cat ? 'active' : ''}`}
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="productos-grid">
          {filtrados.map(producto => (
            <div key={producto.id} className="producto-card">
              <div className="producto-img-wrap">
                <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                <span className="producto-categoria">{producto.categoria}</span>
              </div>
              <div className="producto-info">
                <span className="producto-codigo">Cód. {producto.codigo}</span>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                
                <a  href="https://wa.me/5491159780535"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary producto-cta"
                >
                  💬 Consultar
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtrados.length === 0 && (
          <div className="productos-empty">
            <p>No encontramos productos con esa búsqueda.</p>
          </div>
        )}
      </div>
    </main>
  )
}