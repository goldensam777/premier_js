import {
  Navbar,
  AbstractHero,
  PaperViewer,
  FormulaBlock,
  StateSpaceViewer,
  Footer
} from "@premier-js/components"
import "./App.css"

function App() {
  const navLinks = [
    { label: "Publications", href: "#papers" },
    { label: "Modélisations", href: "#models" },
    { label: "Visualisations", href: "#visuals" },
    { label: "Formules", href: "#formulas" }
  ]

  const paper = {
    title: "Quantum State Reconstitution via Dynamic GPU-Accelerated Wave Function Collapse",
    authors: ["Samuel Yevi", "Elena Rostova", "Marcus Vance"],
    year: 2026,
    journal: "Journal of Computational Physics & Quantum Engineering",
    abstract: "We introduce a novel method for simulating wave function collapse in multi-body quantum systems using parallel GPU execution. By mapping state space transition vectors directly to local graphic memory registers, we achieve a 14x reduction in computation latency compared to traditional MPI cluster solutions. This framework enables the interactive exploration of highly complex macroscopic quantum decoherence fields.",
    doi: "10.1016/j.jcp.2026.10425",
    pdfUrl: "#"
  }

  const spacePoints = [
    { x: 10, y: 15, label: "T0: Initial Ground State", state: "initial" as const },
    { x: 30, y: 45, label: "T1: High Energy Transition", state: "transition" as const },
    { x: 60, y: 35, label: "T2: Quantum Interference Mode", state: "transition" as const },
    { x: 80, y: 90, label: "T3: Stable Entropic Reconstitution", state: "final" as const }
  ]

  return (
    <div className="app-container">
      {/* Navbar floating */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', top: 0, left: 0, zIndex: 50, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', width: '100%' }}>
          <Navbar
            logo={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '5px', 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  display: 'inline-block'
                }} />
                <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                  QUANTUM_LAB
                </span>
              </div>
            }
            links={navLinks}
            cta={{ label: "Télécharger les données", href: "#" }}
          />
        </div>
      </div>

      {/* Main content */}
      <main style={{ paddingTop: '0rem' }}>
        {/* Abstract Hero */}
        <AbstractHero
          title="Physique Computationnelle & Modélisation Quantique"
          subtitle="AETHER RESEARCH LABS"
          gradient="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900"
          pattern="grid"
          patternColor="rgba(255,255,255,0.05)"
          minHeight="55vh"
        />

        {/* Outer content container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* Publications Section */}
          <section id="papers" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3b82f6' }}>Dernière Publication</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gs-text)', marginTop: '0.25rem' }}>Recherches Récentes</h2>
            </div>
            <PaperViewer {...paper} />
          </section>

          {/* Formulas Section */}
          <section id="formulas" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3b82f6' }}>Formulation Mathématique</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gs-text)', marginTop: '0.25rem' }}>Équation d'Évolution d'État</h2>
            </div>
            <p style={{ color: 'var(--gs-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              La simulation repose sur la résolution numérique directe de l'équation de Schrödinger dépendante du temps, projetée sur un réseau de spins excités avec des perturbations de bruit quantique thermique localisées :
            </p>
            <FormulaBlock
              latex="i \hbar \frac{\partial}{\partial t} |\Psi(t)\rangle = \hat{H}_0 |\Psi(t)\rangle + \sum_{k} g_k \cos(\omega_k t) \hat{\sigma}_{x,k} |\Psi(t)\rangle"
              bgColor="var(--gs-surface)"
              textColor="var(--gs-text)"
            />
          </section>

          {/* Modeling / State Space Section */}
          <section id="models" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3b82f6' }}>Simulation Dynamique</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--gs-text)', marginTop: '0.25rem' }}>Espace d'État Relativiste</h2>
            </div>
            <p style={{ color: 'var(--gs-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Représentation discrète des vecteurs de transition observés lors de la phase de refroidissement cryogénique. Les coordonnées indiquent le moment cinétique réduit et la densité de flux magnétique relative :
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
              <StateSpaceViewer
                points={spacePoints}
                width={850}
                height={450}
                bgColor="var(--gs-surface)"
                gridColor="var(--gs-border-subtle)"
                pointColors={{
                  initial: "#10b981",
                  transition: "#3b82f6",
                  final: "#8b5cf6"
                }}
                labelColor="var(--gs-text-muted)"
              />
            </div>
          </section>

        </div>
      </main>

      <Footer
        logo="QUANTUM_LAB"
        copyright="&copy; 2026 Aether Research. Tous droits réservés."
        bgColor="transparent"
        borderColor="var(--gs-border-subtle)"
        logoColor="var(--gs-text)"
        sectionTitleColor="var(--gs-text)"
        linkColor="var(--gs-text-muted)"
        copyrightColor="var(--gs-text-muted)"
        linkGroups={[
          {
            section: "Lab",
            items: [
              { label: "Recherche", href: "#papers" },
              { label: "Simulation", href: "#models" },
              { label: "Publications", href: "#papers" }
            ]
          },
          {
            section: "Ressources",
            items: [
              { label: "arXiv", href: "#" },
              { label: "GitHub", href: "https://github.com/goldensam777/premier_js" }
            ]
          }
        ]}
      />
    </div>
  )
}

export default App
