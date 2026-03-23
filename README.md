# Premier.js

Framework de composants React/Next.js écrit à la main par Samuel YEVI.
Utilisé comme base de **[Webgen](../webgen)**, la plateforme SaaS de génération de sites IA.

---

## Composants UI (23)

```
Button      Input       Textarea    Select      Card
Badge       Tag         Avatar      Divider     Toggle
Alert       Spinner     Tooltip     Accordion   ProgressBar
Modal       Dropdown    Toast       Tabs        Stepper
ColorPicker Sidebar     (index.ts → exports centralisés)
```

## Sections (13)

```
Navbar   Hero     Features   Stats      Testimonials
Pricing  FAQ      CTA        Contact    Footer
AuthForm Dashboard Team      BillingSection
```

## Système de thème

Tous les composants utilisent des **CSS Custom Properties** pour les couleurs.
Définir ces variables sur le wrapper racine suffit à thématiser toute l'interface :

```css
:root {
  --color-primary:    #2563eb;
  --color-secondary:  #7c3aed;
  --color-background: #f9fafb;
  --color-surface:    #ffffff;
  --color-text:       #111827;
  --color-text-muted: #6b7280;
  --color-border:     #e5e7eb;
}
```

Les composants lisent ces variables directement via `style` props :
```tsx
// Card.tsx — exemple
bgColor = "var(--color-surface)"
// → style={{ backgroundColor: bgColor }}
```

Avantage : mise à jour en temps réel sans recompilation Tailwind.
Tailwind reste utilisé pour le layout, l'espacement et la typographie.

## Notifications globales (Toast)

```tsx
import { toast } from "@/components/ui/Toast";

toast.success("Site publié !");
toast.error("Erreur de connexion");
toast.warning("Données non sauvegardées");
toast.info("Nouvelle version disponible");
```

Ajouter `<ToastContainer />` dans le layout racine.

## Usage

```tsx
// Importer depuis l'index centralisé
import { Button, Card, Navbar, Hero, Pricing } from "@/components";

// Sections prêtes à l'emploi
<Hero
  title="Mon titre"
  subtitle="Mon sous-titre"
  ctaLabel="Commencer"
/>

// Thème appliqué automatiquement via CSS vars sur le parent
<div style={{ "--color-primary": "#e11d48" } as React.CSSProperties}>
  <Pricing plans={plans} />
</div>
```

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript 5

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
```

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
