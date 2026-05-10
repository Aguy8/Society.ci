import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const MAIN_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/fonctionnalites', label: 'Fonctionnalités' },
  { to: '/pour-qui', label: 'Pour qui ?' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/a-propos', label: 'À propos' },
]

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close panel on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 298 }}
        />
      )}

      <div style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 299,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
        pointerEvents: 'none',
      }}>
        {/* Quick nav panel */}
        {open && (
          <div style={{
            pointerEvents: 'all',
            background: '#0a0a0a',
            borderRadius: 20,
            padding: 8,
            boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
            minWidth: 230,
            marginBottom: 4,
            transformOrigin: 'bottom right',
            animation: 'floatNavIn 0.2s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div style={{ padding: '8px 12px 4px', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation rapide
            </div>
            {MAIN_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '11px 14px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  color: isActive ? '#D4A75B' : 'rgba(255,255,255,0.85)',
                  background: isActive ? 'rgba(212,167,91,0.12)' : 'transparent',
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 500,
                  transition: 'background 0.12s',
                })}>
                {link.label}
              </NavLink>
            ))}
            <div style={{ margin: '6px 4px 4px', paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <NavLink
                to="/inscription"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '12px 16px', fontSize: 14, borderRadius: 12 }}>
                Inscrire ma communauté →
              </NavLink>
            </div>
          </div>
        )}

        {/* Buttons row */}
        <div style={{ display: 'flex', gap: 10, pointerEvents: 'all', alignItems: 'center' }}>
          {/* Scroll to top — appears when scrolled */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Remonter en haut"
            style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: '#0E47AB',
              border: 'none',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 8px 24px rgba(14,71,171,0.45)',
              transition: 'opacity 0.25s, transform 0.25s',
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? 'scale(1)' : 'scale(0.6)',
              pointerEvents: scrolled ? 'all' : 'none',
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>

          {/* Nav toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Navigation rapide"
            style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: open ? '#0E47AB' : 'rgba(10,10,10,0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
              transition: 'background 0.2s, transform 0.2s',
              transform: open ? 'rotate(45deg)' : 'rotate(0)',
            }}>
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
