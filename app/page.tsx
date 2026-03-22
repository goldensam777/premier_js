import {
  Navbar,
  Hero,
  Features,
  Stats,
  Testimonials,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "@/components";

export default function WebGenPage() {
  return (
    <main>
      <Navbar
        logo="WebGen"
        links={[
          { label: "Fonctionnalités", href: "#features" },
          { label: "Tarifs", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaLabel="Commencer gratuitement"
        ctaHref="#pricing"
      />

      <Hero
        badgeLabel="Propulsé par Claude AI"
        title="Créez votre site web professionnel en secondes"
        subtitle="Décrivez votre projet, on génère le reste."
        description="WebGen transforme votre idée en un site complet, personnalisable et prêt à publier. Zéro code requis."
        ctaLabel="Créer mon site"
        ctaHref="#pricing"
        secondaryCtaLabel="Voir un exemple"
        secondaryCtaHref="#features"
        align="center"
      />

      <Stats
        items={[
          { value: "10 000+", label: "Sites générés" },
          { value: "< 30s", label: "Temps de génération" },
          { value: "99.9%", label: "Disponibilité" },
          { value: "4.9/5", label: "Satisfaction" },
        ]}
      />

      <Features
        id="features"
        title="Tout ce dont vous avez besoin"
        subtitle="Des blocs prêts à l'emploi, des designs professionnels, et une IA qui assemble tout pour vous."
        columns={3}
        items={[
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: "Génération instantanée",
            description: "Décrivez votre site en langage naturel. L'IA construit la structure complète en moins de 30 secondes.",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            ),
            title: "Designs professionnels",
            description: "Choisissez parmi plusieurs styles visuels : Minimal, 3D, Glassmorphism, Bold. Chaque design est optimisé.",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            ),
            title: "100% personnalisable",
            description: "Chaque couleur, texte, section est modifiable. Exportez en code propre ou publiez directement.",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            ),
            title: "Responsive par défaut",
            description: "Tous les sites générés sont parfaitement adaptés mobile, tablette et desktop sans configuration.",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Optimisé SEO",
            description: "Structure HTML sémantique, balises meta, Open Graph générés automatiquement pour chaque page.",
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            ),
            title: "Export en un clic",
            description: "Récupérez votre code Next.js propre, prêt à déployer sur Vercel, Netlify ou votre propre hébergement.",
          },
        ]}
      />

      <Testimonials
        title="Ils ont créé leur site avec WebGen"
        subtitle="Des entrepreneurs, freelances et startups qui ont gagné des heures de développement."
        columns={3}
        bgColor="bg-gray-50"
        items={[
          {
            quote: "En 2 minutes j'avais un site complet pour mon agence. Je n'aurais pas pu faire mieux en 2 jours.",
            name: "Amara Diallo",
            role: "Fondatrice, Studio Créatif",
            initials: "AD",
          },
          {
            quote: "Le design glassmorphism généré pour ma landing page a impressionné tous mes clients. Bluffant.",
            name: "Koffi Mensah",
            role: "Développeur Freelance",
            initials: "KM",
          },
          {
            quote: "J'ai lancé ma boutique en ligne en une soirée. Le générateur a tout compris du premier coup.",
            name: "Sophie Traoré",
            role: "E-commerçante",
            initials: "ST",
          },
        ]}
      />

      <Pricing
        id="pricing"
        title="Un tarif simple et transparent"
        subtitle="Pas de surprise. Payez uniquement pour ce que vous utilisez."
        bgColor="bg-white"
        plans={[
          {
            name: "Starter",
            price: 0,
            period: "mois",
            description: "Pour tester et découvrir WebGen.",
            features: [
              "3 sites générés / mois",
              "Designs Minimal et Bold",
              "Export code inclus",
              "Support communauté",
            ],
            ctaLabel: "Commencer gratuitement",
            ctaHref: "#",
          },
          {
            name: "Pro",
            price: 29,
            period: "mois",
            description: "Pour les freelances et petites entreprises.",
            features: [
              "Sites illimités",
              "Tous les designs (3D, Glass...)",
              "Domaine personnalisé",
              "Support prioritaire",
              "Accès API",
            ],
            ctaLabel: "Choisir Pro",
            ctaHref: "#",
            highlighted: true,
            badgeLabel: "Populaire",
          },
          {
            name: "Agence",
            price: 99,
            period: "mois",
            description: "Pour les agences et équipes.",
            features: [
              "Tout le plan Pro",
              "5 membres d'équipe",
              "White-label",
              "Intégration Slack",
              "SLA garanti",
            ],
            ctaLabel: "Contacter les ventes",
            ctaHref: "#",
          },
        ]}
      />

      <FAQ
        id="faq"
        title="Questions fréquentes"
        subtitle="Tout ce que vous voulez savoir avant de vous lancer."
        bgColor="bg-gray-50"
        items={[
          {
            title: "Comment fonctionne la génération de site ?",
            content: "Vous décrivez votre projet en langage naturel (ex: 'site pour mon agence de design, style moderne, avec hero, services et contact'). Claude AI analyse votre description et génère un JSON structuré que notre moteur transforme en site complet.",
          },
          {
            title: "Puis-je modifier le site après génération ?",
            content: "Oui, entièrement. Chaque section, couleur, texte et image est modifiable via notre éditeur visuel ou directement dans le code exporté.",
          },
          {
            title: "Quels frameworks sont supportés pour l'export ?",
            content: "Actuellement Next.js avec Tailwind CSS. React pur et Vue.js arrivent prochainement.",
          },
          {
            title: "Mes données sont-elles sécurisées ?",
            content: "Vos projets sont stockés de manière chiffrée. Nous ne partageons jamais vos données avec des tiers. Vous pouvez supprimer votre compte et toutes vos données à tout moment.",
          },
          {
            title: "Y a-t-il une limite de générations sur le plan gratuit ?",
            content: "Le plan gratuit inclut 3 générations par mois. Chaque génération peut être régénérée autant de fois que vous le souhaitez sans consommer de quota supplémentaire.",
          },
        ]}
      />

      <CTA
        title="Prêt à créer votre site en secondes ?"
        description="Rejoignez des milliers de créateurs qui ont déjà lancé leur présence en ligne avec WebGen."
        ctaLabel="Créer mon site maintenant"
        ctaHref="#pricing"
        secondaryCtaLabel="Voir la démo"
        secondaryCtaHref="#features"
      />

      <Footer
        logo="WebGen"
        description="Générez des sites web professionnels en secondes grâce à l'intelligence artificielle."
        copyright="© 2026 WebGen. Tous droits réservés."
        linkGroups={[
          {
            section: "Produit",
            items: [
              { label: "Fonctionnalités", href: "#features" },
              { label: "Tarifs", href: "#pricing" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            section: "Ressources",
            items: [
              { label: "Documentation", href: "#" },
              { label: "API", href: "#" },
              { label: "Exemples", href: "#" },
            ],
          },
          {
            section: "Légal",
            items: [
              { label: "CGU", href: "#" },
              { label: "Confidentialité", href: "#" },
              { label: "Cookies", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
