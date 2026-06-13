# Premier.js — Taxonomie

> Ce document est le cahier de charges de la taxonomie de Premier.js.
> Il définit les 4 niveaux de composition ainsi que les 4 axes transversaux.
> La stack technique est hors scope de ce document.

---

## Niveau 1 — Atomes

Les atomes sont les unités indivisibles. Aucun composant Premier.js ne peut être décomposé en dessous de ce niveau.

### UI
`Button` `Badge` `Input` `Select` `Checkbox` `Radio` `Switch` `Label` `Separator` `Icon`

### Feedback
`Spinner` `Skeleton` `Toast` `Tooltip` `Modal`

### Media
`Avatar` `ScrollArea` `Card` `Dropdown`

---

## Niveau 2 — Molécules

Les molécules sont des assemblages d'atomes. Elles forment les blocs réutilisables dont les pages sont construites.

### Navigation
`Navbar` `Sidebar` `DocSidebar` `Breadcrumbs` `MobileMenu` `TabBar`

### Heroes
`Hero` `HeroWithDemo` `AbstractHero` `TypedHero`

### Contenu
`Features` `FeaturesGrid` `HowItWorks` `StatsCards` `Timeline`

### Preuve sociale
`Testimonials` `SocialProofBar` `LogoCloud` `ReviewsSection`

### Conversion
`PricingTable` `CTABanner` `Newsletter` `ContactForm` `FAQ`

### Data
`DataTable` `AreaChart` `KnowledgeGraph` `StateSpaceViewer`

### Blog
`PostCard` `PostGrid` `FeaturedPost` `AuthorCard` `TOC` `TagCloud` `Pagination`

### Recherche
`PaperViewer` `FormulaBlock` `CitationBlock` `NotebookCanvas`

### Commerce
`ProductCard` `ProductGrid` `Cart` `FilterPanel` `Checkout`

### Chat
`MessageBubble` `InputBar` `ConversationList` `StreamingIndicator` `TypingIndicator`

### Layout
`Footer` `Section` `Container`

---

## Niveau 3 — Objets (Pages)

Les objets sont des pages complètes, construites à partir de molécules.

### LandingPage

```txt
Navbar, Hero, LogoCloud, Features, HowItWorks,
Pricing, Testimonials, FAQ, CTABanner, Footer
```

### SaasPage

```txt
Navbar, HeroWithDemo, SocialProofBar, FeaturesGrid,
InteractiveDemo, PricingTable, Testimonials,
ComparisonTable, FAQ, CTABanner, Footer
```

### PortfolioPage

```txt
Navbar, Hero, About, SkillsGrid, ProjectsGrid,
Timeline, Testimonials, ContactForm, Footer
```

### BlogListPage

```txt
Navbar, FeaturedPost, PostGrid, Sidebar,
TagCloud, Categories, Newsletter, Pagination, Footer
```

### BlogPostPage

```txt
Navbar, ArticleHeader, ProgressBar, TOC, MDXContent,
CodeBlock, AuthorBio, RelatedPosts, Comments, Footer
```

### DashboardPage

```txt
Sidebar, TopBar, StatsCards, AreaChart,
DataTable, Notifications, UserMenu, Breadcrumbs
```

### DocPage

```txt
Navbar, DocSidebar, Breadcrumbs, MDXContent, CodeBlock,
CopyButton, OnThisPage, PrevNext, SearchModal, Footer
```

### ChatPage

```txt
Sidebar, ConversationList, MessageBubble, InputBar,
StreamingIndicator, AttachmentUpload, UserAvatar, TypingIndicator
```

### ResearchPage

```txt
Navbar, AbstractHero, PaperViewer, FormulaBlock,
KnowledgeGraph, StateSpaceViewer, CitationBlock, NotebookCanvas, Footer
```

### ProductPage

```txt
Navbar, ProductHero, ProductCard, ReviewsSection,
RelatedProducts, Cart, Footer
```

Les pages se divisent en trois catégories :

- **Vitrines** — présentent un produit, une personne, un projet
- **Contenu** — affichent du contenu long à lire ou explorer
- **Applicatives** — outils interactifs, l'utilisateur produit quelque chose

---

## Niveau 4 — Organismes (Sites)

Les organismes sont des sites complets, construits à partir de pages.
Un organisme définit quelles pages le composent.

| Organisme   | Pages                                          |
|-------------|------------------------------------------------|
| Blog        | BlogListPage + BlogPostPage                    |
| SaasApp     | SaasPage + DashboardPage + DocPage             |
| Portfolio   | PortfolioPage + LandingPage                    |
| ResearchLab | ResearchPage + BlogPostPage                    |
| Ecommerce   | LandingPage + ProductPage + DashboardPage      |
| ChatApp     | ChatPage + LandingPage                         |
| Vitrine     | LandingPage + PortfolioPage                    |

---

## Axes transversaux

Les axes sont indépendants les uns des autres et de nature différente.
Ils s'appliquent à n'importe quel niveau de la hiérarchie.

---

### Axe A — Rendu
> Nature : **architecturale** — quelle technologie produit les pixels.

| Valeur    | Description              | Composants additionnels                                                      |
|-----------|--------------------------|------------------------------------------------------------------------------|
| `Visual`  | CSS / DOM uniquement     | —                                                                            |
| `ThreeD`  | WebGL (GPU)              | `Canvas3D` `FloatingObject` `ParticleField` `SceneViewer` `OrbitCamera`      |
| `Hybrid`  | CSS + WebGL              | `Canvas3D` `BackgroundScene` `ScrollParallax3D` `ParticleField`              |

---

### Axe B — Esthétique
> Nature : **design language** — quel langage visuel est appliqué.

| Valeur            | Description                                          | Composants additionnels                                              |
|-------------------|------------------------------------------------------|----------------------------------------------------------------------|
| `Glassmorphism`   | Translucence, flou, profondeur                       | `GlassCard` `GlassNavbar` `GlassModal` `FrostedPanel` `BackdropBlur`|
| `Minimal`         | Espace, typographie, pas de décoration               | `CleanCard` `BorderlessInput` `MinimalTable` `SpaceSection`          |
| `DarkNeon`        | Fond sombre, accents lumineux, gradients             | `NeonBadge` `GradientBorder` `AuroraBackground` `CyberpunkGrid`      |
| `Brutalism`       | Raw, typographie bold, contrastes durs               | `BoldCard` `StampButton` `RawGrid` `StrikeText`                      |
| `Skeuomorphism`   | Imitation du monde physique, textures, ombres        | `TexturedCard` `RealisticButton` `PhysicalSlider`                    |

---

### Axe C — Layout
> Nature : **structurelle** — comment le contenu est organisé dans l'espace.

| Valeur             | Description                                  | Usage typique                          |
|--------------------|----------------------------------------------|----------------------------------------|
| `SingleColumn`     | Flux vertical unique                         | BlogPostPage, DocPage                  |
| `MagazineGrid`     | Grille éditoriale multi-colonnes             | BlogListPage                           |
| `SidebarContent`   | Sidebar fixe + zone de contenu               | DashboardPage, DocPage                 |
| `FullCanvas`       | Plein écran, pas de scroll classique         | Sites 3D immersifs, expériences        |
| `DashboardGrid`    | Grille de widgets, données, cartes           | DashboardPage                          |
| `CenteredNarrow`   | Colonne centrale contrainte, marges larges   | LandingPage, PortfolioPage             |

---

### Axe D — Animation

> Nature : **comportementale** — comment les éléments bougent.

| Valeur       | Description                                  | Composants additionnels                                                        |
|--------------|----------------------------------------------|--------------------------------------------------------------------------------|
| `Static`     | Aucune animation                             | —                                                                              |
| `Subtle`     | Micro-interactions, transitions douces       | `FadeIn` `HoverScale` `SmoothScroll`                                           |
| `Rich`       | Scroll animations, transitions de page       | `PageTransition` `ScrollReveal` `ParallaxSection` `MagneticButton` `SplitText` |
| `Cinematic`  | Orchestration complète, séquences animées    | `PageTransition` `ScrollReveal` `ParallaxSection` `MagneticButton` `SplitText` `TypedHero` `SequenceTimeline` |

---

## Exemples de composition

```
LeumasLabs   = ResearchLab & ThreeD  & Glassmorphism & CenteredNarrow & Rich
ModernBlog   = Blog        & Visual  & Minimal        & SingleColumn   & Subtle
StartupSite  = SaasApp     & Visual  & Minimal        & CenteredNarrow & Rich
DevPortfolio = Portfolio   & Hybrid  & DarkNeon       & FullCanvas     & Cinematic
AIChatApp    = ChatApp     & Visual  & Minimal        & SidebarContent & Subtle
```