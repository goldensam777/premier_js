import { Ferrofluid, DecryptedText } from '@premier-js/components'

const services = [
  { num: '01', title: 'Design', desc: 'Interfaces, identités visuelles et expériences qui marquent.' },
  { num: '02', title: 'Développement', desc: 'Sites, applications et outils digitaux sur mesure.' },
  { num: '03', title: 'Conseil', desc: 'Stratégie, architecture et optimisation de vos produits.' },
]

export function Home() {
  return (
    <>
      <section style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Ferrofluid
            colors={['#d8b4fe', '#c084fc', '#a855f7', '#7c3aed']}
            opacity={0.6}
            speed={0.4}
            scale={1.8}
            turbulence={0.7}
            fluidity={0.3}
            mouseInteraction={false}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
          <div>
            <p className="section-label">Studio NOVA</p>
            <h1 className="section-title" style={{ maxWidth: 720, fontSize: 'clamp(40px, 6vw, 72px)' }}>
              Créons ensemble <span style={{ color: 'var(--accent)' }}>l&apos;exception</span>
            </h1>
            <p className="section-desc" style={{ fontSize: 18, maxWidth: 520, marginBottom: 40 }}>
              Design, technologie et innovation au service des marques qui veulent se démarquer.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="/work" className="btn-primary">Voir nos réalisations</a>
              <a href="/contact" className="btn-outline">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <p className="section-label">Notre approche</p>
        <h2 className="section-title" style={{ maxWidth: 500 }}>Un accompagnement sur mesure</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 48 }}>
          {services.map((s) => (
            <div key={s.num} className="gs-glass-subtle" style={{ padding: 32 }}>
              <span style={{ fontSize: 32, fontWeight: 300, color: 'var(--accent)', display: 'block', marginBottom: 16 }}>{s.num}</span>
              <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--bg-elevated)', paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">Prêt à collaborer ?</p>
          <h2 className="section-title" style={{ maxWidth: 500, margin: '0 auto 16px' }}>
            Parlons de votre projet
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <DecryptedText text="contact@studionova.fr" animateOn="view" speed={80} />
          </p>
          <a href="/contact" className="btn-primary">Nous écrire</a>
        </div>
      </section>
    </>
  )
}
