import { NavLink } from 'react-router-dom'
import { SEGMENTS } from '../data/segments.js'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const MODULES = [
  { n: '01', title: 'Gestion communautaire', desc: 'Profils membres, segmentation, rôles et permissions, sous-groupes, communication ciblée. Fini les listes WhatsApp en pagaille.', tags: ['Base de données', 'Sous-groupes', 'Rôles & permissions', 'Tableau de bord'] },
  { n: '02', title: 'Monétisation', desc: 'Cagnottes, cotisations automatisées, billetterie avec QR codes, abonnements — paiement Mobile Money intégré (Orange Money, Wave, MTN MoMo).', tags: ['Cotisations', 'Cagnottes', 'Billetterie', 'Mobile Money'] },
  { n: '03', title: 'Gestion des entités', desc: 'Trésorerie centralisée, coordination d\'événements, collecte de dons en ligne, gestion de sous-entités depuis un seul tableau de bord.', tags: ['Trésorerie', 'Événements', 'Dons en ligne', 'Sous-entités'] },
  { n: '04', title: 'Visibilité & Impact', desc: 'Rapports d\'impact automatiques, page publique de la communauté, analytics en temps réel, exports pour bailleurs institutionnels (ODD).', tags: ['Rapports PDF', 'Page publique', 'Analytics', 'Bailleurs'] },
  { n: '05', title: 'Espace Leader', desc: 'Communauté propriétaire indépendante des algorithmes, contenus premium monétisés, Q&A, lives privés, boutique de contenus, analytics audience.', tags: ['Abonnements', 'Contenus premium', 'Lives', 'Indépendance'] },
]

export default function Presentation() {
  return (
    <div className="page">
      <Nav />

      {/* Barre d'action */}
      <div className="no-print" style={{ background: '#F2F2F2', borderBottom: '1px solid #E5E5E5', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 14, color: '#6B6B6B' }}>
          Cette présentation reflète le site en <strong style={{ color: '#0a0a0a' }}>temps réel</strong> — elle se met à jour automatiquement.
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#9B9B9B' }}>Ctrl+P pour PDF</span>
          <button
            onClick={() => window.print()}
            style={{ padding: '10px 22px', background: '#0E47AB', color: 'white', border: 'none', borderRadius: 999, fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger PDF
          </button>
        </div>
      </div>

      {/* ── COUVERTURE ── */}
      <section style={{ padding: '120px 64px 100px', background: '#0a0a0a', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -150, right: -150, width: 500, height: 500, borderRadius: '50%', background: '#0E47AB', opacity: 0.35, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: '#D4A75B', opacity: 0.2, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 80, flexWrap: 'wrap', gap: 24 }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em', color: '#D4A75B' }}>Society<span style={{ color: 'rgba(255,255,255,0.3)' }}>.</span></div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Présentation de la solution</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</div>
            </div>
          </div>
          <h1 style={{ fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.88, color: 'white', letterSpacing: '-0.04em', maxWidth: 900, marginBottom: 40 }}>
            L'infrastructure numérique<br />des <span style={{ color: '#D4A75B' }}>communautés africaines</span>.
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', maxWidth: 640, lineHeight: 1.6, marginBottom: 48 }}>
            Society est la plateforme tout-en-un qui aide les associations, ONG, mutuelles, alumni et leaders africains à structurer, engager et monétiser leur communauté depuis un seul espace.
          </p>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[['5', 'Modules intégrés'], ['7', 'Types de communautés'], ['1', 'Espace unifié']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em', color: 'white', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 6, letterSpacing: '0.02em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE PROBLÈME ── */}
      <section style={{ padding: '100px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <span className="eyebrow">Le contexte africain</span>
              <h2 style={{ marginTop: 24, fontSize: 52 }}>10 outils pour gérer une communauté.<br /><span style={{ color: '#6B6B6B' }}>Aucun ne fait le travail.</span></h2>
              <p style={{ fontSize: 17, marginTop: 24, lineHeight: 1.65, maxWidth: 460, color: '#3A3A3A' }}>
                WhatsApp pour communiquer. Excel pour les cotisations. Google Forms pour les inscriptions. Facebook pour la visibilité. Mobile Money pour collecter. Et toujours rien à montrer aux bailleurs.
              </p>
              <p style={{ fontSize: 17, marginTop: 16, maxWidth: 460, color: '#0a0a0a', fontWeight: 700, lineHeight: 1.55 }}>
                Les leaders communautaires africains perdent en moyenne <span style={{ color: '#0E47AB' }}>5 à 10h par semaine</span> en gestion manuelle.
              </p>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['WhatsApp', 'Excel', 'Google Forms', 'Facebook', 'Donorbox', 'Mailchimp', 'Tikerama', 'Drive'].map((n, i) => (
                  <div key={i} style={{ padding: '16px 20px', background: 'white', borderRadius: 14, position: 'relative', fontSize: 15, fontWeight: 700 }}>
                    {n}
                    <div style={{ position: 'absolute', top: 12, right: 14, width: 22, height: 22, borderRadius: '50%', background: '#FEE', color: '#C23B5A', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800 }}>×</div>
                  </div>
                ))}
                <div style={{ gridColumn: 'span 2', padding: '20px 24px', background: '#0E47AB', borderRadius: 14, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20 }}>Society</div>
                    <div style={{ opacity: 0.8, fontSize: 13, marginTop: 2 }}>Un seul espace. Tout intégré.</div>
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#D4A75B', display: 'grid', placeItems: 'center', fontWeight: 800, color: '#0a0a0a' }}>✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 MODULES ── */}
      <section style={{ padding: '100px 64px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="eyebrow">Notre solution</span>
            <h2 style={{ marginTop: 24, fontSize: 64 }}>5 modules · 1 plateforme</h2>
            <p style={{ fontSize: 18, marginTop: 20, maxWidth: 600, margin: '20px auto 0', color: '#3A3A3A', lineHeight: 1.6 }}>
              Tous les outils pensés et créés pour une gestion complète de vos communautés, depuis un espace unique.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 20 }}>
            {MODULES.map((m, i) => (
              <div key={i} style={{ padding: '36px 40px', background: i % 2 === 0 ? '#0a0a0a' : '#F8F8F8', borderRadius: 24, display: 'flex', gap: 48, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: i % 2 === 0 ? 'rgba(255,255,255,0.15)' : '#E5E5E5', lineHeight: 1 }}>{m.n}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 26, color: i % 2 === 0 ? 'white' : '#0a0a0a', marginBottom: 12 }}>{m.title}</h3>
                  <p style={{ fontSize: 15, color: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : '#3A3A3A', lineHeight: 1.65, maxWidth: 560 }}>{m.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
                    {m.tags.map(t => (
                      <span key={t} style={{ padding: '5px 12px', background: i % 2 === 0 ? 'rgba(255,255,255,0.1)' : 'white', borderRadius: 999, fontSize: 12, fontWeight: 600, color: i % 2 === 0 ? 'rgba(255,255,255,0.8)' : '#0a0a0a', border: i % 2 !== 0 ? '1px solid #E5E5E5' : 'none' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI — dynamique depuis segments.js ── */}
      <section style={{ padding: '100px 64px', background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="eyebrow dark">Pour qui ?</span>
            <h2 style={{ marginTop: 24, color: 'white', fontSize: 64 }}>Society s'adapte<br />à votre <span style={{ color: '#D4A75B' }}>réalité</span>.</h2>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {SEGMENTS.map((seg, i) => (
              <div key={seg.slug} style={{ padding: '28px 36px', background: 'rgba(255,255,255,0.04)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0, width: 200 }}>
                  <div style={{ padding: '4px 12px', background: seg.color, color: seg.color === '#D4A75B' ? '#0a0a0a' : 'white', borderRadius: 999, fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 10 }}>
                    {seg.count} en CI
                  </div>
                  <h3 style={{ color: 'white', fontSize: 20, lineHeight: 1.2 }}>{seg.nom}</h3>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6, margin: '0 0 12px' }}>{seg.tagline}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {seg.sol.slice(0, 4).map(s => (
                      <span key={s} style={{ padding: '4px 10px', background: `${seg.color}22`, color: seg.color === '#0A0A0A' ? 'rgba(255,255,255,0.7)' : seg.color, borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)', textAlign: 'right', minWidth: 140 }}>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Ex : {seg.ex.split(',')[0]}</div>
                  <div style={{ marginTop: 4 }}>Plan recommandé : <span style={{ color: seg.color === '#0A0A0A' ? '#D4A75B' : seg.color, fontWeight: 700 }}>{seg.plan_recommande}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS ENGAGEMENTS ── */}
      <section style={{ padding: '80px 64px', background: '#0E47AB', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow white">Notre engagement</span>
            <h2 style={{ marginTop: 20, color: 'white', fontSize: 48 }}>Conçu pour les réalités africaines.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { t: 'Paiements Mobile Money', d: 'Orange Money, Wave, MTN MoMo — sans carte bancaire internationale.' },
              { t: 'Hébergement souverain', d: 'Données stockées en Afrique de l\'Ouest, conformité UEMOA.' },
              { t: 'Prix en FCFA', d: 'Tarification adaptée aux réalités économiques des communautés africaines.' },
              { t: 'Support local', d: 'Équipe basée à Abidjan. Nous comprenons vos enjeux de l\'intérieur.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 24, background: 'rgba(255,255,255,0.1)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 12 }}>{item.t}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÉCURITÉ ── */}
      <section style={{ padding: '80px 64px' }}>
        <div className="container">
          <div className="two-col-grid" style={{ gap: 80 }}>
            <div>
              <span className="eyebrow">Sécurité & confiance</span>
              <h2 style={{ fontSize: 48, marginTop: 20 }}>Vos données vous appartiennent. Toujours.</h2>
              <p style={{ fontSize: 16, marginTop: 20, lineHeight: 1.65, color: '#3A3A3A' }}>
                Chiffrement AES-256 en transit et au repos, backups quotidiens, authentification à deux facteurs, conformité RGPD et UEMOA. Society ne revend jamais vos données — ni vos membres.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {['Chiffrement AES-256', 'Conformité UEMOA', 'Export données libre', 'Backups quotidiens', 'Authentification 2FA', 'SLA 99,9 % (Institution)'].map((s, i) => (
                <div key={i} style={{ padding: '16px 20px', background: '#F8F8F8', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600 }}>
                  <span style={{ color: '#0E47AB', fontSize: 16 }}>✓</span> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: '80px 64px 100px' }}>
        <div className="container">
          <div style={{ background: '#0a0a0a', borderRadius: 40, padding: '80px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: '#0E47AB', opacity: 0.5, filter: 'blur(80px)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ color: 'white', fontSize: 64, marginBottom: 24 }}>Prêt à démarrer ?</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18, maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.6 }}>
                Inscrivez votre communauté en moins de 5 minutes. Accès gratuit pendant la phase bêta — sans carte bancaire.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <NavLink to="/inscription" className="btn btn-gold btn-xl">Inscrire ma communauté →</NavLink>
                <NavLink to="/contact" className="btn btn-outline-white btn-xl">Demander une démo</NavLink>
              </div>
              <div style={{ marginTop: 24, color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                society.ci · contact@difero.ci · Abidjan, Côte d'Ivoire
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
