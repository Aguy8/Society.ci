import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon.jsx'

export default function Fonctionnalites() {
  return (
    <div className="page">
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px 64px 80px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ maxWidth: 900 }}>
            <span className="eyebrow">Fonctionnalités</span>
            <h1 style={{ fontSize: 100, marginTop: 28, lineHeight: 0.9 }}>
              5 modules.<br />
              <span style={{ color: '#0E47AB' }}>1 plateforme</span>.<br />
              Zéro friction.
            </h1>
            <p style={{ fontSize: 20, marginTop: 32, maxWidth: 700, lineHeight: 1.5 }}>
              Chaque module est pensé pour les réalités africaines : mobile-first, paiements locaux, multilinguisme, usage hors-ligne partiel.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 56, flexWrap: 'wrap' }}>
            {['Gestion communautaire', 'Monétisation', 'Mise en relation', 'Visibilité & Impact', 'Espace Leader'].map((m, i) => (
              <a key={i} href={`#m${i + 1}`} style={{ padding: '12px 20px', background: i === 0 ? '#0a0a0a' : 'white', color: i === 0 ? 'white' : '#0a0a0a', borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #E5E5E5' }}>
                <span style={{ color: i === 0 ? '#D4A75B' : '#0E47AB', marginRight: 8 }}>{`0${i + 1}`}</span>{m}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 1 */}
      <section id="m1" style={{ padding: '120px 64px' }}>
        <div className="container">
          <div className="two-col-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 01</div>
                <div style={{ height: 1, flex: 1, background: '#E5E5E5' }} />
              </div>
              <h2 style={{ fontSize: 72 }}>Gestion communautaire.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520 }}>
                Tout ce qu'il faut pour gérer une communauté sans Excel ni WhatsApp. Un cœur opérationnel solide, pensé pour les non-techniciens.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gap: 4 }}>
                {[
                  ['Base de données vivante', 'Profils complets, segmentation, historique des cotisations, niveau d\'implication.'],
                  ['Communication ciblée', 'Canaux par sous-groupes, comités, thématiques — sans pollution de groupe.'],
                  ['Gestion des événements', 'Création, invitations, suivi des présences, bilans post-événement.'],
                  ['Pilotage de projets', 'Planification, suivi, archivage, mise en valeur des initiatives.'],
                  ['Tableau de bord d\'impact', 'Membres actifs, taux de participation, projets réalisés, fonds collectés.'],
                  ['Rôles et permissions', 'Administrateur, modérateur, membre, bénévole — granulaire.'],
                ].map((f, i) => (
                  <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid #E5E5E5', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#E8EFFC', display: 'grid', placeItems: 'center' }}>
                      <Icon name="check" size={18} color="#0E47AB" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{f[0]}</div>
                      <div style={{ color: '#6B6B6B', fontSize: 14, marginTop: 4 }}>{f[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div style={{ background: '#F2F2F2', borderRadius: 32, padding: 32, position: 'relative', minHeight: 600, overflow: 'hidden' }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600, textTransform: 'uppercase' }}>Tableau de bord</div>
                    <div style={{ fontSize: 20, fontWeight: 800, marginTop: 2 }}>Cansein Fondation</div>
                  </div>
                  <div style={{ padding: '6px 12px', background: '#E8FBF1', color: '#0F8B4F', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>● Live</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
                  {[['Membres', '1 248', '+18'], ['Cotisations', '94 %', '+5 %'], ['Projets', '12', '4 actifs']].map((s, i) => (
                    <div key={i} style={{ padding: 14, background: '#F8F8F8', borderRadius: 12 }}>
                      <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>{s[0]}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, letterSpacing: '-0.02em' }}>{s[1]}</div>
                      <div style={{ fontSize: 11, color: '#0E47AB', marginTop: 2 }}>{s[2]}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 16, background: '#F8F8F8', borderRadius: 12, marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>Activité — 30 jours</div>
                    <div style={{ fontSize: 11, color: '#6B6B6B' }}>+24 %</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 60 }}>
                    {[40, 55, 35, 70, 60, 82, 75, 90, 65, 80, 95, 88, 72, 85].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? '#0E47AB' : '#D5DCEA', borderRadius: 3 }} />
                    ))}
                  </div>
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {[
                    { n: 'Awa K.', r: 'Trésorière', img: 'p_aw_fem_1.jpg' },
                    { n: 'Mamadou D.', r: 'Bénévole', img: 'p_aw_hom_1.jpg' },
                    { n: 'Salimata B.', r: 'Membre actif', img: 'p_aw_fem_6.jpg' },
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, background: '#F8F8F8', borderRadius: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundImage: `url(/assets/${m.img})`, backgroundSize: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 700 }}>{m.n}</div>
                        <div style={{ fontSize: 11, color: '#6B6B6B' }}>{m.r}</div>
                      </div>
                      <div style={{ padding: '4px 10px', background: '#E8EFFC', color: '#0E47AB', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>À jour</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 2 */}
      <section id="m2" style={{ padding: '120px 64px', background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div className="two-col-grid">
            <div style={{ order: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ padding: '6px 14px', background: '#D4A75B', color: '#0a0a0a', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>MODULE 02</div>
                <div style={{ height: 1, flex: 1, background: '#2a2a2a' }} />
              </div>
              <h2 style={{ fontSize: 72, color: 'white' }}>Monétisation & financement.</h2>
              <p style={{ fontSize: 18, marginTop: 24, maxWidth: 520, color: 'rgba(255,255,255,0.7)' }}>
                Transformer l'énergie communautaire en flux financiers structurés, traçables et sécurisés.
              </p>
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['Cagnottes en 3 clics', 'Cotisations automatiques', 'Crowdfunding participatif', 'Billetterie + QR codes', 'Abonnements premium', 'Reporting financier'].map((f, i) => (
                  <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, fontSize: 15, fontWeight: 600 }}>{f}</div>
                ))}
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Compatible :</span>
                {['Orange Money', 'Wave', 'MTN MoMo', 'Flooz'].map(p => (
                  <span key={p} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{p}</span>
                ))}
              </div>
            </div>

            <div style={{ order: 1, position: 'relative', minHeight: 560 }}>
              <div style={{ position: 'absolute', inset: 0, background: '#D4A75B', borderRadius: 40, transform: 'rotate(2deg)' }} />
              <div style={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, background: 'white', borderRadius: 28, padding: 28, color: '#0a0a0a' }}>
                <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>CAGNOTTE EN COURS</div>
                <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>Reconstruire l'école Anono</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 20 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#0E47AB' }}>7 245</span>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#0E47AB' }}>K</span>
                  <span style={{ fontSize: 16, color: '#6B6B6B', fontWeight: 600 }}>FCFA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6B6B6B', marginTop: 4 }}>
                  <span>collectés sur 10 000 K</span>
                  <span style={{ fontWeight: 700, color: '#0E47AB' }}>72 %</span>
                </div>
                <div style={{ height: 8, background: '#F2F2F2', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #0E47AB, #084CC2)' }} />
                </div>
                <button style={{ marginTop: 20, width: '100%', padding: 14, background: '#0E47AB', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Faire un don</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES 3-5 */}
      <section style={{ padding: '120px 64px' }}>
        <div className="container" style={{ display: 'grid', gap: 24 }}>
          <div id="m3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, padding: 48, background: '#F8F8F8', borderRadius: 32, alignItems: 'center' }}>
            <div>
              <div style={{ padding: '6px 14px', background: '#0E47AB', color: 'white', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block' }}>MODULE 03</div>
              <h3 style={{ fontSize: 48, marginTop: 12 }}>Mise en relation intelligente.</h3>
              <p style={{ fontSize: 16, marginTop: 12 }}>L'algorithme qui connecte besoins et ressources : compétences, profils disponibles, partenariats RSE.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
                {['Matching besoins/ressources', 'Annuaire interactif', 'Co-projets', 'Connexion RSE'].map(t => (
                  <span key={t} style={{ padding: '8px 14px', background: 'white', borderRadius: 999, fontSize: 13, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: 32, background: 'white', borderRadius: 20, boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>BESOIN</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>Développeur web bénévole</div>
              <div style={{ fontSize: 12, color: '#0E47AB', marginTop: 2 }}>ONG Hope Life CI</div>
              <div style={{ margin: '16px 0', padding: '12px 20px', background: '#0E47AB', color: 'white', borderRadius: 999, textAlign: 'center', fontSize: 14, fontWeight: 700 }}>
                <Icon name="spark" size={14} color="#D4A75B" /> 96 % de match
              </div>
              <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>RESSOURCE TROUVÉE</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 4 }}>Mamadou T.</div>
              <div style={{ fontSize: 12, color: '#0E47AB', marginTop: 2 }}>JCI Abidjan · React/Node</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div id="m4" style={{ padding: 48, background: '#0E47AB', color: 'white', borderRadius: 32 }}>
              <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block' }}>MODULE 04</div>
              <h3 style={{ fontSize: 44, marginTop: 12, color: 'white' }}>Visibilité & Impact.</h3>
              <p style={{ fontSize: 15, marginTop: 10, color: 'rgba(255,255,255,0.85)' }}>Pages publiques, rapports automatisés, valorisation RSE.</p>
              <div style={{ marginTop: 28, padding: 24, background: 'rgba(255,255,255,0.1)', borderRadius: 20 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>RAPPORT D'IMPACT — Q3 2026</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                  {[['14 290', 'bénéficiaires touchés'], ['8', 'projets réalisés'], ['62 M', 'FCFA collectés'], ['1 248', 'membres actifs']].map(([v, l], i) => (
                    <div key={i}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: '#D4A75B' }}>{v}</div>
                      <div style={{ fontSize: 12, opacity: 0.8 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div id="m5" style={{ padding: 48, background: 'linear-gradient(135deg, #FFD9DE, #E0D6FF)', borderRadius: 32 }}>
              <div style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.6)', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'inline-block' }}>MODULE 05</div>
              <h3 style={{ fontSize: 44, marginTop: 12 }}>Espace Leader & Influenceur.</h3>
              <p style={{ fontSize: 15, marginTop: 10 }}>Transformer une audience en communauté structurée, engagée et monétisable.</p>
              <div style={{ marginTop: 28, padding: 20, background: 'white', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
                <img src="/assets/p_aw_fem_5.jpg" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} alt="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>Aïssatou D.</div>
                  <div style={{ fontSize: 13, color: '#6B6B6B' }}>4 200 fans · Espace privé</div>
                </div>
                <div style={{ padding: '6px 12px', background: '#0a0a0a', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>VIP</div>
              </div>
              <div style={{ marginTop: 12, padding: 20, background: 'white', borderRadius: 20 }}>
                <div style={{ fontSize: 11, color: '#6B6B6B', fontWeight: 600 }}>REVENUS DU MOIS</div>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 4 }}>1 240 000 <span style={{ fontSize: 13, color: '#6B6B6B' }}>FCFA</span></div>
                <div style={{ fontSize: 12, color: '#0F8B4F', fontWeight: 600 }}>↑ 32 % vs mois dernier</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF */}
      <section style={{ padding: '120px 64px', background: '#F8F8F8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Vs. la concurrence</span>
            <h2 style={{ marginTop: 24, fontSize: 64 }}>Society fait ce qu'aucun autre<br />ne fait — en Afrique.</h2>
          </div>
          <div style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ background: '#F2F2F2' }}>
                  <th style={{ padding: '20px 24px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Fonctionnalité</th>
                  {['WhatsApp', 'Facebook', 'Circle.so', 'Society'].map((h, i) => (
                    <th key={h} style={{ padding: 20, textAlign: 'center', fontSize: 13, fontWeight: 700, color: i === 3 ? 'white' : '#6B6B6B', background: i === 3 ? '#0E47AB' : 'transparent' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gestion des membres & rôles', 0, 1, 2, 2],
                  ['Cotisations automatisées', 0, 0, 1, 2],
                  ['Mobile Money (OM, Wave, MoMo)', 0, 0, 0, 2],
                  ['Cagnottes & crowdfunding', 0, 0, 1, 2],
                  ['Billetterie + QR codes', 0, 1, 1, 2],
                  ["Rapports d'impact RSE", 0, 0, 0, 2],
                  ['Matching besoins/ressources', 0, 0, 0, 2],
                  ['Prix adapté Afrique', 2, 2, 0, 2],
                  ['Multilinguisme local', 2, 1, 0, 2],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid #E5E5E5' }}>
                    <td style={{ padding: '18px 24px', fontWeight: 600 }}>{row[0]}</td>
                    {[1, 2, 3, 4].map(c => (
                      <td key={c} style={{ padding: 18, textAlign: 'center', background: c === 4 ? '#F4F7FE' : 'transparent' }}>
                        {row[c] === 2 && <span style={{ display: 'inline-grid', placeItems: 'center', width: 26, height: 26, borderRadius: '50%', background: c === 4 ? '#0E47AB' : '#0F8B4F', color: 'white', fontSize: 13 }}>✓</span>}
                        {row[c] === 1 && <span style={{ color: '#D4A75B', fontSize: 18 }}>~</span>}
                        {row[c] === 0 && <span style={{ color: '#C9C9C9', fontSize: 20 }}>—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 64px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 72, maxWidth: 800, margin: '0 auto' }}>Tout ça,<br />en <span style={{ color: '#0E47AB' }}>5 minutes</span> chrono.</h2>
          <NavLink to="/inscription" className="btn btn-primary btn-xl" style={{ marginTop: 40, display: 'inline-flex' }}>
            Inscrire ma communauté <Icon name="arrow" size={16} color="white" />
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}
