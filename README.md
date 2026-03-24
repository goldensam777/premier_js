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

## Sections (10)

```
Navbar   Hero     Features   Stats    Testimonials
Pricing  FAQ      CTA        Contact  Footer
```

Sections spécialisées : `AuthForm` `Dashboard` `Team` `BillingSection`

## Édition inline (style Canva)

Les sections supportent l'édition directe via trois primitives :

### `EditableContext`
Context React qui transporte l'état d'édition vers les composants enfants.

```tsx
<EditableContext.Provider
  value={{
    isEditing: true,
    fieldStyles: { title: { fontSize: "48px", fontWeight: "bold" } },
    onUpdate:      (field, value) => { /* sauvegarder */ },
    onStyleUpdate: (field, style) => { /* sauvegarder les styles */ },
  }}
>
  <Hero title="Mon titre" />
</EditableContext.Provider>
```

### `EditableText`
Remplace `{value}` dans les sections. Quand `isEditing=false` : rendu transparent. Quand `isEditing=true` : contour vert pointillé, clic → `contentEditable`, Enter/blur → sauvegarde.

```tsx
import { EditableText } from "../editor/EditableText";

<h1 style={{ color: titleColor }}>
  <EditableText field="title" value={title} />
</h1>
```

### `FloatingToolbar`
Bulle flottante (React Portal) au-dessus de l'élément focusé.
Contrôles : nom du champ · taille de police A−/Npx/A+ · toggle Gras.

Rendu automatiquement par `EditableText` au focus.

### Champs couverts par EditableText

Tous les champs scalaires de chaque section : titre, sous-titre, description, labels de bouton, logo, copyright. Les champs array (items, plans…) restent gérés via un panel dédié.

## Système de thème

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

Mise à jour en temps réel sans recompilation Tailwind.

## Notifications globales (Toast)

```tsx
import { toast } from "@/components/ui/Toast";
toast.success("Site publié !");
toast.error("Erreur");
```

Ajouter `<ToastContainer />` dans le layout racine.

## Usage

```tsx
import { Button, Card, Navbar, Hero, EditableContext, EditableText } from "@/components";

// Section standard
<Hero title="Mon titre" subtitle="Mon sous-titre" ctaLabel="Commencer" />

// Avec édition inline
<EditableContext.Provider value={{ isEditing: true, fieldStyles: {}, onUpdate, onStyleUpdate }}>
  <Hero title="Mon titre" />
</EditableContext.Provider>

// Thème personnalisé
<div style={{ "--color-primary": "#e11d48" } as React.CSSProperties}>
  <Pricing plans={plans} />
</div>
```

## Clés privées (réservées éditeur)

Filtrer les clés `_*` avant de passer `data` aux composants :

```tsx
const componentData = Object.fromEntries(
  Object.entries(data).filter(([k]) => !k.startsWith("_"))
);
// _styles, _paddingY ne seront pas passés au composant
```

## Stack

- Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript 5

## Développement

```bash
npm install
npm run dev   # http://localhost:3000
```
