import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'

const mainLinks = [
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'Pour qui ?', to: '/pour-qui' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'À propos', to: '/a-propos' },
]

const discoverSections = [
  {
    title: 'Produit',
    items: [
      { to: '/mobile-app', label: 'App mobile', desc: 'Society dans votre poche', icon: 'spark', color: '#0E47AB' },
      { to: '/comparatif', label: 'Comparatif', desc: 'Society vs alternatives', icon: 'chart', color: '#5C2E91' },
      { to: '/integrations', label: 'Intégrations', desc: 'Mobile Money & outils', icon: 'bolt', color: '#D4A75B' },
      { to: '/fonctionnalites/membres', label: 'Membres', desc: 'Gérez votre communauté', icon: 'users', color: '#0E47AB' },
    ],
  },
  {
    title: 'Communauté',
    items: [
      { to: '/benevolat', label: 'Bénévolat', desc: 'Gérez vos volontaires', icon: 'heart', color: '#9D174D' },
      { to: '/mise-en-relation', label: 'Mise en relation', desc: 'Connecter les communautés', icon: 'globe', color: '#166534' },
      { to: '/ambassadeurs', label: 'Ambassadeurs', desc: 'Programme de parrainage', icon: 'star', color: '#D4A75B' },
      { to: '/temoignages', label: 'Témoignages', desc: 'Ils ont transformé leur communauté', icon: 'check', color: '#166534' },
    ],
  },
  {
    title: 'Ressources',
    items: [
      { to: '/etudes-de-cas', label: 'Études de cas', desc: 'Résultats détaillés', icon: 'layers', color: '#0E47AB' },
      { to: '/blog', label: 'Blog & articles', desc: 'Ressources pour leaders', icon: 'chart', color: '#5C2E91' },
      { to: '/webinaires', label: 'Webinaires', desc: 'Formations gratuites', icon: 'play', color: '#0E47AB' },
      { to: '/centre-aide', label: "Centre d'aide", desc: 'Questions fréquentes', icon: 'shield', color: '#0a0a0a' },
    ],
  },
  {
    title: 'Society',
    items: [
      { to: '/manifeste', label: 'Manifeste', desc: 'Nos valeurs & vision', icon: 'target', color: '#0E47AB' },
      { to: '/rse', label: 'RSE', desc: 'Partenariats à impact', icon: 'globe', color: '#166534' },
      { to: '/newsletter', label: 'Newsletter', desc: 'Restez informé', icon: 'bell', color: '#D4A75B' },
      { to: '/changelog', label: 'Nouveautés', desc: 'Dernières mises à jour', icon: 'bolt', color: '#5C2E91' },
    ],
  },
]

export default function Nav({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [founderOpen, setFounderOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const navigate = useNavigate()

  const cls = variant === 'dark' ? 'nav dark' : variant === 'blue' ? 'nav blue' : 'nav'
  const logoColor = variant === 'blue' ? '#D4A75B' : '#0E47AB'
  const ghostColor = (variant === 'blue' || variant === 'dark') ? '#fff' : undefined

  return (
    <>
      <nav className={cls}>
        <a onClick={() => navigate('/')} className="nav-logo" style={{ cursor: 'pointer' }}>
          Society<span style={{ color: logoColor }}>.</span>
        </a>

        <div className="nav-links nav-links--desktop">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Accueil</NavLink>
          {mainLinks.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDiscoverOpen(o => !o)}
              className="nav-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', color: variant === 'dark' || variant === 'blue' ? 'rgba(255,255,255,0.85)' : 'var(--so-ink)', padding: 0, fontSize: 15, fontWeight: 500 }}>
              Découvrir
              <span style={{ fontSize: 9, transition: 'transform 0.2s', display: 'inline-block', transform: discoverOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {discoverOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 18px)', left: '50%', transform: 'translateX(-50%)', background: 'white', borderRadius: 20, boxShadow: '0 24px 80px rgba(0,0,0,0.15)', border: '1px solid #E5E5E5', width: 680, zIndex: 200, padding: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                  {discoverSections.map(section => (
                    <div key={section.title}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, paddingLeft: 10 }}>{section.title}</div>
                      {section.items.map(item => (
                        <NavLink key={item.to} to={item.to} onClick={() => setDiscoverOpen(false)}
                          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', textDecoration: 'none', borderRadius: 10, marginBottom: 2 }}>
                          <div style={{ width: 30, height: 30, borderRadius: 8, background: `${item.color}15`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            <Icon name={item.icon} size={14} color={item.color} />
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a', lineHeight: 1.2 }}>{item.label}</div>
                            <div style={{ fontSize: 11, color: '#9B9B9B', marginTop: 1, lineHeight: 1.2 }}>{item.desc}</div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #F0F0F0', display: 'flex', gap: 8 }}>
                  <NavLink to="/demarrer" onClick={() => setDiscoverOpen(false)} style={{ flex: 1, padding: '12px 16px', background: '#0E47AB', borderRadius: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="arrow" size={14} color="white" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>Comment démarrer</span>
                  </NavLink>
                  <NavLink to="/documentation" onClick={() => setDiscoverOpen(false)} style={{ flex: 1, padding: '12px 16px', background: '#F8F8F8', borderRadius: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="layers" size={14} color="#0a0a0a" />
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0a0a0a' }}>Documentation</span>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="nav-cta nav-cta--desktop" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setFounderOpen(o => !o)}
              className="btn btn-ghost"
              style={{ color: ghostColor, display: 'flex', alignItems: 'center', gap: 6 }}>
              Connexion
              <span style={{ fontSize: 10, transition: 'transform 0.2s', display: 'inline-block', transform: founderOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {founderOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: 'white', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid #E5E5E5', minWidth: 220, overflow: 'hidden', zIndex: 100 }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Espace membre</div>
                <button onClick={() => { setFounderOpen(false); alert('Connexion membre — disponible au lancement') }} style={{ width: '100%', padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 14, fontWeight: 600, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}><Icon name="users" size={14} color="#0E47AB" /></div>
                  Se connecter
                </button>
                <div style={{ padding: '12px 16px', borderTop: '1px solid #F2F2F2', borderBottom: '1px solid #F2F2F2', fontSize: 11, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fondateur Society</div>
                <NavLink to="/dashboard" onClick={() => setFounderOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', textDecoration: 'none', color: '#0a0a0a', fontSize: 14, fontWeight: 600 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: '#FFF8E5', display: 'grid', placeItems: 'center' }}><Icon name="grid" size={14} color="#D4A75B" /></div>
                  Dashboard admin
                </NavLink>
                <div style={{ padding: '10px 16px', background: '#F8F8F8', fontSize: 11, color: '#6B6B6B' }}>Réservé à l'équipe Difero Fundry</div>
              </div>
            )}
          </div>
          <NavLink to="/inscription" className={variant === 'blue' ? 'btn btn-white' : 'btn btn-dark'}>
            Inscrire ma communauté
            <Icon name="arrow" size={14} color="currentColor" />
          </NavLink>
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu" style={{ color: ghostColor || 'var(--so-ink)' }}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <NavLink to="/" end className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Accueil</NavLink>
          {mainLinks.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 16, marginBottom: 4 }}>Découvrir</div>
          {discoverSections.flatMap(s => s.items).map(item => (
            <NavLink key={item.to} to={item.to} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
          ))}
          <NavLink to="/demarrer" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Comment démarrer</NavLink>
          <NavLink to="/dashboard" className="nav-mobile-link" onClick={() => setMenuOpen(false)}
            style={{ color: '#D4A75B', fontWeight: 700, marginTop: 12 }}>
            Dashboard fondateur
          </NavLink>
          <NavLink to="/inscription" className="btn btn-primary" onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8 }}>
            Inscrire ma communauté
          </NavLink>
        </div>
      )}

      {founderOpen && (
        <div onClick={() => setFounderOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
      {discoverOpen && (
        <div onClick={() => setDiscoverOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}
    </>
  )
}
