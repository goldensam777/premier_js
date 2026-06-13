"use client"

import { Breadcrumbs, Footer, Hero, PricingTable, Section, Container, StatsCards, FAQ, ContactForm, Newsletter, Features, Team, Testimonials, CTABanner } from "@premier-js/components"

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}

export default function MoleculesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <a href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block px-6 pt-6">← Retour</a>
      <h1 className="text-3xl font-bold text-gray-900 px-6 mb-10">Molécules</h1>

      <div className="space-y-12">
        <DemoSection title="Navigation — Breadcrumbs">
          <div className="p-6">
            <Breadcrumbs items={[
              { label: "Accueil", href: "/" },
              { label: "Documentation", href: "/docs" },
              { label: "Composants" },
            ]} />
          </div>
        </DemoSection>

        <DemoSection title="Hero — Hero">
          <Hero
            title="Bienvenue sur Premier.js"
            subtitle="Construisez des sites modernes"
            description="Un framework JS pour générer toutes sortes de sites web."
            ctaLabel="Commencer"
          />
        </DemoSection>

        <DemoSection title="Conversion — PricingTable">
          <PricingTable
            plans={[
              { name: "Starter", price: 0, features: ["1 projet", "10 pages"] },
              { name: "Pro", price: 29, features: ["Projets illimités", "Pages illimitées", "Support prioritaire"], highlighted: true },
              { name: "Enterprise", price: 99, features: ["Tout inclus", "SLA", "Dédié"] },
            ]}
          />
        </DemoSection>

        <DemoSection title="Conversion — CTABanner">
          <CTABanner
            title="Prêt à démarrer ?"
            description="Essayez Premier.js gratuitement."
            ctaLabel="Commencer"
          />
        </DemoSection>

        <DemoSection title="Preuve sociale — Testimonials">
          <Testimonials
            items={[
              { name: "Jean D.", role: "Développeur", quote: "Excellent framework !" },
              { name: "Marie C.", role: "Designer", quote: "Très intuitif." },
            ]}
          />
        </DemoSection>

        <DemoSection title="Preuve sociale — StatsCards">
          <StatsCards
            items={[
              { label: "Téléchargements", value: "10k+" },
              { label: "Stars", value: "500+" },
              { label: "Contributors", value: "25" },
            ]}
          />
        </DemoSection>

        <DemoSection title="Conversion — FAQ">
          <FAQ
            items={[
              { title: "Comment installer ?", content: "npm install @premier-js/core" },
              { title: "Est-ce gratuit ?", content: "Oui, open source." },
            ]}
          />
        </DemoSection>

        <DemoSection title="Conversion — Newsletter">
          <Newsletter />
        </DemoSection>

        <DemoSection title="Conversion — ContactForm">
          <ContactForm />
        </DemoSection>

        <DemoSection title="Contenu — Features">
          <Features
            items={[
              { title: "Rapide", description: "Performances optimales" },
              { title: "Modulaire", description: "Composants réutilisables" },
              { title: "Flexible", description: "Personnalisable" },
            ]}
          />
        </DemoSection>

        <DemoSection title="Social — Team">
          <Team
            members={[
              { name: "Samuel Y.", role: "Fondateur" },
              { name: "Alice", role: "Designer" },
            ]}
          />
        </DemoSection>

        <DemoSection title="Conversion — Footer">
          <Footer
            logo="Premier.js"
            linkGroups={[
              { section: "Produit", items: [{ label: "Fonctionnalités", href: "#" }, { label: "Tarifs", href: "#" }] },
              { section: "Société", items: [{ label: "À propos", href: "#" }, { label: "Blog", href: "#" }] },
            ]}
          />
        </DemoSection>

        <DemoSection title="Layout — Section + Container">
          <Container>
            <Section bgColor="bg-blue-50">
              <p className="text-center text-gray-700 py-8">Section avec Container</p>
            </Section>
          </Container>
        </DemoSection>
      </div>
    </main>
  )
}
