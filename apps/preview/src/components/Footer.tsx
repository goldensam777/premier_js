import { DotField } from '@premier-js/components'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 120 }}>
      <div className="container" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Studio NOVA
            </h4>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 280 }}>
              Design, technologie et innovation au service de votre vision.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="/" style={{ fontSize: 14, color: 'var(--text-muted)' }}>Accueil</a>
              <a href="/services" style={{ fontSize: 14, color: 'var(--text-muted)' }}>Services</a>
              <a href="/work" style={{ fontSize: 14, color: 'var(--text-muted)' }}>Réalisations</a>
              <a href="/about" style={{ fontSize: 14, color: 'var(--text-muted)' }}>À propos</a>
              <a href="/contact" style={{ fontSize: 14, color: 'var(--text-muted)' }}>Contact</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>contact@studionova.fr</span>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>+33 1 23 45 67 89</span>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Paris, France</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', marginTop: 48, paddingTop: 24, textAlign: 'center', fontSize: 13, color: 'var(--text-subtle)' }}>
          &copy; {new Date().getFullYear()} Studio NOVA. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
