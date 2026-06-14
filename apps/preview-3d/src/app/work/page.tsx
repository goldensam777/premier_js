'use client'

import dynamic from 'next/dynamic'
import { GlareHover, DecryptedText } from '@premier-js/components'
import Link from 'next/link'

const MetaBalls = dynamic(
  () => import('@premier-js/components/src/effects/animations/MetaBalls/MetaBalls').then(m => m.MetaBalls),
  { ssr: false }
)

const projects = [
  { title: 'NOVA Bank', cat: 'Finance', desc: 'Plateforme bancaire nouvelle génération', color: '#a78bfa', year: '2026' },
  { title: 'EcoTrack', cat: 'Environnement', desc: 'Dashboard de suivi carbone temps réel', color: '#34d399', year: '2026' },
  { title: 'ArtSpace', cat: 'Culture', desc: 'Galerie d\'art immersive 3D', color: '#f472b6', year: '2025' },
  { title: 'CloudHub', cat: 'Tech', desc: 'Console d\'administration cloud', color: '#fbbf24', year: '2025' },
  { title: 'MediCare', cat: 'Santé', desc: 'Application de télémédecine', color: '#f87171', year: '2025' },
  { title: 'SmartCity', cat: 'Urbain', desc: 'Plateforme de données urbaines', color: '#22d3ee', year: '2024' },
  { title: 'LearnFlow', cat: 'Éducation', desc: 'LMS nouvelle génération', color: '#e879f9', year: '2024' },
  { title: 'PayWave', cat: 'Fintech', desc: 'Solution de paiement mobile', color: '#2dd4bf', year: '2024' },
  { title: 'DevPortal', cat: 'DevTools', desc: 'Portail développeur avec API', color: '#818cf8', year: '2024' },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ height: '45vh', minHeight: 360, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <MetaBalls
            color="#f1f0f7"
            cursorBallColor="#a855f7"
            speed={0.3}
            ballCount={14}
            animationSize={30}
            enableTransparency
            cursorBallSize={3}
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
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20, display: 'block' }}>
              Portfolio
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
              <DecryptedText text="Nos réalisations" animateOn="view" speed={15} />
            </h1>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {projects.map((p) => (
            <GlareHover
              key={p.title}
              width="100%"
              height="300px"
              borderRadius="12px"
              glareColor={p.color}
              glareOpacity={0.15}
              glareSize={300}
              playOnce
              className="gs-glass-subtle"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 32,
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color }}>
                    {p.cat}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>
                    {p.year}
                  </span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-subtle)', marginTop: 16 }}>
                Voir le projet &rarr;
              </span>
            </GlareHover>
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
            Vous avez un projet similaire&nbsp;?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>
            Contactez-nous pour discuter de votre idée.
          </p>
          <Link href="/contact" className="btn-primary">
            Démarrer
          </Link>
        </div>
      </section>
    </>
  )
}
