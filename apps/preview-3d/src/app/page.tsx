"use client"

import dynamic from "next/dynamic"

const Antigravity = dynamic(() => import("@premier-js/components").then(m => ({ default: m.Antigravity })), { ssr: false })
const SplitText = dynamic(() => import("@premier-js/components").then(m => ({ default: m.SplitText })), { ssr: false })
const GlassSurface = dynamic(() => import("@premier-js/components").then(m => ({ default: m.GlassSurface })), { ssr: false })
const GlareHover = dynamic(() => import("@premier-js/components").then(m => ({ default: m.GlareHover })), { ssr: false })
const MagicRings = dynamic(() => import("@premier-js/components").then(m => ({ default: m.MagicRings })), { ssr: false })
const DecryptedText = dynamic(() => import("@premier-js/components").then(m => ({ default: m.DecryptedText })), { ssr: false })
const Strands = dynamic(() => import("@premier-js/components").then(m => ({ default: m.Strands })), { ssr: false })

const services = [
  { icon: "✦", title: "3D Experiences", desc: "Immersive web environments powered by WebGL & Three.js that blur the line between digital and physical." },
  { icon: "◆", title: "Creative Development", desc: "Custom front-end engineering with a focus on performance, animation, and pixel-perfect execution." },
  { icon: "◇", title: "Interactive Design", desc: "Thoughtful interfaces that respond to every gesture, making each visit feel alive and personal." },
]

const projects = [
  { title: "Nebula Dashboard", tag: "Data Viz", color: "#7c3aed" },
  { title: "Void E-Commerce", tag: "Frontend", color: "#06b6d4" },
  { title: "Prism Portfolio", tag: "Creative", color: "#a855f7" },
  { title: "Flux Social", tag: "Fullstack", color: "#f59e0b" },
]

export default function AetherPage() {
  return (
    <div className="relative">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="fixed inset-0 z-0">
          <Antigravity count={400} color="#a855f7" particleSize={1.5} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)] z-[1] pointer-events-none" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6">
            <SplitText text="AETHER" stagger={0.06} />
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
            <DecryptedText
              text="Where code meets art. We craft immersive digital experiences."
              speed={80}
              animateOn="view"
              sequential
            />
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:opacity-80 transition-opacity"
          >
            Explore our work
            <span className="text-lg">→</span>
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-[var(--color-text-muted)] text-sm">
          scroll
        </div>
      </section>

      {/* ── Services ── */}
      <section id="work" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] mb-2 font-medium">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            <SplitText text="Services" stagger={0.04} />
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <GlassSurface key={i} borderRadius={16} blur={12} opacity={0.06} className="p-8">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{s.desc}</p>
              </GlassSurface>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creative Showcase ── */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Strands
            colors={["#a855f7", "#06b6d4", "#7c3aed", "#f59e0b"]}
            count={4}
            speed={0.3}
            amplitude={0.8}
            thickness={0.5}
            glow={3}
            taper={2}
            intensity={0.4}
            saturation={0.8}
            scale={1.2}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <MagicRings
            color="#a855f7"
            colorTwo="#06b6d4"
            speed={0.8}
            lineThickness={3}
            ringCount={8}
            baseRadius={0.3}
            radiusStep={0.12}
            scaleRate={0.15}
            opacity={0.9}
            fadeIn={0.5}
            fadeOut={0.5}
            followMouse
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              <DecryptedText
                text="Every pixel has a purpose. Every interaction tells a story."
                speed={60}
                sequential
                animateOn="view"
                useOriginalCharsOnly
              />
            </p>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--color-primary)] mb-2 font-medium">Selected projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            <SplitText text="Work" stagger={0.04} />
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <GlareHover
                key={i}
                width="100%"
                height="280px"
                borderRadius="16px"
                background={p.color}
                glareColor="white"
                glareOpacity={0.3}
              >
                <div className="p-8 flex flex-col justify-end h-full">
                  <span className="text-xs uppercase tracking-wider text-white/60 mb-2">{p.tag}</span>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <DecryptedText
              text="Let's create something extraordinary."
              speed={70}
              sequential
              animateOn="view"
              useOriginalCharsOnly
            />
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-[var(--color-bg)] font-semibold hover:opacity-80 transition-opacity text-lg"
          >
            Start a project
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-[var(--color-border)] py-8 px-6 text-center text-sm text-[var(--color-text-muted)]">
        <p>AETHER Studio — 2026</p>
      </footer>
    </div>
  )
}
