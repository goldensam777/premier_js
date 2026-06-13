"use client"

import { Button } from "@premier-js/components"
import { Badge } from "@premier-js/components"

const sections = [
  { name: "Atomes", path: "/atoms" },
  { name: "Molécules", path: "/molecules" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Premier.js Preview</h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Catalogue des composants — atomes, molécules, organismes
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          {sections.map((s) => (
            <a key={s.path} href={s.path}>
              <Button>{s.name}</Button>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Badge>29 atomes</Badge>
          <span className="mx-2" />
          <Badge>64 molécules</Badge>
        </div>
      </section>
    </main>
  )
}
