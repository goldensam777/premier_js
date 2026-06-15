import {
  Navbar,
  FeaturedPost,
  PostGrid,
  Newsletter,
  Footer
} from "@premier-js/components"
import "./App.css"

function App() {
  const navLinks = [
    { label: "Articles", href: "#articles" },
    { label: "Tutoriels", href: "#tutorials" },
    { label: "À propos", href: "#about" },
    { label: "Newsletter", href: "#newsletter" }
  ]

  const featuredPost = {
    title: "Le futur des interfaces web immersives et de la 3D GPU",
    excerpt: "Comment l'accès direct aux shaders WebGL et les frameworks modulaires révolutionnent l'expérience utilisateur sur le web moderne en 2026.",
    href: "#article-featured",
    date: "15 Juin 2026",
    authorName: "Samuel Yevi",
    authorRole: "Lead Architect",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    coverImage: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1000&q=80",
    tags: ["WebGL", "3D", "Architecture"]
  }

  const posts = [
    {
      title: "Optimiser les draw calls dans Three.js",
      excerpt: "Apprenez à regrouper vos géométries et à exploiter InstancedMesh pour maintenir 60 FPS constants sur mobile.",
      href: "#article-1",
      date: "12 Juin 2026",
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
      tags: ["Performance", "Three.js"]
    },
    {
      title: "Introduction aux design tokens avec CSS variables",
      excerpt: "Découvrez comment structurer un theme system robuste en séparant la sémantique de la valeur brute.",
      href: "#article-2",
      date: "10 Juin 2026",
      coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
      tags: ["Design System", "CSS"]
    },
    {
      title: "Concevoir des layouts d'Atomic Design robustes",
      excerpt: "Guide pratique pour structurer vos atomes, molécules et pages sans dupliquer de code.",
      href: "#article-3",
      date: "08 Juin 2026",
      coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=400&q=80",
      tags: ["Atomic Design", "React"]
    }
  ]

  return (
    <div className="app-container">
      {/* Navbar floating */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed', top: 0, left: 0, zIndex: 50, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', width: '100%' }}>
          <Navbar
            logo={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '5px', 
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'inline-block'
                }} />
                <span style={{ fontWeight: 800, color: 'var(--gs-text)', fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                  LAB_LOG
                </span>
              </div>
            }
            links={navLinks}
            cta={{ label: "S'abonner", href: "#newsletter" }}
          />
        </div>
      </div>

      {/* Main content */}
      <main style={{ paddingTop: '6rem', maxWidth: '1100px', margin: '0 auto', width: '100%', paddingLeft: '1rem', paddingRight: '1rem' }}>
        {/* Featured Post */}
        <section className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-green-600 mb-3">À la une</span>
          <FeaturedPost {...featuredPost} />
        </section>

        {/* Post Grid */}
        <div id="articles">
          <PostGrid
            title="Derniers Articles"
            subtitle="Explorez nos guides techniques sur l'architecture logicielle, le design et le graphisme 3D."
            posts={posts}
            columns={3}
            bgColor="transparent"
          />
        </div>

        {/* Newsletter */}
        <div id="newsletter">
          <Newsletter
            title="Abonnez-vous à notre Journal Technique"
            description="Pas de spam. Juste du code, des analyses et des retours d'expérience sur la production de frameworks."
            buttonColor="bg-green-600"
          />
        </div>
      </main>

      <Footer
        logo="LAB_LOG"
        copyright="LabLog &copy; 2026. Tous droits réservés."
        linkGroups={[
          {
            section: "Navigation",
            items: [
              { label: "Articles", href: "#articles" },
              { label: "Newsletter", href: "#newsletter" }
            ]
          },
          {
            section: "Ressources",
            items: [
              { label: "Documentation", href: "#" },
              { label: "GitHub", href: "https://github.com/goldensam777/premier_js" }
            ]
          }
        ]}
      />
    </div>
  )
}

export default App
