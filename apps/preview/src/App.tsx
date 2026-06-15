import { useState, useEffect } from 'react'
import {
  Navbar,
  PillNav,
  GooeyNav,
  Antigravity,
  LiquidEther,
  DotField,
  MetaBalls,
  DecryptedText,
  GlassSurface,
  // R3F Components
  Canvas3D,
  FloatingObject,
  ParticleField,
  BackgroundScene,
  OrbitCamera
} from "@premier-js/components"
import "./App.css"

function App() {
  const [page, setPage] = useState<'classic' | 'pill' | 'gooey' | 'three'>('classic')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#pill') {
        setPage('pill')
      } else if (hash === '#gooey') {
        setPage('gooey')
      } else if (hash === '#three') {
        setPage('three')
      } else {
        setPage('classic')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navItems = [
    { label: "Classic Pill (Navbar)", href: "#classic" },
    { label: "Sliding Tab (PillNav)", href: "#pill" },
    { label: "Liquid Flow (GooeyNav)", href: "#gooey" },
    { label: "Three.js 3D (R3F)", href: "#three" }
  ]

  const renderPageContent = () => {
    switch (page) {
      case 'classic':
        return (
          <div className="page-classic">
            {/* Header / Nav */}
            <div className="navbar-wrapper">
              <Navbar
                logo={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '6px', 
                      background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                      display: 'inline-block'
                    }} />
                    <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                      Premier.js
                    </span>
                  </div>
                }
                links={navItems}
                cta={{ label: "Documentation", href: "#classic" }}
              />
            </div>

            {/* Hero Section */}
            <section className="hero-section">
              <div className="canvas-bg-wrapper">
                <LiquidEther
                  colors={['#a855f7', '#3b82f6', '#1e1b4b']}
                  mouseForce={25}
                  cursorSize={80}
                  autoDemo={true}
                />
              </div>
              
              <div className="hero-content">
                <span className="btn btn-outline" style={{ pointerEvents: 'none', marginBottom: '1.5rem', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                  Axe A : Rendu Hybride &bull; Axe B : Glassmorphism
                </span>
                <h1 className="hero-title">
                  <DecryptedText
                    text="EXPERIENCE THE CLASSIC FLOATING PILL"
                    animateOn="view"
                    className="text-purple-accent"
                  />
                </h1>
                <p className="hero-subtitle">
                  La <strong>Navbar</strong> standard de Premier.js offre une barre de navigation flottante, moderne et responsive, conçue avec un flou d&apos;arrière-plan de type verre acrylique (glassmorphism).
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <a href="#pill" className="btn btn-primary" style={{ background: '#a855f7', color: 'white' }}>
                    Voir le type suivant (PillNav) &rarr;
                  </a>
                  <a href="https://github.com/goldensam777/premier_js" className="btn btn-outline">
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Info Section */}
            <section className="info-section">
              <div className="container">
                <div className="info-grid">
                  <div className="info-block">
                    <h3>Pill flottant moderne</h3>
                    <p>
                      Flotte discrètement en haut de l&apos;écran, optimisant l&apos;espace de lecture tout en restant immédiatement accessible.
                    </p>
                  </div>
                  <div className="info-block">
                    <h3>Responsive natif</h3>
                    <p>
                      Se contracte automatiquement en un bouton de menu compact (hamburger) avec ouverture d&apos;overlay fluide sur mobile.
                    </p>
                  </div>
                  <div className="info-block">
                    <h3>Personnalisable</h3>
                    <p>
                      Intègre des slots dédiés pour un logo personnalisé, une liste de liens réactifs et un bouton d&apos;appel à l&apos;action.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )

      case 'pill':
        return (
          <div className="page-pill">
            {/* Header / Nav */}
            <div className="navbar-wrapper" style={{ padding: '2rem 0' }}>
              <PillNav items={navItems} defaultActive={1} />
            </div>

            {/* Hero Section */}
            <section className="hero-section">
              <div className="canvas-bg-wrapper">
                <DotField
                  dotRadius={2.5}
                  dotSpacing={16}
                  cursorRadius={300}
                  cursorForce={0.08}
                  bulgeOnly={true}
                  gradientFrom="rgba(59, 130, 246, 0.4)"
                  gradientTo="rgba(147, 197, 253, 0.1)"
                  glowColor="rgba(59, 130, 246, 0.15)"
                />
              </div>

              <div className="hero-content" style={{ marginTop: '4rem' }}>
                <span className="btn btn-outline" style={{ pointerEvents: 'none', marginBottom: '1.5rem', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                  Axe D : Animation Subtle &bull; Framer Motion
                </span>
                <h1 className="hero-title">
                  <DecryptedText
                    text="SLIDING TAB INTERACTIVE NAVIGATION"
                    animateOn="view"
                  />
                </h1>
                <p className="hero-subtitle">
                  Le composant <strong>PillNav</strong> est idéal pour les interfaces d&apos;administration, les configurations ou les sous-menus fluides grâce à son indicateur glissant animé par ressort.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <a href="#gooey" className="btn btn-primary" style={{ background: '#3b82f6', color: 'white' }}>
                    Voir le type suivant (GooeyNav) &rarr;
                  </a>
                  <a href="#classic" className="btn btn-outline">
                    Retour au début
                  </a>
                </div>

                {/* Dashboard mock inside PillNav show */}
                <div className="card-grid">
                  <GlassSurface width="100%" height="auto" borderRadius={16} backgroundOpacity={0.05} blur={10}>
                    <div style={{ width: '100%', padding: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--gs-text-muted)', fontWeight: 500 }}>REQUÊTES API</span>
                      <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 0.2rem 0', color: 'var(--gs-text)', fontWeight: 700 }}>452,192</h2>
                      <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&uarr; +12.3% cette semaine</span>
                    </div>
                  </GlassSurface>

                  <GlassSurface width="100%" height="auto" borderRadius={16} backgroundOpacity={0.05} blur={10}>
                    <div style={{ width: '100%', padding: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--gs-text-muted)', fontWeight: 500 }}>LATENCE MOYENNE</span>
                      <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 0.2rem 0', color: 'var(--gs-text)', fontWeight: 700 }}>14.2 ms</h2>
                      <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>&darr; -4.1% d&apos;optimisation</span>
                    </div>
                  </GlassSurface>

                  <GlassSurface width="100%" height="auto" borderRadius={16} backgroundOpacity={0.05} blur={10}>
                    <div style={{ width: '100%', padding: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--gs-text-muted)', fontWeight: 500 }}>CPU LOAD</span>
                      <h2 style={{ fontSize: '2rem', margin: '0.5rem 0 0.2rem 0', color: 'var(--gs-text)', fontWeight: 700 }}>24.8 %</h2>
                      <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600 }}>&uarr; +2.5% charge pic</span>
                    </div>
                  </GlassSurface>
                </div>
              </div>
            </section>
          </div>
        )

      case 'gooey':
        return (
          <div className="page-gooey">
            {/* Header / Nav */}
            <div className="navbar-wrapper" style={{ padding: '2.5rem 0' }}>
              <GooeyNav items={navItems} initialActiveIndex={2} />
            </div>

            {/* Hero Section */}
            <section className="hero-section">
              <div className="canvas-bg-wrapper">
                <MetaBalls
                  color="#16a34a"
                  cursorBallColor="#22c55e"
                  speed={0.4}
                  ballCount={16}
                  clumpFactor={1.2}
                  cursorBallSize={4}
                  enableTransparency={true}
                />
              </div>

              <div className="hero-content">
                <span className="btn btn-outline" style={{ pointerEvents: 'none', marginBottom: '1.5rem', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                  Axe A : Rendu WebGL (OGL) &bull; SVG Gooey Filter
                </span>
                <h1 className="hero-title">
                  <DecryptedText
                    text="ORGANIC LIQUID FLUID EFFECTS"
                    animateOn="view"
                  />
                </h1>
                <p className="hero-subtitle">
                  Le composant <strong>GooeyNav</strong> intègre un filtre de fusion de type liquide organique. Lors du clic, l&apos;indicateur se sépare sous forme de bulles pour fusionner au nouvel emplacement.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <a href="#classic" className="btn btn-primary" style={{ background: '#16a34a', color: 'white' }}>
                    Retourner à la page d&apos;accueil &larr;
                  </a>
                  <a href="https://github.com/goldensam777/premier_js" className="btn btn-outline">
                    Code Source
                  </a>
                </div>
              </div>
            </section>
          </div>
        )
      case 'three':
        return (
          <div className="page-three" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header / Nav */}
            <div className="navbar-wrapper">
              <Navbar
                logo={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '6px', 
                      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                      display: 'inline-block'
                    }} />
                    <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                      R3F_3D
                    </span>
                  </div>
                }
                links={navItems}
                cta={{ label: "Retour Accueil", href: "#classic" }}
              />
            </div>

            {/* Hero 3D section */}
            <section className="hero-section" style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
              <div className="canvas-bg-wrapper">
                <BackgroundScene overlay={false}>
                  <color attach="background" args={['#0a0915']} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} />
                  <directionalLight position={[-10, -10, -10]} intensity={0.5} />
                  
                  {/* Floating Object 1: Torus */}
                  <FloatingObject speed={0.8} amplitude={0.5}>
                    <mesh position={[-2, 0, 0]}>
                      <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
                      <meshStandardMaterial color="#ec4899" roughness={0.1} metalness={0.8} />
                    </mesh>
                  </FloatingObject>

                  {/* Floating Object 2: Octahedron */}
                  <FloatingObject speed={1.2} amplitude={0.3}>
                    <mesh position={[2, 1, -1]}>
                      <octahedronGeometry args={[0.8]} />
                      <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.6} />
                    </mesh>
                  </FloatingObject>

                  {/* Floating Object 3: Sphere in center */}
                  <FloatingObject speed={0.5} amplitude={0.2}>
                    <mesh position={[0, -0.5, 1]}>
                      <sphereGeometry args={[0.5, 32, 32]} />
                      <meshStandardMaterial color="#10b981" roughness={0.3} metalness={0.9} />
                    </mesh>
                  </FloatingObject>

                  <OrbitCamera autoRotate={true} autoRotateSpeed={0.5} />
                </BackgroundScene>
              </div>

              {/* Foreground content */}
              <div className="hero-content" style={{ zIndex: 10, pointerEvents: 'none' }}>
                <span className="btn btn-outline" style={{ pointerEvents: 'none', marginBottom: '1.5rem', fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
                  Axe C : Three.js &bull; React Three Fiber
                </span>
                <h1 className="hero-title">
                  <DecryptedText
                    text="INTERACTIVE R3F 3D CANVAS"
                    animateOn="view"
                  />
                </h1>
                <p className="hero-subtitle">
                  Cette démonstration exploite <strong>BackgroundScene</strong>, <strong>FloatingObject</strong> et <strong>OrbitCamera</strong> pour rendre des maillages 3D interactifs animés en temps réel avec accélération matérielle GPU.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', pointerEvents: 'auto' }}>
                  <a href="#classic" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', color: 'white' }}>
                    Retourner au début &larr;
                  </a>
                  <a href="https://github.com/pmndrs/react-three-fiber" className="btn btn-outline" target="_blank" rel="noreferrer">
                    R3F Docs
                  </a>
                </div>
              </div>
            </section>
          </div>
        )
    }
  }

  return (
    <main>
      {renderPageContent()}
    </main>
  )
}

export default App
