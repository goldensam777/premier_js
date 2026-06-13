"use client"

import dynamic from "next/dynamic"

const ParticleField = dynamic(() => import("@premier-js/components").then((m) => ({ default: m.ParticleField })), { ssr: false })
const SplitText = dynamic(() => import("@premier-js/components").then((m) => ({ default: m.SplitText })), { ssr: false })
const SequenceTimeline = dynamic(() => import("@premier-js/components").then((m) => ({ default: m.SequenceTimeline })), { ssr: false })

const standalone = [
  { name: "ParticleField", comp: ParticleField, props: {} as any },
  { name: "SplitText", comp: SplitText, props: { text: "Premier.js" } },
  { name: "SequenceTimeline", comp: SequenceTimeline, props: {} as any },
]

const wrappers = [
  "Canvas3D", "FloatingObject", "SceneViewer", "OrbitCamera",
  "BackgroundScene", "ScrollParallax3D",
  "PageTransition", "ScrollReveal", "ParallaxSection",
  "MagneticButton", "FadeIn", "HoverScale",
  "SmoothScroll",
]

export default function ThreePreview() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">3D & Animations</h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            {standalone.length + wrappers.length} composants
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border)]">
            Autonomes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standalone.map(({ name, comp: Comp, props }) => (
              <div
                key={name}
                className="bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-96 relative flex items-center justify-center overflow-hidden bg-black/5">
                  <Comp {...props} />
                </div>
                <div className="p-4 border-t border-[var(--color-border)]">
                  <h3 className="font-semibold text-sm">{name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border)]">
            Wrappers (nécessitent des enfants)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wrappers.map((name) => (
              <div
                key={name}
                className="bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden"
              >
                <div className="h-48 relative flex items-center justify-center bg-black/5 p-6">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-[var(--color-text-muted)]">{name}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">
                      Composant wrapper — fournir des enfants
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-[var(--color-border)]">
                  <h3 className="font-semibold text-sm">{name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
