import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'

const plans = [
  {
    n: 'Communauté',
    p: 'Gratuit',
    sub: 'Pour toujours.',
    d: 'Pour démarrer et structurer votre communauté sans frais.',
    c: "Jusqu'à 1 500 membres",
    f: [
      'Gestion des membres & rôles',
      'Communication par canaux',
      '3 cagnottes actives max',
      'Page communautaire publique',
      'Cotisations de base',
      'Mobile Money intégré',
      'Support communautaire',
    ],
    cta: 'Démarrer gratuitement',
    color: '#F8F8F8',
    text: '#0a0a0a',
    extra: 'Possibilité d\'étendre les limites au prorata',
  },
  {
    n: 'Corporate',
    p: '24 900',
    pAnnuel: '19 920',
    currency: 'FCFA',
    sub: '/mois',
    d: 'Pour les associations actives et les réseaux professionnels qui veulent professionnaliser leur gestion.',
    c: 'Membres illimités',
    f: [
      'Tout Communauté, plus :',
      'Cotisations automatisées & relances',
      'Cagnottes & crowdfunding illimités',
      'Billetterie + QR codes',
      "Rapports d'impact PDF",
      'Sous-groupes avancés',
      'Gestion des bénévoles',
      'Analytics & tableaux de bord',
      'Support prioritaire',
    ],
    cta: 'Choisir Corporate',
    color: '#0E47AB',
    text: 'white',
    popular: true,
    extra: 'Possibilité d\'étendre les limites au prorata',
  },
  {
    n: 'Institution',
    p: 'Sur mesure',
    sub: 'Selon volume.',
    d: 'Pour ONG, mutuelles, fédérations nationales et grandes communautés à fort impact.',
    c: 'À partir de 5 000 membres',
    f: [
      'Tout Corporate, plus :',
      'Données démographiques & sociales',
      'Indices de développement communautaire',
      'Dashboard RSE multi-entités',
      'Analyse de l\'impact socio-économique',
      'Cartographie géographique des membres',
      'Rapports bailleurs sur mesure (ODD)',
      'SSO & sécurité avancée',
      'SLA 99,9 %',
      'Conformité réglementaire UMOA',
      'Onboarding sur site & formation équipe',
      'Account manager dédié',
    ],
    cta: 'Nous contacter',
    color: '#0a0a0a',
    text: 'white',
    extra: 'Déploiement personnalisé & intégrations sur mesure',
  },
]

export default function Tarifs() {
  const [annuel, setAnnuel] = useState(false)

  return (
    <div className="page">
      <Nav />

      <section style={{ padding: '120px 64px 48px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <span className="eyebrow">Tarifs</span>
            <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9, maxWidth: 900, margin: '28px auto 0' }}>
              Un prix juste,<br />
              <span style={{ color: '#0E47AB' }}>conçu pour l'Afrique</span>.
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 680, margin: '32px auto 0', lineHeight: 1.5 }}>
              Plan gratuit pour démarrer. Plans payants en FCFA, payables par Mobile Money. Pas de carte bancaire requise.
            </p>

            <div style={{ display: 'inline-flex', marginTop: 48, padding: 6, background: '#F2F2F2', borderRadius: 999 }}>
              <button onClick={() => setAnnuel(false)} style={{ padding: '10px 20px', background: !annuel ? 'white' : 'transparent', borderRadius: 999, border: 'none', fontSize: 14, fontWeight: 600, boxShadow: !annuel ? '0 2px 8px rgba(0,0,0,0.06)' : 'none', cursor: 'pointer' }}>Mensuel</button>
              <button onClick={() => setAnnuel(true)} style={{ padding: '10px 20px', background: annuel ? 'white' : 'transparent', borderRadius: 999, border: 'none', fontSize: 14, fontWeight: annuel ? 600 : 500, color: annuel ? '#0a0a0a' : '#6B6B6B', cursor: 'pointer', boxShadow: annuel ? '0 2px 8px rgba(0,0,0,0.06)' : 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Annuel <span style={{ padding: '2px 8px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 700 }}>−20 %</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '40px 64px 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {plans.map((p, i) => {
              const price = annuel && p.pAnnuel ? p.pAnnuel : p.p
              return (
                <Reveal key={i} delay={i * 80} direction="scale">
                  <div style={{ padding: 36, background: p.color, color: p.text, borderRadius: 28, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {p.popular && <div style={{ position: 'absolute', top: -12, left: 24, padding: '6px 12px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em' }}>RECOMMANDÉ</div>}
                    <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{p.n}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 16, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{price}</span>
                      {p.currency && <span style={{ fontSize: 13, fontWeight: 700, opacity: 0.85 }}>{p.currency}</span>}
                    </div>
                    <div style={{ fontSize: 13, marginTop: 4, opacity: 0.75 }}>{annuel && p.pAnnuel ? '/mois, facturé annuellement' : p.sub}</div>
                    <p style={{ fontSize: 14, marginTop: 16, opacity: 0.85, color: p.text === 'white' ? 'rgba(255,255,255,0.85)' : '#3A3A3A' }}>{p.d}</p>
                    <div style={{ padding: '10px 14px', marginTop: 20, background: p.text === 'white' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)', borderRadius: 10, fontSize: 12, fontWeight: 600 }}>{p.c}</div>
                    <div style={{ margin: '24px 0', borderTop: `1px solid ${p.text === 'white' ? 'rgba(255,255,255,0.15)' : '#E5E5E5'}` }} />
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, flex: 1 }}>
                      {p.f.map((f, j) => (
                        <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.4 }}>
                          <span style={{ flexShrink: 0, marginTop: 2 }}>✓</span>
                          <span style={{ fontWeight: j === 0 && f.includes('plus') ? 700 : 400 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    {p.extra && (
                      <div style={{ marginTop: 16, padding: '10px 14px', background: p.text === 'white' ? 'rgba(255,255,255,0.08)' : 'rgba(14,71,171,0.06)', borderRadius: 10, fontSize: 12, color: p.text === 'white' ? 'rgba(255,255,255,0.6)' : '#0E47AB', fontStyle: 'italic' }}>
                        ↗ {p.extra}
                      </div>
                    )}
                    <NavLink to="/inscription" style={{ marginTop: 24, padding: '14px 20px', textAlign: 'center', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none', background: p.text === 'white' ? 'white' : '#0E47AB', color: p.text === 'white' ? (p.color === '#0E47AB' ? '#0E47AB' : p.color) : 'white', display: 'block' }}>{p.cta}</NavLink>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* INSTITUTION SHOWCASE */}
      <section style={{ background: '#0a0a0a', padding: '80px 64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="eyebrow white">Plan Institution</span>
              <h2 style={{ color: 'white', marginTop: 16, fontSize: 52, maxWidth: 600 }}>Pour les organisations<br />à fort impact institutionnel.</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 560, lineHeight: 1.6 }}>
                ONG, mutuelles nationales, fédérations, grandes paroisses — Society Institution est la seule solution qui combine gestion communautaire et analyse socio-économique à l'échelle africaine.
              </p>
            </div>
            <NavLink to="/contact" className="btn btn-gold btn-lg">Demander un devis →</NavLink>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { n: '01', title: 'Données socio-démographiques', desc: 'Indices de développement communautaire, cartographie géographique des membres, analyse d\'impact socio-économique et ODD.' },
              { n: '02', title: 'Dashboard RSE multi-entités', desc: 'Pilotez plusieurs entités depuis un seul tableau de bord. Rapports bailleurs automatisés, conformes aux exigences des donateurs institutionnels.' },
              { n: '03', title: 'Sécurité & conformité avancée', desc: 'SSO, SLA 99,9 %, conformité UMOA, hébergement souverain en Afrique de l\'Ouest. Pour les organisations à responsabilité élevée.' },
              { n: '04', title: 'Onboarding & formation sur site', desc: 'Déploiement personnalisé dans vos locaux, formation de votre équipe, account manager dédié pour un accompagnement continu.' },
              { n: '05', title: 'Intégrations & API sur mesure', desc: 'Connexion avec vos systèmes existants (ERP, CRM, comptabilité). Développement d\'intégrations personnalisées selon vos workflows.' },
              { n: '06', title: 'À partir de 5 000 membres', desc: 'Tarification sur volume, calculée selon vos besoins réels. Contrat sur mesure avec SLA garanti et support dédié 6j/7.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 28, background: 'rgba(255,255,255,0.05)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.09)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ color: 'white', fontSize: 17, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: '24px 32px', background: 'rgba(212,167,91,0.12)', borderRadius: 16, border: '1px solid rgba(212,167,91,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ color: '#D4A75B', fontWeight: 700, fontSize: 15 }}>Tarification sur mesure</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 4 }}>Devis sous 48h · Démo personnalisée · Sans engagement initial</div>
            </div>
            <NavLink to="/contact" style={{ padding: '12px 24px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Contacter l'équipe →</NavLink>
          </div>
        </div>
      </section>

      {/* COMMISSIONS */}
      <section style={{ padding: '80px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div className="two-col-grid">
            <Reveal direction="left">
              <span className="eyebrow">Commissions</span>
              <h2 style={{ fontSize: 52, marginTop: 24 }}>2,5 % seulement<br />sur les flux collectés.</h2>
              <p style={{ fontSize: 17, marginTop: 20, maxWidth: 460 }}>Sur les cagnottes, cotisations, billets et dons. Pas de frais cachés. Frais Mobile Money inclus.</p>
            </Reveal>
            <Reveal direction="right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { l: 'Cagnottes', v: '2,5 %', d: 'sur les fonds collectés' },
                  { l: 'Cotisations', v: '1,5 %', d: 'sur les paiements récurrents' },
                  { l: 'Billetterie', v: '3 %', d: '+ 100 FCFA / billet' },
                  { l: 'Dons', v: '0 %', d: 'pour ONG certifiées' },
                ].map((c, i) => (
                  <div key={i} style={{ padding: 28, background: 'white', borderRadius: 20 }}>
                    <div style={{ fontSize: 14, color: '#6B6B6B', fontWeight: 600 }}>{c.l}</div>
                    <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em', color: '#0E47AB', marginTop: 4 }}>{c.v}</div>
                    <div style={{ fontSize: 13, color: '#6B6B6B' }}>{c.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid" style={{ gap: 80 }}>
            <Reveal direction="left">
              <span className="eyebrow">FAQ</span>
              <h2 style={{ fontSize: 52, marginTop: 24 }}>Questions<br />fréquentes.</h2>
              <p style={{ fontSize: 16, marginTop: 20, maxWidth: 360 }}>Une autre question ? <NavLink to="/contact" style={{ color: '#0E47AB', fontWeight: 600 }}>Écrivez-nous →</NavLink></p>
            </Reveal>
            <div>
              {[
                ["Puis-je tester gratuitement avant de payer ?", "Oui. Le plan Communauté est gratuit pour toujours, jusqu'à 1 500 membres et 3 cagnottes. Vous pouvez essayer Corporate gratuitement pendant 30 jours, sans carte bancaire."],
                ["Comment fonctionne le paiement ?", "Vous payez en FCFA via Orange Money, Wave, MTN MoMo ou carte bancaire. Mensuel ou annuel (−20 %)."],
                ["Que se passe-t-il si je dépasse les limites ?", "Aucune coupure brutale. Vous pouvez étendre vos limites en payant un complément calculé au prorata de votre usage réel."],
                ["Mes données sont-elles sécurisées ?", "Oui. Hébergement souverain en Afrique de l'Ouest, chiffrement AES-256, conformité RGPD et UEMOA. Vos données vous appartiennent."],
                ["Puis-je exporter mes données ?", "Oui, à tout moment. Tous vos membres, cotisations, événements peuvent être exportés en CSV ou Excel."],
                ["Qu'est-ce que le plan Institution apporte en plus ?", "Le plan Institution intègre des données démographiques et sociales avancées, des indices de développement, une cartographie géographique des membres et des analyses d'impact socio-économique — idéal pour les rapports bailleurs exigeants."],
              ].map((q, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-summary">
                    {q[0]} <span className="faq-icon">+</span>
                  </summary>
                  <p style={{ marginTop: 12, fontSize: 15, color: '#3A3A3A', lineHeight: 1.6 }}>{q[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
