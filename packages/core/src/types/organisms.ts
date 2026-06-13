// Niveau 4 — Organismes (Sites)
// Assemblages de pages. Sites complets.
// Convention : préfixe "Site" pour éviter les conflits de noms.

import type { Page, PageVitrine, PageContenu, PageApplicative } from "./pages"
import type { Rendering, Aesthetic, Layout, Animation } from "./axes"

// ─────────────────────────────────────────────
// TYPE DE BASE — tout organisme hérite de ça
// ─────────────────────────────────────────────

export type Organism = {
  pages: Page[]
  rendering: Rendering
  aesthetic: Aesthetic
  layout: Layout
  animation: Animation
}

// ─────────────────────────────────────────────
// LES ORGANISMES
// ─────────────────────────────────────────────

export type SiteBlog = Organism & {
  kind: "SiteBlog"
  pages: (PageContenu & { purpose: "BlogListPage" | "BlogPostPage" })[]
}

export type SiteSaas = Organism & {
  kind: "SiteSaas"
  pages: (
    | (PageVitrine & { purpose: "SaasPage" })
    | (PageApplicative & { purpose: "DashboardPage" })
    | (PageContenu & { purpose: "DocPage" })
  )[]
}

export type SitePortfolio = Organism & {
  kind: "SitePortfolio"
  pages: (PageVitrine & { purpose: "PortfolioPage" | "LandingPage" })[]
}

export type SiteResearchLab = Organism & {
  kind: "SiteResearchLab"
  pages: (
    | (PageContenu & { purpose: "ResearchPage" })
    | (PageContenu & { purpose: "BlogPostPage" })
  )[]
}

export type SiteEcommerce = Organism & {
  kind: "SiteEcommerce"
  pages: (
    | (PageVitrine & { purpose: "LandingPage" | "ProductPage" })
    | (PageApplicative & { purpose: "DashboardPage" })
  )[]
}

export type SiteChatApp = Organism & {
  kind: "SiteChatApp"
  pages: (
    | (PageApplicative & { purpose: "ChatPage" })
    | (PageVitrine & { purpose: "LandingPage" })
  )[]
}

export type SiteVitrine = Organism & {
  kind: "SiteVitrine"
  pages: (PageVitrine & { purpose: "LandingPage" | "PortfolioPage" })[]
}

// ─────────────────────────────────────────────
// UNION
// ─────────────────────────────────────────────

export type Site =
  | SiteBlog
  | SiteSaas
  | SitePortfolio
  | SiteResearchLab
  | SiteEcommerce
  | SiteChatApp
  | SiteVitrine
