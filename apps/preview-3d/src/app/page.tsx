'use client'

import dynamic from 'next/dynamic'
import { GlareHover, DecryptedText } from '@premier-js/components'
import Link from 'next/link'

const Antigravity = dynamic(
  () => import('@premier-js/components/src/effects/animations/Antigravity/Antigravity').then(m => m.Antigravity),
  { ssr: false }
)

const MetaBalls = dynamic(
  () => import('@premier-js/components/src/effects/animations/MetaBalls/MetaBalls').then(m => m.MetaBalls),
  { ssr: false }
)

const projects = [
  { title: 'NOVA Bank', cat: 'Finance', color: '#a78bfa' },
  { title: 'EcoTrack', cat: 'Environnement', color: '#34d399' },
  { title: 'ArtSpace', cat: 'Culture', color: '#f472b6' },
]

const services = [
  {
    num: '01',
    title: 'Design',
    desc: 'Interfaces, identités visuelles et expériences qui marquent.',
  },
  {
    num: '02',
    title: 'Développement',
    desc: 'Sites, applications et outils digitaux sur mesure.',
  },
  {
    num: '03',
    title: 'Conseil',
    desc: 'Stratégie, architecture et optimisation de vos produits.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
          <Antigravity
            count={300}
            ringRadius={7}
            waveSpeed={0.25}
            waveAmplitude={0.6}
            particleSize={2.5}
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
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 24,
                display: 'block',
              }}
            >
              Studio de création digitale
            </span>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(48px, 8vw, 104px)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                maxWidth: 900,
                marginBottom: 32,
              }}
            >
              Façonner l&apos;expérience de demain
            </h1>
            <p
              style={{
                fontSize: 17,
                color: 'var(--text-muted)',
                maxWidth: 480,
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Design, technologie et innovation au service de votre vision.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link href="/work" className="btn-primary">
                Voir les réalisations
              </Link>
              <Link href="/contact" className="btn-outline">
                Discuter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ marginBottom: 64 }}>
          <p className="section-label">Projets récents</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            <h2 className="section-title" style={{ maxWidth: 600 }}>
              <DecryptedText text="Sélection de travaux" animateOn="view" speed={20} />
            </h2>
            <Link
              href="/work"
              style={{
                fontSize: 14,
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'color 0.2s',
              }}
            >
              Tout voir &rarr;
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {projects.map((p) => (
            <Link key={p.title} href="/work">
              <GlareHover
                width="100%"
                height="340px"
                borderRadius="12px"
                glareColor={p.color}
                glareOpacity={0.15}
                glareSize={350}
                playOnce
                className="gs-glass-subtle"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 32,
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, marginBottom: 8 }}>
                  {p.cat}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>
                  {p.title}
                </h3>
              </GlareHover>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ paddingTop: 100, paddingBottom: 100 }}>
          <p className="section-label">Notre expertise</p>
          <h2 className="section-title" style={{ marginBottom: 56, maxWidth: 600 }}>
            Des services sur mesure
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} className="gs-glass-subtle" style={{ padding: 32 }}>
                <span style={{ fontSize: 32, fontWeight: 300, color: 'var(--accent)', fontFamily: "'Instrument Serif', serif", display: 'block', marginBottom: 16 }}>
                  {s.num}
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 12, letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MetaBalls Showcase */}
      <section style={{ height: '80vh', minHeight: 500, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <MetaBalls
            color="#f1f0f7"
            cursorBallColor="#a855f7"
            speed={0.35}
            ballCount={18}
            animationSize={35}
            enableTransparency
            cursorBallSize={3.5}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 24,
          }}
        >
          <p className="section-label" style={{ color: 'var(--text-muted)' }}>Immersif</p>
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            L&apos;interactivité comme langage
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 420 }}>
            Des expériences qui captivent et racontent une histoire.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            maxWidth: 600,
            margin: '0 auto 20px',
          }}
        >
          Prêt à donner vie à votre projet&nbsp;?
        </h2>
        <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto 40px' }}>
          Discutons de vos idées et transformons-les en réalité digitale.
        </p>
        <Link href="/contact" className="btn-primary">
          Démarrer le projet
        </Link>
      </section>
    </>
  )
}
