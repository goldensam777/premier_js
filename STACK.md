# Premier.js — Stack Technique

> Ce document recense les librairies retenues pour Premier.js.
> Il est séparé de la taxonomie (TAXONOMY.md) qui reste indépendante de toute stack.

---

## Fondation

| Librairie      | Rôle                              |
|----------------|-----------------------------------|
| Next.js        | Framework React (core)            |
| TypeScript     | Typage statique                   |
| Tailwind CSS   | Styling utility-first             |

---

## Primitives & Design System

| Librairie   | Rôle                                              |
|-------------|---------------------------------------------------|
| shadcn/ui   | Composants stylés, copy-paste, full ownership     |
| Radix UI    | Primitives non-stylées, accessibles (base shadcn) |

---

## Esthétique & Effets Visuels

| Librairie   | Rôle                                                         |
|-------------|--------------------------------------------------------------|
| React Bits  | Composants animés modernes, effets visuels, text animations  |

---

## Animation

| Librairie     | Rôle                                                      |
|---------------|-----------------------------------------------------------|
| Framer Motion | Animations UI déclaratives, transitions, micro-interactions|
| GSAP          | Animations avancées, scroll-driven, timelines complexes   |

---

## Scroll

| Librairie | Rôle                                          |
|-----------|-----------------------------------------------|
| Lenis     | Smooth scroll (standard actuel, remplace Locomotive Scroll) |

---

## 3D & WebGL

| Librairie          | Rôle                                        |
|--------------------|---------------------------------------------|
| Three.js           | Moteur 3D bas niveau                        |
| React Three Fiber  | Wrapper React de Three.js                   |
| Drei               | Helpers pour R3F (caméras, lumières, etc.)  |

---

## Contenu

| Librairie  | Rôle                                       |
|------------|--------------------------------------------|
| MDX        | Markdown + JSX (articles, docs, research)  |
| KaTeX      | Rendu de formules mathématiques            |
| Shiki      | Coloration syntaxique (CodeBlock)          |

---

## Data & Visualisation

| Librairie | Rôle                                          |
|-----------|-----------------------------------------------|
| Recharts  | Graphiques React (Dashboard)                  |
| D3.js     | Data viz avancée (KnowledgeGraph, StateSpace) |

---

## Utilitaires

| Librairie    | Rôle                        |
|--------------|-----------------------------|
| Lucide Icons | Icônes (1000+, MIT)         |
| clsx         | Composition de classes CSS  |

---

## Ce qui est explicitement écarté

| Librairie         | Raison                                              |
|-------------------|-----------------------------------------------------|
| Magic UI          | Couvert par React Bits                              |
| Aceternity UI     | Overused en 2026, sites template-like               |
| Locomotive Scroll | Déprécié, remplacé par Lenis                        |
| react-spring      | Framer Motion suffit pour le même usage             |
