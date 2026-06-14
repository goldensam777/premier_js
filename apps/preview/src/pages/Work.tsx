import { GlareHover, DecryptedText } from '@premier-js/components'

const projects = [
  { title: 'NOVA Bank', cat: 'Finance', color: '#7c3aed', year: '2025', desc: 'Refonte complète de l’application bancaire avec une approche mobile-first et des interfaces accessibles.' },
  { title: 'EcoTrack', cat: 'Environnement', color: '#059669', year: '2024', desc: 'Plateforme de suivi carbone pour entreprises, avec visualisation temps réel et rapports automatisés.' },
  { title: 'ArtSpace', cat: 'Culture', color: '#d946ef', year: '2024', desc: 'Galerie d’art virtuelle immersive permettant l’exposition et la vente d’œuvres numériques.' },
  { title: 'MediFlow', cat: 'Santé', color: '#2563eb', year: '2025', desc: 'Application de gestion des flux patients pour cliniques, avec prise de rendez-vous et dossier médical.' },
  { title: 'FoodLab', cat: 'Restauration', color: '#ea580c', year: '2024', desc: 'Solution de commande et de gestion pour restaurants, avec menu dynamique et analytics.' },
  { title: 'CoachIA', cat: 'EdTech', color: '#0891b2', year: '2025', desc: 'Assistant pédagogique basé sur l’IA générative, avec parcours personnalisés et suivi des progrès.' },
]

export function Work() {
  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title" style={{ maxWidth: 600, marginBottom: 16 }}>
            Réalisations
          </h1>
          <p className="section-desc" style={{ marginBottom: 48 }}>
            Une sélection de projets récents qui témoignent de notre savoir-faire et de notre engagement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
            {projects.map((p) => (
              <GlareHover
                key={p.title}
                width="100%"
                height="320px"
                borderRadius="16px"
                glareColor={p.color}
                glareOpacity={0.12}
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
                    <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
                <span style={{ fontSize: 13, color: 'var(--accent)', marginTop: 20, fontWeight: 500 }}>
                  Voir le projet &rarr;
                </span>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', marginTop: 80, paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: 500, margin: '0 auto 16px' }}>
            Vous avez un projet ?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <DecryptedText text="contact@studionova.fr" animateOn="view" speed={80} />
          </p>
          <a href="/contact" className="btn-primary">Discutons-en</a>
        </div>
      </section>
    </>
  )
}
