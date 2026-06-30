import {
  Navbar,
  Hero,
  StatsCards,
  ProjectsGrid,
  Timeline,
  Testimonials,
  ContactForm,
  Footer
} from "@premier-js/components"
import "./App.css"

function App() {
  const navLinks = [
    { label: "Projets", href: "#projects" },
    { label: "Parcours", href: "#timeline" },
    { label: "Chiffres", href: "#stats" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ]

  const projects = [
    {
      title: "Vortex 3D Engine",
      description: "Un moteur WebGL haute performance avec gestion dynamique des ombres et rendu par lancer de rayons en temps réel.",
      tags: ["TypeScript", "WebGL", "GLSL"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      href: "#"
    },
    {
      title: "Synthetix Finance",
      description: "Une plateforme d'échange décentralisée avec des contrats intelligents hautement optimisés en Solidity.",
      tags: ["Solidity", "React", "Ethers.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80",
      href: "#"
    },
    {
      title: "Aether UI Framework",
      description: "Un framework de composants UI animés basé sur des shaders WebGL pour des interfaces utilisateur ultra-fluides.",
      tags: ["React", "Three.js", "GSAP"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      href: "#"
    }
  ]

  const timelineEvents = [
    {
      date: "2024 - Présent",
      title: "Lead UI Architect — TechCorp",
      description: "Conception et implémentation du design system global basé sur les technologies GPU et les shaders de rendu."
    },
    {
      date: "2022 - 2024",
      title: "Développeur FullStack Senior — Creative Agency",
      description: "Développement de sites web immersifs et d'expériences 3D interactives pour des marques internationales."
    },
    {
      date: "2020 - 2022",
      title: "Ingénieur R&D Frontend — Labs Inc",
      description: "Recherche sur l'optimisation des performances de rendu des navigateurs web et l'intégration de WebAssembly."
    }
  ]

  const testimonialItems = [
    {
      name: "Alice Dupont",
      role: "Directrice Technique — FinTech Group",
      quote: "Le travail fourni sur notre plateforme d'administration est exceptionnel. La fluidité des animations et le souci du détail font toute la différence.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Thomas Martin",
      role: "Fondateur — CreativeStudio",
      quote: "Un ingénieur hors pair capable de concrétiser les designs les plus audacieux avec des performances optimales. Je recommande vivement.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
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
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  display: 'inline-block'
                }} />
                <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                  PORTFOLIO
                </span>
              </div>
            }
            links={navLinks}
            cta={{ label: "Me contacter", href: "#contact" }}
          />
        </div>
      </div>

      {/* Main content */}
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero */}
        <Hero
          title="Créateur d'expériences web interactives hors du commun."
          subtitle="INGÉNIEUR INTERFACES HAUT DE GAMME"
          description="Je conçois des architectures frontend performantes et des interfaces immersives en combinant design system robuste, WebGL et animations fluides."
          ctaLabel="Explorer mes projets"
          ctaHref="#projects"
          secondaryCtaLabel="Parcours"
          secondaryCtaHref="#timeline"
          align="center"
          bgColor="transparent"
          titleColor="var(--gs-text)"
          subtitleColor="var(--gs-primary)"
          descriptionColor="var(--gs-text-muted)"
        />

        {/* Projects Grid */}
        <div id="projects">
          <ProjectsGrid
            title="Projets Sélectionnés"
            subtitle="Une vitrine de mes réalisations techniques les plus poussées en matière de design, 3D et contrats intelligents."
            projects={projects}
            bgColor="transparent"
            titleColor="var(--gs-text)"
            subtitleColor="var(--gs-text-muted)"
          />
        </div>

        {/* Timeline */}
        <div id="timeline">
          <Timeline
            title="Mon Parcours Professionnel"
            subtitle="Une vue chronologique de mes contributions et de mes responsabilités techniques au fil des ans."
            events={timelineEvents}
            variant="alternating"
            bgColor="transparent"
            titleColor="text-[var(--gs-text)]"
            lineColor="bg-[var(--gs-border-subtle)]"
            dotColor="bg-[var(--gs-primary)]"
            dateColor="text-[var(--gs-primary)]"
          />
        </div>

        {/* Stats Cards */}
        <div id="stats">
          <StatsCards
            title="L'impact en chiffres"
            subtitle="Des indicateurs clés issus des projets que j'ai menés et des applications que j'ai conçues."
            items={[
              { value: "+50%", label: "Taux de conversion", description: "Grâce à l'amélioration de l'UX." },
              { value: "<100ms", label: "Temps d'interaction", description: "Rendu optimal garanti." },
              { value: "5M+", label: "Utilisateurs actifs", description: "Sur les applications déployées." }
            ]}
          />
        </div>

        {/* Testimonials */}
        <div id="testimonials">
          <Testimonials
            title="Ce qu'ils disent de mon travail"
            subtitle="Retours d'expérience et recommandations de directeurs techniques et de fondateurs d'entreprises."
            items={testimonialItems}
          />
        </div>

        {/* Contact Form */}
        <div id="contact">
          <ContactForm
            title="Démarrons un projet ensemble"
            subtitle="N'hésitez pas à me contacter pour discuter de vos besoins de développement haut de gamme."
            ctaLabel="Envoyer le message"
            bgColor="transparent"
            titleColor="var(--gs-text)"
            subtitleColor="var(--gs-text-muted)"
          />
        </div>
      </main>

      <Footer
        logo="PORTFOLIO"
        copyright="&copy; 2026 Portfolio. Tous droits réservés."
        bgColor="transparent"
        borderColor="var(--gs-border-subtle)"
        logoColor="var(--gs-text)"
        sectionTitleColor="var(--gs-text)"
        linkColor="var(--gs-text-muted)"
        copyrightColor="var(--gs-text-muted)"
        linkGroups={[
          {
            section: "Sections",
            items: [
              { label: "Projets", href: "#projects" },
              { label: "Parcours", href: "#timeline" },
              { label: "Contact", href: "#contact" }
            ]
          },
          {
            section: "Socials",
            items: [
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "https://github.com/goldensam777/premier_js" }
            ]
          }
        ]}
      />
    </div>
  )
}

export default App
