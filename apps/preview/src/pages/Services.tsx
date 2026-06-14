import { ElectricBorder, DecryptedText } from '@premier-js/components'

const services = [
  {
    title: 'Design UI/UX',
    desc: 'Interfaces intuitives, identités visuelles complètes et expériences utilisateur pensées pour convertir.',
    items: ['Applications web & mobile', 'Design systems', 'Prototypage interactif'],
  },
  {
    title: 'Développement',
    desc: 'Sites vitrine, applications métier et outils digitaux construits avec les technologies les plus adaptées.',
    items: ['React, Next.js, Vue', 'Backend & API', 'CMS headless'],
  },
  {
    title: 'Conseil & Stratégie',
    desc: 'Audit technique, architecture logicielle et feuille de route pour accélérer votre transformation digitale.',
    items: ['Audit de code', 'Architecture cloud', 'Formation équipes'],
  },
]

export function Services() {
  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <p className="section-label">Notre expertise</p>
          <h1 className="section-title" style={{ maxWidth: 600, marginBottom: 16 }}>
            Services
          </h1>
          <p className="section-desc" style={{ marginBottom: 48 }}>
            Du concept à la livraison, nous vous accompagnons à chaque étape avec une approche artisanale et exigeante.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <ElectricBorder
                key={s.title}
                className="gs-glass-subtle"
                style={{ padding: 32 }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--accent)' }}>&rarr;</span> {item}
                    </li>
                  ))}
                </ul>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', marginTop: 80, paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: 500, margin: '0 auto 16px' }}>
            Besoin d&apos;un devis ?
          </h2>
          <p className="section-desc" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            <DecryptedText text="contact@studionova.fr" animateOn="view" speed={80} />
          </p>
          <a href="/contact" className="btn-primary">Nous contacter</a>
        </div>
      </section>
    </>
  )
}
