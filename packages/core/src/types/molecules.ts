// Niveau 2 — Molécules
// Assemblages d'atomes. Blocs réutilisables dont les pages sont construites.

export type Navigation =
  | "Navbar"
  | "Sidebar"
  | "DocSidebar"
  | "Breadcrumbs"
  | "MobileMenu"
  | "TabBar"

export type Hero =
  | "Hero"
  | "HeroWithDemo"
  | "AbstractHero"
  | "TypedHero"

export type Content =
  | "Features"
  | "FeaturesGrid"
  | "HowItWorks"
  | "StatsCards"
  | "Timeline"

export type Social =
  | "Testimonials"
  | "SocialProofBar"
  | "LogoCloud"
  | "ReviewsSection"

export type Conversion =
  | "PricingTable"
  | "CTABanner"
  | "Newsletter"
  | "ContactForm"
  | "FAQ"

export type Data =
  | "DataTable"
  | "AreaChart"
  | "KnowledgeGraph"
  | "StateSpaceViewer"

export type Blog =
  | "PostCard"
  | "PostGrid"
  | "FeaturedPost"
  | "AuthorCard"
  | "TOC"
  | "TagCloud"
  | "Pagination"

export type Research =
  | "PaperViewer"
  | "FormulaBlock"
  | "CitationBlock"
  | "NotebookCanvas"

export type Commerce =
  | "ProductCard"
  | "ProductGrid"
  | "Cart"
  | "FilterPanel"
  | "Checkout"

export type Chat =
  | "MessageBubble"
  | "InputBar"
  | "ConversationList"
  | "StreamingIndicator"
  | "TypingIndicator"

export type Layout =
  | "Footer"
  | "Section"
  | "Container"

export type MoleculeEditor =
  | "Toolbar"
  | "EditableCanvas"
  | "PDFReader"
  | "SidebarOutline"
  | "VersionHistory"
  | "ExportMenu"

// Union de toutes les molécules
export type Molecule =
  | Navigation
  | Hero
  | Content
  | Social
  | Conversion
  | Data
  | Blog
  | Research
  | Commerce
  | Chat
  | Layout
  | MoleculeEditor
