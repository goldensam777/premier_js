"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  Threads, DotField, Ferrofluid, Lightfall, LiquidEther,
  ReflectiveCard, GlareHover, CardSwap,
  FluidGlass, GlassSurface,
  BorderGlow, ElectricBorder,
  Strands, MetallicPaint, Ribbons, GradualBlur, MetaBalls,
  MagicRings, Antigravity, ShapeBlur, ElasticSlider, LogoLoop, ScrollStack,
  GooeyNav,
  DecryptedText,
} from "@premier-js/components"

const categories = [
  {
    name: "Arrière-plans",
    items: [
      { name: "Threads", comp: Threads },
      { name: "DotField", comp: DotField },
      { name: "Ferrofluid", comp: Ferrofluid },
      { name: "Lightfall", comp: Lightfall },
      { name: "LiquidEther", comp: LiquidEther },
    ],
  },
  {
    name: "Cartes",
    items: [
      { name: "ReflectiveCard", comp: ReflectiveCard },
      { name: "GlareHover", comp: GlareHover },
      { name: "CardSwap", comp: CardSwap },
    ],
  },
  {
    name: "Verre",
    items: [
      { name: "FluidGlass", comp: FluidGlass },
      { name: "GlassSurface", comp: GlassSurface },
    ],
  },
  {
    name: "Bordures",
    items: [
      { name: "BorderGlow", comp: BorderGlow },
      { name: "ElectricBorder", comp: ElectricBorder },
    ],
  },
  {
    name: "Animations",
    items: [
      { name: "Strands", comp: Strands },
      { name: "MetallicPaint", comp: MetallicPaint },
      { name: "Ribbons", comp: Ribbons },
      { name: "GradualBlur", comp: GradualBlur },
      { name: "MetaBalls", comp: MetaBalls },
      { name: "MagicRings", comp: MagicRings },
      { name: "Antigravity", comp: Antigravity },
      { name: "ShapeBlur", comp: ShapeBlur },
      { name: "ElasticSlider", comp: ElasticSlider },
      { name: "LogoLoop", comp: LogoLoop },
      { name: "ScrollStack", comp: ScrollStack },
    ],
  },
  {
    name: "Navigation",
    items: [
      { name: "GooeyNav", comp: GooeyNav },
    ],
  },
  {
    name: "Texte",
    items: [
      { name: "DecryptedText", comp: DecryptedText },
    ],
  },
]

export default function EffectsPreview() {
  return (
    <ChakraProvider value={defaultSystem}>
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Effets Visuels</h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            {categories.reduce((s, c) => s + c.items.length, 0)} composants d&apos;effets
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        {categories.map((cat) => (
          <section key={cat.name}>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border)]">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map(({ name, comp: Comp }) => (
                <div
                  key={name}
                  className="bg-[var(--color-surface)] rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                    <Comp />
                  </div>
                  <div className="p-4 border-t border-[var(--color-border)]">
                    <h3 className="font-semibold text-sm">{name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
    </ChakraProvider>
  )
}
