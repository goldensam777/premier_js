'use client'

import dynamic from 'next/dynamic'
import { DecryptedText } from '@premier-js/components'
import Link from 'next/link'

const Antigravity = dynamic(
  () => import('@premier-js/components/src/effects/animations/Antigravity/Antigravity').then(m => m.Antigravity),
  { ssr: false }
)

const values = [
  { title: 'Exigence', desc: 'Chaque pixel compte. Nous ne livrons que ce dont nous sommes fiers.' },
  { title: 'Innovation', desc: 'Nous explorons les technologies émergentes pour repousser les limites.' },
  { title: 'Collaboration', desc: 'Votre vision est notre point de départ. Nous construisons ensemble.' },
  { title: 'Performance', desc: 'Des sites rapides, accessibles et optimisés.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ height: '50vh', minHeight: 400, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
          <Antigravity
            count={250}
            ringRadius={6}
            waveSpeed={0.2}
            particleSize={2}
            color="#3b82f6"
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
              Qui sommes-nous
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
              <DecryptedText text="Studio NOVA" animateOn="view" speed={15} />
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 680 }}>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              marginBottom: 32,
            }}
          >
            Design et technologie ne font qu&apos;un.
          </h2>
          <div style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p>
              Studio NOVA est né d&apos;une conviction&nbsp;: le design et la technologie ne font qu&apos;un.
              Depuis 2024, nous accompagnons des entrepreneurs, startups et entreprises dans
              la création de leurs produits digitaux.
            </p>
            <p>
              Nous croyons en une approche artisanale du développement web — chaque projet
              est unique et mérite une attention particulière, de la conception à la livraison.
              Notre équipe combine expertise technique et sensibilité créative pour livrer
              des expériences qui marquent les esprits.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingTop: 100, paddingBottom: 100 }}>
          <p className="section-label" style={{ textAlign: 'center' }}>Nos valeurs</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 48, marginTop: 48 }}>
            {values.map((v) => (
              <div key={v.title} style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 12, letterSpacing: '-0.02em' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
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
          Envie de travailler avec nous&nbsp;?
        </h2>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>
          Nous sommes toujours ouverts aux nouvelles collaborations.
        </p>
        <Link href="/contact" className="btn-primary">
          Contactez-nous
        </Link>
      </section>
    </>
  )
}
