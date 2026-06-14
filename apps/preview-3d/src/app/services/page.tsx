'use client'

import dynamic from 'next/dynamic'
import { DecryptedText } from '@premier-js/components'
import Link from 'next/link'

const Antigravity = dynamic(
  () => import('@premier-js/components/src/effects/animations/Antigravity/Antigravity').then(m => m.Antigravity),
  { ssr: false }
)

const services = [
  {
    title: 'Design UI/UX',
    desc: 'Recherche utilisateur, wireframes, prototypes interactifs et design systems complets. Nous concevons des interfaces qui allient esthétique et fonctionnalité.',
    items: ['Audit UX', 'Architecture', 'Design System', 'Prototypage'],
  },
  {
    title: 'Développement Web',
    desc: 'Sites vitrines, applications SaaS, dashboards et plateformes sur mesure. Du front-end à l\'infrastructure, nous livrons des produits solides.',
    items: ['Next.js / React', 'API & Backend', 'Performance', 'Accessibilité'],
  },
  {
    title: 'Direction Artistique',
    desc: 'Identité visuelle, motion design et direction créative. Nous donnons une personnalité unique à chaque projet.',
    items: ['Identité de marque', 'Motion design', 'Guidelines', 'Direction créative'],
  },
  {
    title: 'Conseil & Stratégie',
    desc: 'Accompagnement technique et stratégique pour vos projets digitaux. De la conception à la mise en production.',
    items: ['Stratégie digitale', 'Architecture tech', 'Audit', 'Formation'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ height: '50vh', minHeight: 400, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <Antigravity
            count={200}
            ringRadius={5}
            waveSpeed={0.2}
            particleSize={2}
            color="#a855f7"
            autoAnimate
            particleShape="sphere"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 24px',
          }}
        >
          <div className="container">
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20, display: 'block' }}>
              Notre expertise
            </span>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                maxWidth: 700,
              }}
            >
              <DecryptedText text="Services" animateOn="view" speed={15} />
            </h1>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="gs-glass-subtle"
              style={{ padding: 40, display: 'flex', flexDirection: 'column' }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 12 }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24, flex: 1 }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '6px 14px',
                      fontSize: 12,
                      fontWeight: 500,
                      borderRadius: 20,
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              maxWidth: 500,
              margin: '0 auto 16px',
            }}
          >
            Vous avez un projet en tête&nbsp;?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>
            Discutons de vos besoins et trouvons la meilleure solution.
          </p>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
