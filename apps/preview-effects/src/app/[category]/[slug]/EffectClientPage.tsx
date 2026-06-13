"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ReactNode } from "react"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

// ── Backgrounds ──────────────────────────────────────────
function FullscreenBG({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-0">
      {children}
    </div>
  )
}

function OverlayTitle({ children, mix }: { children: ReactNode; mix?: boolean }) {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="text-xs font-medium text-white/60 uppercase tracking-widest">En direct</span>
        </div>
        <h1 className={`text-6xl sm:text-7xl font-black tracking-tight ${mix ? 'mix-blend-difference' : ''} text-white`}>
          {children}
        </h1>
        <p className="mt-4 text-white/40 text-sm max-w-xs mx-auto">
          {(() => {
            const labels: Record<string, string> = {
              Threads: "Animation de fils entrelacés en temps réel",
              DotField: "Champ de points interactif",
              Ferrofluid: "Simulation de ferrofluide magnétique",
              Lightfall: "Chute de lumière procédurale",
              LiquidEther: "Fluide éthéré dynamique",
            }
            return labels[String(children)] ?? ""
          })()}
        </p>
      </div>
    </div>
  )
}

function ThreadsPage() {
  const { Threads } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><Threads /></FullscreenBG>
      <OverlayTitle mix>Threads</OverlayTitle>
    </div>
  )
}

function DotFieldPage() {
  const { DotField } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><DotField /></FullscreenBG>
      <OverlayTitle>DotField</OverlayTitle>
    </div>
  )
}

function FerrofluidPage() {
  const { Ferrofluid } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen">
      <FullscreenBG><Ferrofluid /></FullscreenBG>
      <OverlayTitle>Ferrofluid</OverlayTitle>
    </div>
  )
}

function LightfallPage() {
  const { Lightfall } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen">
      <FullscreenBG><Lightfall /></FullscreenBG>
      <OverlayTitle>Lightfall</OverlayTitle>
    </div>
  )
}

function LiquidEtherPage() {
  const { LiquidEther } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen">
      <FullscreenBG><LiquidEther /></FullscreenBG>
      <OverlayTitle>LiquidEther</OverlayTitle>
    </div>
  )
}

// ── Cards ────────────────────────────────────────────────
function ReflectiveCardDemo() {
  const { ReflectiveCard } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-950 via-rose-900 to-stone-950">
      <div className="text-center space-y-6">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Carte à effet miroir</div>
        <ReflectiveCard
          overlayColor="rgba(0, 0, 0, 0.2)"
          blurStrength={12}
          glassDistortion={30}
          metalness={1}
          roughness={0.75}
          displacementStrength={20}
          noiseScale={1}
          specularConstant={5}
          grayscale={0.15}
          color="#ffffff"
        />
      </div>
    </div>
  )
}

function GlareHoverDemo() {
  const { GlareHover } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-950 via-amber-900 to-stone-950">
      <div className="text-center space-y-4">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Survolez la carte</div>
        <div style={{ height: '600px', position: 'relative', width: '640px' }}>
          <GlareHover
            width="540px"
            height="500px"
            background="#292524"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-40}
            glareSize={280}
            transitionDuration={700}
            playOnce={false}
          >
            <div className="flex flex-col items-center justify-center h-full px-12 text-center select-none">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h2 className="text-4xl font-black text-amber-100 tracking-tight">L&apos;éclat</h2>
              <p className="mt-3 text-amber-200/50 text-sm max-w-xs leading-relaxed">
                Un reflet lumineux glisse sur la surface au passage de la souris
              </p>
            </div>
          </GlareHover>
        </div>
      </div>
    </div>
  )
}

function CardSwapDemo() {
  const { CardSwap, Card } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Pile de cartes animée</div>
        <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover={true}>
          <Card>
            <div className="p-8 text-center select-none">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M20 7l-8 4-8-4"/><path d="M4 12l8 4 8-4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Premium</h3>
              <p className="mt-2 text-emerald-200/50 text-sm">Design &amp; élégance</p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center select-none">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Exclusif</h3>
              <p className="mt-2 text-blue-200/50 text-sm">Sur mesure</p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center select-none">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><path d="M12 3l4 4-4 4-4-4 4-4z"/><path d="M4 17l8 4 8-4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white">Unique</h3>
              <p className="mt-2 text-violet-200/50 text-sm">Expérience inoubliable</p>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  )
}

// ── Glass ────────────────────────────────────────────────
function FluidGlassDemo() {
  const { FluidGlass } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#5227ff' }}>
      <div className="text-center space-y-4 w-full">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Animation de verre fluide</div>
        <div style={{ height: '600px', position: 'relative' }}>
          <FluidGlass mode="lens" />
        </div>
      </div>
    </div>
  )
}

function GlassSurfaceDemo() {
  const { GlassSurface } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-800">
      <div className="text-center space-y-6">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Surface en verre</div>
        <div className="w-96">
          <GlassSurface>
            <div className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h2 className="text-xl font-bold text-white">Glass Surface</h2>
              <p className="text-sm text-white/40 mt-2 leading-relaxed">Un panneau translucide avec effet de verre dépoli et reflets lumineux.</p>
            </div>
          </GlassSurface>
        </div>
      </div>
    </div>
  )
}

// ── Borders ──────────────────────────────────────────────
function BorderGlowDemo() {
  const { BorderGlow } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-950 via-violet-900 to-fuchsia-950">
      <div className="text-center space-y-6">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Bordure lumineuse interactive</div>
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#120F17"
          borderRadius={28}
          glowRadius={40}
          glowIntensity={1.2}
          coneSpread={25}
          animated={false}
          colors={['#c084fc', '#f472b6', '#38bdf8']}
        >
          <div className="p-10 text-white text-center select-none">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Border Glow</h2>
            <p className="text-sm text-white/40 mt-2 max-w-xs leading-relaxed">Approchez le curseur des bords pour révéler la lueur.</p>
          </div>
        </BorderGlow>
      </div>
    </div>
  )
}

function ElectricBorderDemo() {
  const { ElectricBorder } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950">
      <div className="text-center space-y-6">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Bordure électrique animée</div>
        <ElectricBorder>
          <div className="p-10 text-white text-center select-none">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Electric Border</h2>
            <p className="text-sm text-cyan-200/40 mt-2 max-w-xs leading-relaxed">Une bordure électrique qui crépite autour du contenu.</p>
          </div>
        </ElectricBorder>
      </div>
    </div>
  )
}

// ── Animations ───────────────────────────────────────────
function StrandsPage() {
  const { Strands } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><Strands /></FullscreenBG>
      <OverlayTitle mix>Strands</OverlayTitle>
    </div>
  )
}

function MetallicPaintDemo() {
  const { MetallicPaint } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-8">
      <div className="text-center space-y-4 w-full max-w-4xl">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Effet peinture métallisée</div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <MetallicPaint imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" />
        </div>
      </div>
    </div>
  )
}

function RibbonsPage() {
  const { Ribbons } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><Ribbons /></FullscreenBG>
      <OverlayTitle mix>Ribbons</OverlayTitle>
    </div>
  )
}

function GradualBlurDemo() {
  const { GradualBlur } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Flou progressif</div>
        <div className="max-w-lg">
          <GradualBlur>
            <div className="p-10 text-white text-center select-none">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Gradual Blur</h2>
              <p className="mt-4 text-white/50 leading-relaxed text-sm">
                Chaque ligne apparaît progressivement avec un effet de flou,
                créant une transition fluide et élégante.
              </p>
            </div>
          </GradualBlur>
        </div>
      </div>
    </div>
  )
}

function MetaBallsPage() {
  const { MetaBalls } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><MetaBalls /></FullscreenBG>
      <OverlayTitle mix>MetaBalls</OverlayTitle>
    </div>
  )
}

function MagicRingsDemo() {
  const { MagicRings } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium">Animation d&apos;anneaux lumineux</div>
        <MagicRings color="#fc42ff" />
      </div>
    </div>
  )
}

function AntigravityPage() {
  const { Antigravity } = require("@premier-js/components") as any
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <FullscreenBG><Antigravity /></FullscreenBG>
      <OverlayTitle>Antigravity</OverlayTitle>
    </div>
  )
}

function ShapeBlurDemo() {
  const { ShapeBlur } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium">Flou anisotropique</div>
        <ShapeBlur text="Premier.js" />
      </div>
    </div>
  )
}

function ElasticSliderDemo() {
  const { ElasticSlider } = require("@premier-js/components") as any
  return (
    <ChakraProvider value={defaultSystem}>
      <div className="min-h-screen bg-gradient-to-br from-orange-950 via-rose-950 to-red-950 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Curseur élastique</div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
            <div className="w-80">
              <ElasticSlider />
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  )
}

function LogoLoopDemo() {
  const { LogoLoop } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center">
      <div className="w-full text-center space-y-6">
        <div className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium">Boucle de logos</div>
        <LogoLoop
          logos={[
            { src: "https://via.placeholder.com/120x28/666/eee?text=Next.js", alt: "Next.js" },
            { src: "https://via.placeholder.com/120x28/666/eee?text=React", alt: "React" },
            { src: "https://via.placeholder.com/120x28/666/eee?text=Tailwind", alt: "Tailwind" },
            { src: "https://via.placeholder.com/120x28/666/eee?text=TypeScript", alt: "TypeScript" },
            { src: "https://via.placeholder.com/120x28/666/eee?text=Node.js", alt: "Node.js" },
          ]}
          speed={80}
        />
      </div>
    </div>
  )
}

function ScrollStackDemo() {
  const { ScrollStack } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950">
      <ScrollStack>
        <div className="h-screen flex flex-col items-center justify-center text-white select-none">
          <span className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium mb-4">Section 01</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">Découvrir</h2>
          <p className="mt-4 text-white/30 text-sm">Faites défiler pour explorer</p>
        </div>
        <div className="h-screen flex flex-col items-center justify-center text-white select-none">
          <span className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium mb-4">Section 02</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">Créer</h2>
          <p className="mt-4 text-white/30 text-sm">Donnez vie à vos idées</p>
        </div>
        <div className="h-screen flex flex-col items-center justify-center text-white select-none">
          <span className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium mb-4">Section 03</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight">Rayonner</h2>
          <p className="mt-4 text-white/30 text-sm">Partagez avec le monde</p>
        </div>
      </ScrollStack>
    </div>
  )
}

// ── Nav ──────────────────────────────────────────────────
function GooeyNavDemo() {
  const { GooeyNav } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-950 via-purple-950 to-violet-950 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">Navigation visqueuse</div>
        <GooeyNav
          items={[
            { label: "Accueil", href: "#" },
            { label: "Services", href: "#" },
            { label: "Portfolio", href: "#" },
            { label: "Contact", href: "#" },
          ]}
        />
      </div>
    </div>
  )
}

// ── Text ─────────────────────────────────────────────────
function DecryptedTextDemo() {
  const { DecryptedText } = require("@premier-js/components") as any
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-zinc-900 to-stone-950 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="text-white/20 text-xs uppercase tracking-[0.2em] font-medium">Texte déchiffré animé</div>
        <DecryptedText
          text="Premier.js"
          animateOn="hover"
          className="text-5xl sm:text-6xl font-black tracking-tight text-white"
        />
        <p className="text-white/20 text-sm max-w-xs mx-auto leading-relaxed">
          Passez la souris sur le texte pour voir l&apos;effet de déchiffrement
        </p>
      </div>
    </div>
  )
}

// ── Page map ─────────────────────────────────────────────
const pages: Record<string, { title: string; cat: string; comp: any }> = {
  "backgrounds/threads":        { title: "Threads",         cat: "Arrière-plans",  comp: ThreadsPage },
  "backgrounds/dot-field":      { title: "DotField",        cat: "Arrière-plans",  comp: DotFieldPage },
  "backgrounds/ferrofluid":     { title: "Ferrofluid",      cat: "Arrière-plans",  comp: FerrofluidPage },
  "backgrounds/lightfall":      { title: "Lightfall",       cat: "Arrière-plans",  comp: LightfallPage },
  "backgrounds/liquid-ether":   { title: "LiquidEther",     cat: "Arrière-plans",  comp: LiquidEtherPage },
  "cards/reflective-card":      { title: "ReflectiveCard",  cat: "Cartes",         comp: ReflectiveCardDemo },
  "cards/glare-hover":          { title: "GlareHover",      cat: "Cartes",         comp: GlareHoverDemo },
  "cards/card-swap":            { title: "CardSwap",        cat: "Cartes",         comp: CardSwapDemo },
  "glass/fluid-glass":          { title: "FluidGlass",      cat: "Verre",          comp: FluidGlassDemo },
  "glass/glass-surface":        { title: "GlassSurface",    cat: "Verre",          comp: GlassSurfaceDemo },
  "borders/border-glow":        { title: "BorderGlow",      cat: "Bordures",       comp: BorderGlowDemo },
  "borders/electric-border":    { title: "ElectricBorder",  cat: "Bordures",       comp: ElectricBorderDemo },
  "animations/strands":         { title: "Strands",         cat: "Animations",     comp: StrandsPage },
  "animations/metallic-paint":  { title: "MetallicPaint",   cat: "Animations",     comp: MetallicPaintDemo },
  "animations/ribbons":         { title: "Ribbons",         cat: "Animations",     comp: RibbonsPage },
  "animations/gradual-blur":    { title: "GradualBlur",     cat: "Animations",     comp: GradualBlurDemo },
  "animations/meta-balls":      { title: "MetaBalls",       cat: "Animations",     comp: MetaBallsPage },
  "animations/magic-rings":     { title: "MagicRings",      cat: "Animations",     comp: MagicRingsDemo },
  "animations/antigravity":     { title: "Antigravity",     cat: "Animations",     comp: AntigravityPage },
  "animations/shape-blur":      { title: "ShapeBlur",       cat: "Animations",     comp: ShapeBlurDemo },
  "animations/elastic-slider":  { title: "ElasticSlider",   cat: "Animations",     comp: ElasticSliderDemo },
  "animations/logo-loop":       { title: "LogoLoop",        cat: "Animations",     comp: LogoLoopDemo },
  "animations/scroll-stack":    { title: "ScrollStack",     cat: "Animations",     comp: ScrollStackDemo },
  "nav/gooey-nav":              { title: "GooeyNav",        cat: "Navigation",     comp: GooeyNavDemo },
  "text/decrypted-text":        { title: "DecryptedText",   cat: "Texte",          comp: DecryptedTextDemo },
}

export default function EffectClientPage() {
  const params = useParams()
  const key = `${params.category}/${params.slug}`
  const page = pages[key]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Composant introuvable</p>
      </div>
    )
  }

  const Comp = page.comp

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white no-underline transition-colors group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          <span className="hidden sm:inline">Retour aux effets</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs font-medium text-white/40 uppercase tracking-[0.15em]">{page.cat}</span>
          <span className="w-px h-4 bg-white/10 hidden sm:block" />
          <h1 className="text-sm font-semibold text-white">{page.title}</h1>
        </div>
      </header>
      <Comp />
    </div>
  )
}
