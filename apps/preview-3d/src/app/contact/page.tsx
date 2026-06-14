'use client'

import { useState } from 'react'
import type React from 'react'
import dynamic from 'next/dynamic'
import { DecryptedText } from '@premier-js/components'

const Antigravity = dynamic(
  () => import('@premier-js/components/src/effects/animations/Antigravity/Antigravity').then(m => m.Antigravity),
  { ssr: false }
)

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ height: '40vh', minHeight: 320, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
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
              Contact
            </span>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                maxWidth: 700,
              }}
            >
              <DecryptedText text="Parlons de votre projet" animateOn="view" speed={15} />
            </h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="gs-glass" style={{ padding: 48 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 28,
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    marginBottom: 12,
                  }}
                >
                  Message envoyé&nbsp;!
                </h2>
                <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      background: 'var(--bg-elevated)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      background: 'var(--bg-elevated)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 13, fontWeight: 500, marginBottom: 8 }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      background: 'var(--bg-elevated)',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
