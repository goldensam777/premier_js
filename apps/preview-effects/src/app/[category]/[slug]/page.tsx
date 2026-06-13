"use client"
import dynamic from "next/dynamic"

const EffectClientPage = dynamic(() => import("./EffectClientPage"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-text)]">
      <p className="text-lg">Chargement...</p>
    </div>
  ),
})

export default function Page() {
  return <EffectClientPage />
}
