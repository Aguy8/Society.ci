import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

const TYPES = [
  { n: 'ONG / Asso', ico: 'heart' },
  { n: 'Mutuelle', ico: 'shield' },
  { n: 'Alumni', ico: 'users' },
  { n: 'Réseau Pro', ico: 'grid' },
  { n: 'Religieux', ico: 'globe' },
  { n: 'Influenceur', ico: 'star' },
]

export default function Inscription() {
  const navigate = useNavigate()
  const [typeSelected, setTypeSelected] = useState(1)
  const [couleur, setCouleur] = useState(0)
  const [form, setForm] = useState({ nom: '', description: '', ville: 'Abidjan', membres: '50-200' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Le nom est requis'
    if (!form.description.trim()) e.description = 'La description est requise'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    navigate('/confirmation')
  }

  const couleurs = ['#0E47AB', '#D4A75B', '#0a0a0a', '#C23B5A', '#0F8B4F', '#5C2E91']

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '60px 64px 120px', background: '#F8F8F8', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="inscription-grid">
            {/* Sidebar */}
            <div style={{ position: 'sticky', top: 100 }}>
              <span className="eyebrow">Inscription</span>
              <h1 style={{ fontSize: 56, marginTop: 24, lineHeight: 0.95 }}>Inscrivez<br />votre<br />communauté.</h1>
              <p style={{ fontSize: 16, marginTop: 20, maxWidth: 360, lineHeight: 1.5 }}>5 minutes pour créer votre espace. Aucune carte bancaire. Vous pourrez modifier toutes ces informations plus tard.</p>

              <div style={{ marginTop: 40, display: 'grid', gap: 12 }}>
                {[
                  { n: '01', t: 'Votre communauté', active: true },
                  { n: '02', t: 'Vos besoins', active: false },
                  { n: '03', t: 'Vous, fondateur', active: false },
                  { n: '04', t: 'Validation', active: false },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, background: s.active ? 'white' : 'transparent', borderRadius: 14, border: s.active ? '1px solid #0E47AB' : '1px solid transparent' }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: s.active ? '#0E47AB' : '#E5E5E5', color: s.active ? 'white' : '#6B6B6B', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12 }}>{s.n}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: s.active ? '#0a0a0a' : '#6B6B6B' }}>{s.t}</div>
                    {s.active && <div style={{ fontSize: 11, color: '#0E47AB', fontWeight: 600 }}>En cours</div>}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, padding: 24, background: '#FFF8E5', borderRadius: 16, borderLeft: '4px solid #D4A75B' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Vous êtes une ONG ?</div>
                <div style={{ fontSize: 13, marginTop: 6, color: '#6B5418', lineHeight: 1.5 }}>Bénéficiez de notre programme : 50 % de réduction et accompagnement dédié.</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: 32, padding: 48, boxShadow: '0 20px 60px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0E47AB', letterSpacing: '0.05em' }}>ÉTAPE 01 / 04</span>
                <span style={{ fontSize: 13, color: '#6B6B6B' }}>~ 1 minute</span>
              </div>
              <h2 style={{ fontSize: 40, lineHeight: 1.05 }}>Parlez-nous de votre communauté.</h2>
              <p style={{ fontSize: 15, marginTop: 10, color: '#6B6B6B' }}>Ces informations apparaîtront sur la page publique de votre communauté.</p>

              <div style={{ marginTop: 36, display: 'grid', gap: 24 }}>
                {/* Nom */}
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Nom de votre communauté <span style={{ color: '#C23B5A' }}>*</span></label>
                  <input type="text" placeholder="Mutuelle des Femmes d'Abobo" value={form.nom}
                    onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                    style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.nom ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 16, fontFamily: 'inherit', boxSizing: 'border-box', outline: 'none' }} />
                  {errors.nom && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.nom}</div>}
                </div>

                {/* Type */}
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Type de communauté <span style={{ color: '#C23B5A' }}>*</span></label>
                  <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                    {TYPES.map((t, i) => (
                      <button type="button" key={i} onClick={() => setTypeSelected(i)}
                        style={{ padding: 16, border: `1.5px solid ${typeSelected === i ? '#0E47AB' : '#E5E5E5'}`, borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', background: typeSelected === i ? '#F4F7FE' : 'white' }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: typeSelected === i ? '#0E47AB' : '#F2F2F2', display: 'grid', placeItems: 'center' }}>
                          <Icon name={t.ico} size={16} color={typeSelected === i ? 'white' : '#6B6B6B'} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{t.n}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Description courte</label>
                  <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>En une ou deux phrases. Ce qui vous rassemble.</div>
                  <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    placeholder="Une mutuelle de soutien aux femmes commerçantes du marché d'Abobo..."
                    style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: `1.5px solid ${errors.description ? '#C23B5A' : '#E5E5E5'}`, borderRadius: 14, fontSize: 15, fontFamily: 'inherit', minHeight: 100, resize: 'vertical', lineHeight: 1.5, boxSizing: 'border-box', outline: 'none' }} />
                  {errors.description && <div style={{ fontSize: 12, color: '#C23B5A', marginTop: 4 }}>{errors.description}</div>}
                </div>

                {/* Ville + Membres */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Ville principale <span style={{ color: '#C23B5A' }}>*</span></label>
                    <select value={form.ville} onChange={e => setForm(f => ({ ...f, ville: e.target.value }))}
                      style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                      <option>Abidjan</option>
                      <option>Yamoussoukro</option>
                      <option>Bouaké</option>
                      <option>Daloa</option>
                      <option>Autre — précisez</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Nb. membres <span style={{ color: '#C23B5A' }}>*</span></label>
                    <select value={form.membres} onChange={e => setForm(f => ({ ...f, membres: e.target.value }))}
                      style={{ width: '100%', marginTop: 8, padding: '16px 20px', border: '1.5px solid #E5E5E5', borderRadius: 14, fontSize: 15, fontFamily: 'inherit', background: 'white', outline: 'none' }}>
                      <option>1 - 50</option>
                      <option>50-200</option>
                      <option>200 - 500</option>
                      <option>500 - 2 000</option>
                      <option>+ 2 000</option>
                    </select>
                  </div>
                </div>

                {/* Couleur */}
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0a' }}>Couleur principale</label>
                  <div style={{ fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>Sera utilisée sur la page publique de votre communauté.</div>
                  <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
                    {couleurs.map((c, i) => (
                      <button type="button" key={i} onClick={() => setCouleur(i)}
                        style={{ width: 44, height: 44, borderRadius: '50%', background: c, border: couleur === i ? '3px solid #0a0a0a' : '3px solid transparent', cursor: 'pointer', boxShadow: couleur === i ? '0 0 0 2px white inset' : 'none', flexShrink: 0 }} />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid #E5E5E5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button type="button" style={{ padding: '14px 22px', background: 'transparent', border: 'none', fontSize: 14, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer' }}>Sauvegarder & quitter</button>
                <button type="submit" className="btn btn-primary btn-lg">
                  Continuer — Étape 02 <Icon name="arrow" size={14} color="white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
