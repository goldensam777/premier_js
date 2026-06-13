export type LandingPage = {
    purpose: "LandingPage";
    category: "vitrine";
    molecules: ("Navbar" | "Hero" | "LogoCloud" | "Features" | "HowItWorks" | "PricingTable" | "Testimonials" | "FAQ" | "CTABanner" | "Footer")[];
};
export type SaasPage = {
    purpose: "SaasPage";
    category: "vitrine";
    molecules: ("Navbar" | "HeroWithDemo" | "SocialProofBar" | "FeaturesGrid" | "PricingTable" | "Testimonials" | "ComparisonTable" | "FAQ" | "CTABanner" | "Footer")[];
};
export type PortfolioPage = {
    purpose: "PortfolioPage";
    category: "vitrine";
    molecules: ("Navbar" | "Hero" | "StatsCards" | "ProjectsGrid" | "Timeline" | "Testimonials" | "ContactForm" | "Footer")[];
};
export type ProductPage = {
    purpose: "ProductPage";
    category: "vitrine";
    molecules: ("Navbar" | "ProductCard" | "ProductGrid" | "ReviewsSection" | "Cart" | "Footer")[];
};
export type BlogListPage = {
    purpose: "BlogListPage";
    category: "contenu";
    molecules: ("Navbar" | "FeaturedPost" | "PostGrid" | "Sidebar" | "TagCloud" | "Newsletter" | "Pagination" | "Footer")[];
};
export type BlogPostPage = {
    purpose: "BlogPostPage";
    category: "contenu";
    molecules: ("Navbar" | "TOC" | "AuthorCard" | "RelatedPosts" | "Footer")[];
};
export type DocPage = {
    purpose: "DocPage";
    category: "contenu";
    molecules: ("Navbar" | "DocSidebar" | "Breadcrumbs" | "TOC" | "Footer")[];
};
export type ResearchPage = {
    purpose: "ResearchPage";
    category: "contenu";
    molecules: ("Navbar" | "AbstractHero" | "PaperViewer" | "FormulaBlock" | "KnowledgeGraph" | "StateSpaceViewer" | "CitationBlock" | "NotebookCanvas" | "Footer")[];
};
export type DashboardPage = {
    purpose: "DashboardPage";
    category: "applicative";
    molecules: ("Sidebar" | "StatsCards" | "AreaChart" | "DataTable" | "Notifications")[];
};
export type ChatPage = {
    purpose: "ChatPage";
    category: "applicative";
    molecules: ("Sidebar" | "ConversationList" | "MessageBubble" | "InputBar" | "StreamingIndicator" | "TypingIndicator")[];
};
export type EditorPage = {
    purpose: "EditorPage";
    category: "applicative";
    molecules: ("Toolbar" | "EditableCanvas" | "PDFReader" | "SidebarOutline" | "VersionHistory" | "ExportMenu")[];
};
export type PageVitrine = LandingPage | SaasPage | PortfolioPage | ProductPage;
export type PageContenu = BlogListPage | BlogPostPage | DocPage | ResearchPage;
export type PageApplicative = DashboardPage | ChatPage | EditorPage;
export type Page = PageVitrine | PageContenu | PageApplicative;
//# sourceMappingURL=pages.d.ts.map