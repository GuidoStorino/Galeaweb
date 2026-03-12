import { useState } from 'react'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Clientes.css'

export default function Clientes() {
  const [user, loading] = useAuthState(auth)
  const [modo, setModo] = useState('login') // 'login' | 'registro'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleLogin = async () => {
    setError('')
    setCargando(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(traducirError(e.code))
    } finally {
      setCargando(false)
    }
  }

  const handleRegistro = async () => {
    setError('')
    if (!nombre.trim()) { setError('Ingresá tu nombre'); return }
    setCargando(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setError(traducirError(e.code))
    } finally {
      setCargando(false)
    }
  }

  const handleLogout = () => signOut(auth)

  const traducirError = (code) => {
    const errores = {
      'auth/invalid-email':       'El email no es válido.',
      'auth/user-not-found':      'No existe una cuenta con ese email.',
      'auth/wrong-password':      'Contraseña incorrecta.',
      'auth/email-already-in-use':'Ya existe una cuenta con ese email.',
      'auth/weak-password':       'La contraseña debe tener al menos 6 caracteres.',
      'auth/too-many-requests':   'Demasiados intentos. Esperá unos minutos.',
      'auth/invalid-credential':  'Email o contraseña incorrectos.',
    }
    return errores[code] || 'Ocurrió un error. Intentá de nuevo.'
  }

  if (loading) {
    return (
      <main className="clientes-page">
        <div className="container">
          <div className="login-box">
            <div className="login-loading">Cargando...</div>
          </div>
        </div>
      </main>
    )
  }

  if (user) {
    return (
      <main className="clientes-page">
        <div className="container">
          <div className="page-header">
            <h1>Área de <span>Clientes</span></h1>
          </div>
          <div className="clientes-dashboard">
            <div className="clientes-welcome">
              <span className="clientes-avatar">👤</span>
              <div>
                <h3>Bienvenido</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="clientes-content">
              <p>Acá va a aparecer el contenido exclusivo para clientes.</p>
            </div>
            <button className="btn-outline logout-btn" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="clientes-page">
      <div className="container">
        <div className="page-header">
          <h1>Área de <span>Clientes</span></h1>
          <p>Ingresá con tu cuenta para acceder a contenido exclusivo</p>
        </div>

        <div className="login-box">
          <div className="login-tabs">
            <button
              className={modo === 'login' ? 'active' : ''}
              onClick={() => { setModo('login'); setError('') }}
            >
              Ingresar
            </button>
            <button
              className={modo === 'registro' ? 'active' : ''}
              onClick={() => { setModo('registro'); setError('') }}
            >
              Registrarse
            </button>
          </div>

          <div className="login-form">
            {modo === 'registro' && (
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder={modo === 'registro' ? 'Mínimo 6 caracteres' : '••••••••'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && (modo === 'login' ? handleLogin() : handleRegistro())}
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button
              className="btn-primary login-submit"
              onClick={modo === 'login' ? handleLogin : handleRegistro}
              disabled={cargando || !email || !password}
            >
              {cargando ? 'Procesando...' : modo === 'login' ? 'Ingresar' : 'Crear cuenta'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}