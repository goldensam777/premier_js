import { useState } from 'react'
import { DecryptedText } from '@premier-js/components'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container">
          <p className="section-label">Contact</p>
          <h1 className="section-title" style={{ maxWidth: 500, marginBottom: 16 }}>
            Travaillons ensemble
          </h1>
          <p className="section-desc" style={{ marginBottom: 48 }}>
            Une idée, un projet, une question ? Remplissez le formulaire ci-dessous et nous vous répondrons sous 48h.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48, alignItems: 'start' }}>
            <div className="gs-glass-subtle" style={{ padding: 40 }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 40 }}>
                  <span style={{ fontSize: 48, display: 'block', marginBottom: 16 }}>&#10003;</span>
                  <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}>Message envoyé !</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                      Nom
                    </label>
                    <input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text)',
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text)',
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 6, color: 'var(--text-muted)' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 8,
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--text)',
                        fontSize: 14,
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Envoyer
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Email
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                  <DecryptedText text="contact@studionova.fr" animateOn="view" speed={80} />
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Téléphone
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>+33 1 23 45 67 89</p>
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Adresse
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                  128 Rue de Rivoli<br />
                  75001 Paris, France
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Suivez-nous
                </h3>
                <div style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontSize: 14, color: 'var(--text-muted)', cursor: 'pointer' }}>Instagram</span>
                  <span style={{ fontSize: 14, color: 'var(--text-muted)', cursor: 'pointer' }}>LinkedIn</span>
                  <span style={{ fontSize: 14, color: 'var(--text-muted)', cursor: 'pointer' }}>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
