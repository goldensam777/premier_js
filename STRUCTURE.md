# Premier.js — Structure du Projet

> Ce document décrit la structure cible du monorepo Premier.js.
> Le repo actuel (app Next.js classique) sera migré vers cette structure
> une fois le moteur core implémenté.

---

## Vue d'ensemble

```tree
premier-js/
│
├── packages/
│   ├── core/
│   ├── cli/
│   └── components/
│
├── registry/
├── templates/
└── apps/
    └── docs/
```

---

## packages/core

> Le moteur. C'est le seul package installable via npm.
> `npm install premier-js`

```tree
packages/core/
│
├── types/
│   ├── atoms.ts          ← types des atomes (Button, Badge, Input...)
│   ├── molecules.ts      ← types des molécules (Hero, Navbar, PricingTable...)
│   ├── organisms.ts      ← types des organismes (Blog, SaasApp, Portfolio...)
│   ├── axes.ts           ← Rendering, Aesthetic, Layout, Animation
│   └── index.ts          ← re-export de tous les types
│
├── hooks/
│   ├── useScroll.ts
│   ├── useTheme.ts
│   ├── use3D.ts
│   └── index.ts
│
├── utils/
│   ├── cn.ts             ← combinaison de classes CSS (clsx + tailwind-merge)
│   ├── formatters.ts
│   └── index.ts
│
├── package.json
├── tsconfig.json
└── index.ts              ← entrée principale du package
```

---

## packages/cli

> Le CLI. Invoqué via `npx premier`.

```text
packages/cli/
│
├── commands/
│   ├── init.ts           ← npx premier init --preset <nom>
│   └── add.ts            ← npx premier add <composant>
│
├── utils/
│   ├── copy.ts           ← copie les fichiers composants dans le projet cible
│   └── registry.ts       ← lit registry/components.json et registry/presets.json
│
├── package.json
└── index.ts
```

**Usage final :**

```bash
npx premier init --preset modern-blog     # génère une app complète
npx premier init --preset research-lab   # génère une app complète
npx premier add GlassCard                 # copie un composant dans ./components/
npx premier add Hero PricingTable Footer  # copie plusieurs composants
```

---

## packages/components

> Le registry source. Ce sont les composants que le CLI copie dans le projet cible.
> L'utilisateur final ne les importe pas — il en est propriétaire après le `add`.

```tree
packages/components/
│
├── atoms/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
│   ├── Badge/
│   ├── Input/
│   ├── Modal/
│   └── ...
│
├── molecules/
│   ├── Navbar/
│   ├── Hero/
│   ├── HeroWithDemo/
│   ├── PricingTable/
│   ├── GlassCard/
│   ├── FormulaBlock/
│   ├── StateSpaceViewer/
│   └── ...
│
└── organisms/
    ├── Blog/
    ├── ResearchLab/
    ├── Portfolio/
    ├── SaasApp/
    └── ...
```

---

## registry/

> Fichiers JSON lus par le CLI pour savoir quoi copier et où.

```text
registry/
│
├── components.json       ← map composant → fichier source
└── presets.json          ← map preset → liste de composants
```

**Exemple components.json :**

```json
{
  "GlassCard": "molecules/GlassCard",
  "Hero": "molecules/Hero",
  "FormulaBlock": "molecules/FormulaBlock"
}
```

**Exemple presets.json :**

```json
{
  "modern-blog": {
    "organism": "Blog",
    "components": ["Navbar", "FeaturedPost", "PostGrid", "GlassCard", "Newsletter", "Footer"],
    "axes": {
      "rendering": "Visual",
      "aesthetic": "Glassmorphism",
      "layout": "MagazineGrid",
      "animation": "Subtle"
    }
  },
  "research-lab": {
    "organism": "ResearchLab",
    "components": ["Navbar", "AbstractHero", "PaperViewer", "FormulaBlock", "StateSpaceViewer", "Footer"],
    "axes": {
      "rendering": "Hybrid",
      "aesthetic": "Glassmorphism",
      "layout": "CenteredNarrow",
      "animation": "Rich"
    }
  }
}
```

---

## templates/

> Apps Next.js complètes générées par `npx premier init`.
> Chaque template correspond à un organisme de la taxonomie.

```text
templates/
├── modern-blog/
├── saas-landing/
├── research-lab/
├── portfolio/
├── dashboard/
├── docs/
└── chat-interface/
```

---

## apps/docs/

> Site de documentation de Premier.js lui-même.
> Construit avec Premier.js (dogfooding).

```text
apps/docs/
├── app/
├── components/
└── content/
```

---

## Migration depuis le repo actuel

```text
ÉTAT ACTUEL                       ÉTAT CIBLE
──────────────────────────────    ──────────────────────────────
app/                          →   apps/docs/  +  templates/
components/                   →   packages/components/
package.json (racine)         →   package.json monorepo (workspaces)
tsconfig.json                 →   partagé entre packages/
```

### Ordre de migration recommandé

1. Implémenter `packages/core/types/` depuis la taxonomie
2. Implémenter `packages/core/utils/` (cn, formatters)
3. Déplacer `components/` vers `packages/components/`
4. Écrire `registry/components.json`
5. Implémenter `packages/cli/` (add en premier, init ensuite)
6. Créer les premiers `templates/`
7. Migrer `app/` vers `apps/docs/`
