import {
  Navbar,
  HeroWithDemo,
  FeaturesGrid,
  PricingTable,
  FAQ,
  Footer,
  StatsCards,
  DataTable,
  BorderGlow,
  Antigravity
} from "@premier-js/components"
import "./App.css"

function App() {
  const navLinks = [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Chiffres", href: "#stats" },
    { label: "Tarifs", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ]

  const featureItems = [
    {
      icon: "⚡",
      title: "Rendu instantané",
      description: "Des performances accrues grâce au chargement sélectif des bundles et à l'exploitation directe du GPU."
    },
    {
      icon: "🔒",
      title: "Sécurité intégrée",
      description: "Chiffrement automatique des flux de données et contrôle renforcé des permissions utilisateurs."
    },
    {
      icon: "📊",
      title: "Analyses temps réel",
      description: "Des tableaux de bord interactifs pour analyser en continu la latence et les volumes de requêtes."
    }
  ]

  const pricingPlans = [
    {
      name: "Développeur",
      price: "0 FCFA",
      description: "Pour expérimenter et créer des projets personnels.",
      features: ["3 projets max", "Effets visuels de base", "Accès à la communauté"]
    },
    {
      name: "Professionnel",
      price: "15 000 FCFA",
      period: "mois",
      description: "Idéal pour les freelances et les startups en croissance.",
      features: ["Projets illimités", "Tous les effets visuels 3D", "Support prioritaire par e-mail", "Bande passante dédiée"],
      highlighted: true,
      badgeLabel: "Recommandé"
    },
    {
      name: "Entreprise",
      price: "Sur mesure",
      description: "Pour les grandes structures nécessitant des SLAs stricts.",
      features: ["Hébergement dédié", "Sécurité sur-mesure", "SLA garanti 99.99%", "Support téléphonique 24/7"]
    }
  ]

  const faqItems = [
    {
      title: "Qu'est-ce que Premier.js ?",
      content: "Premier.js est un framework d'interfaces utilisateur modernes offrant une collection de composants animés haut de gamme et d'effets visuels 3D interactifs."
    },
    {
      title: "Est-il compatible avec Tailwind CSS v4 ?",
      content: "Oui, tous nos composants sont conçus à partir des classes utilitaires Tailwind et sont compatibles avec la dernière version v4."
    },
    {
      title: "Les composants 3D impactent-ils les performances ?",
      content: "Non, les composants Three.js/WebGL exploitent directement le processeur graphique (GPU) et utilisent l'instanciation de maillage pour maintenir 60 images par seconde."
    }
  ]

  // Mock data for demo table
  const mockTableData = [
    { id: "TX-1002", user: "Jean Dupont", status: "Succès", amount: "15 000 FCFA", date: "2026-06-15" },
    { id: "TX-1003", user: "Marie Curie", status: "Succès", amount: "45 000 FCFA", date: "2026-06-14" },
    { id: "TX-1004", user: "Alain Prost", status: "Échoué", amount: "0 FCFA", date: "2026-06-14" },
    { id: "TX-1005", user: "Sophie Germain", status: "Succès", amount: "15 000 FCFA", date: "2026-06-13" }
  ]

  const mockTableColumns = [
    { key: "id", label: "Transaction", sortable: true },
    { key: "user", label: "Utilisateur", sortable: true },
    { key: "status", label: "Statut", sortable: true },
    { key: "amount", label: "Montant" },
    { key: "date", label: "Date", sortable: true }
  ]

  const demoDashboard = (
    <BorderGlow
      borderRadius={12}
      glowIntensity={0.8}
      animated={true}
      backgroundColor="var(--gs-surface)"
      colors={['var(--gs-primary)', '#f472b6', '#38bdf8']}
    >
      <div className="p-6 space-y-6 bg-transparent rounded-xl">
        <div className="border-b pb-4 mb-4 border-gray-100 dark:border-gray-800">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Console d'administration</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Aperçu de l'activité</h3>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}>
            <DataTable
              title="Transactions Récentes"
              columns={mockTableColumns}
              data={mockTableData}
              searchable={false}
              pageSize={3}
            />
          </div>
        </div>
      </div>
    </BorderGlow>
  )

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
                  background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
                  display: 'inline-block'
                }} />
                <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                  AETHER
                </span>
              </div>
            }
            links={navLinks}
            cta={{ label: "Lancer la démo", href: "#pricing" }}
          />
        </div>
      </div>

      {/* Main content */}
      <main style={{ paddingTop: '5rem' }}>
        {/* Hero */}
        <HeroWithDemo
          title="Gérez vos API avec une fluidité absolue."
          subtitle="AETHER ENTERPRISE SUITE"
          description="Une suite complète de molécules UI pour piloter, analyser et sécuriser vos workflows serveurs depuis un tableau de bord unique."
          ctaLabel="Commencer gratuitement"
          ctaHref="#pricing"
          demoContent={demoDashboard}
          bgContent={
            <Antigravity 
              count={250} 
              magnetRadius={10} 
              ringRadius={15} 
              color="#3b82f6" 
              waveSpeed={0.3} 
              waveAmplitude={1.5} 
              particleShape="sphere" 
              particleSize={1.5} 
              autoAnimate={true}
            />
          }
        />

        {/* Features */}
        <div id="features">
          <FeaturesGrid
            title="Conçu pour la performance"
            subtitle="Des molécules autonomes pensées pour simplifier l'expérience utilisateur et accélérer les temps de chargement."
            items={featureItems}
            columns={3}
          />
        </div>

        {/* Stats */}
        <div id="stats">
          <StatsCards
            title="Des métriques de premier ordre"
            subtitle="Des indicateurs globaux qui témoignent de la robustesse de l'infrastructure d'Aether."
            items={[
              { value: "99.99%", label: "Disponibilité", description: "SLA garanti par nos équipes cloud." },
              { value: "12.4 ms", label: "Latence moyenne", description: "Temps de réponse optimal mondial." },
              { value: "3.2 B", label: "Requêtes / jour", description: "Flux de données gérés en continu." }
            ]}
          />
        </div>

        {/* Pricing */}
        <div id="pricing">
          <PricingTable
            title="Des tarifs clairs et transparents"
            subtitle="Choisissez la formule adaptée à vos besoins de développement et de déploiement."
            plans={pricingPlans}
          />
        </div>

        {/* FAQ */}
        <div id="faq">
          <FAQ
            title="Questions Fréquentes"
            subtitle="Tout ce que vous devez savoir sur le fonctionnement et l'intégration du système."
            items={faqItems}
          />
        </div>
      </main>

      <Footer
        logo="AETHER"
        copyright="Aether Inc. Tous droits réservés."
        bgColor="transparent"
        borderColor="var(--gs-border-subtle)"
        logoColor="var(--gs-text)"
        sectionTitleColor="var(--gs-text)"
        linkColor="var(--gs-text-muted)"
        copyrightColor="var(--gs-text-muted)"
        linkGroups={[
          {
            section: "Produit",
            items: [
              { label: "Fonctionnalités", href: "#features" },
              { label: "Tarifs", href: "#pricing" },
              { label: "FAQ", href: "#faq" }
            ]
          },
          {
            section: "Légal",
            items: [
              { label: "Confidentialité", href: "#" },
              { label: "CGU", href: "#" }
            ]
          }
        ]}
      />
    </div>
  )
}

export default App
