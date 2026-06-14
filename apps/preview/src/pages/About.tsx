import { GradualBlur, GlareHover, DecryptedText } from '@premier-js/components'

const values = [
  { title: 'Exigence', desc: 'Chaque pixel compte. Nous ne livrons que ce dont nous sommes fiers.' },
  { title: 'Proximité', desc: 'Une relation directe, sans intermédiaire, basée sur la confiance.' },
  { title: 'Innovation', desc: 'Nous explorons les technologies émergentes pour des solutions durables.' },
]

const team = [
  { name: 'Sarah Klein', role: 'Design Director', color: '#7c3aed' },
  { name: 'Marcus Dubois', role: 'Lead Developer', color: '#059669' },
  { name: 'Élise Moreau', role: 'Project Manager', color: '#d946ef' },
]

export function About() {
  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <p className="section-label">Qui sommes-nous</p>
          <h1 className="section-title" style={{ maxWidth: 700, marginBottom: 24 }}>
            Studio NOVA, c&apos;est l&apos;alliance du design et de la technologie
          </h1>
          <p className="section-desc" style={{ fontSize: 18, maxWidth: 600, marginBottom: 48 }}>
            Nous sommes une équipe de créatifs et d&apos;ingénieurs passionnés, convaincus que les plus belles histoires naissent
            d&apos;une collaboration étroite entre vision artistique et excellence technique.
          </p>

          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', padding: 64, marginBottom: 48 }}>
            <GradualBlur
              strength={3}
              height="100%"
              preset="intense"
              style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 16 }}>
                &ldquo;Le design n&apos;est pas seulement ce à quoi cela ressemble et ce que cela procure.
                Le design, c&apos;est comment ça marche.&rdquo;
              </p>
              <span style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 500 }}>— Steve Jobs</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 80 }}>
            {values.map((v) => (
              <div key={v.title} className="gs-glass-subtle" style={{ padding: 32 }}>
                <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginBottom: 32 }}>L&apos;équipe</h2>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {team.map((m) => (
              <GlareHover
                key={m.name}
                width="240px"
                height="200px"
                borderRadius="16px"
                glareColor={m.color}
                glareOpacity={0.1}
                className="gs-glass-subtle"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 24,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 500 }}>{m.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.role}</p>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', marginTop: 80, paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: 450, margin: '0 auto 16px' }}>
            Envie de nous rencontrer ?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <DecryptedText text="contact@studionova.fr" animateOn="view" speed={80} />
          </p>
          <a href="/contact" className="btn-primary">Prendre rendez-vous</a>
        </div>
      </section>
    </>
  )
}
