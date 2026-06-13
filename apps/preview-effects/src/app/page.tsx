"use client"
import Link from "next/link"

const categories = [
  {
    name: "Arrière-plans",
    slug: "backgrounds",
    items: [
      { name: "Threads", slug: "threads", desc: "Fils lumineux animés en WebGL" },
      { name: "DotField", slug: "dot-field", desc: "Champ de points interactif" },
      { name: "Ferrofluid", slug: "ferrofluid", desc: "Fluide ferro-magnétique" },
      { name: "Lightfall", slug: "lightfall", desc: "Pluie de lumière" },
      { name: "LiquidEther", slug: "liquid-ether", desc: "Éther liquide WebGL" },
    ],
  },
  {
    name: "Cartes",
    slug: "cards",
    items: [
      { name: "ReflectiveCard", slug: "reflective-card", desc: "Carte à reflet dynamique" },
      { name: "GlareHover", slug: "glare-hover", desc: "Carte à effet d'éblouissement" },
      { name: "CardSwap", slug: "card-swap", desc: "Cartes à permutation animée" },
    ],
  },
  {
    name: "Verre",
    slug: "glass",
    items: [
      { name: "FluidGlass", slug: "fluid-glass", desc: "Verre fluide 3D" },
      { name: "GlassSurface", slug: "glass-surface", desc: "Surface en verre" },
    ],
  },
  {
    name: "Bordures",
    slug: "borders",
    items: [
      { name: "BorderGlow", slug: "border-glow", desc: "Bordure lumineuse interactive" },
      { name: "ElectricBorder", slug: "electric-border", desc: "Bordure électrique" },
    ],
  },
  {
    name: "Animations",
    slug: "animations",
    items: [
      { name: "Strands", slug: "strands", desc: "Brins de couleur animés" },
      { name: "MetallicPaint", slug: "metallic-paint", desc: "Peinture métallique WebGL" },
      { name: "Ribbons", slug: "ribbons", desc: "Rubans 3D" },
      { name: "GradualBlur", slug: "gradual-blur", desc: "Flou progressif" },
      { name: "MetaBalls", slug: "meta-balls", desc: "Méta-balles organiques" },
      { name: "MagicRings", slug: "magic-rings", desc: "Anneaux magiques" },
      { name: "Antigravity", slug: "antigravity", desc: "Particules anti-gravité" },
      { name: "ShapeBlur", slug: "shape-blur", desc: "Texte flou animé" },
      { name: "ElasticSlider", slug: "elastic-slider", desc: "Slider élastique" },
      { name: "LogoLoop", slug: "logo-loop", desc: "Boucle de logos" },
      { name: "ScrollStack", slug: "scroll-stack", desc: "Empilement au scroll" },
    ],
  },
  {
    name: "Navigation",
    slug: "nav",
    items: [
      { name: "GooeyNav", slug: "gooey-nav", desc: "Navigation gooey" },
    ],
  },
  {
    name: "Texte",
    slug: "text",
    items: [
      { name: "DecryptedText", slug: "decrypted-text", desc: "Texte déchiffré animé" },
    ],
  },
]

export default function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Effets Visuels</h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            {categories.reduce((s, c) => s + c.items.length, 0)} composants
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        {categories.map((cat) => (
          <section key={cat.slug}>
            <h2 className="text-2xl font-semibold mb-4">{cat.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${cat.slug}/${item.slug}`}
                  className="block bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)] p-6 hover:shadow-md transition-shadow no-underline text-[var(--color-text)]"
                >
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
