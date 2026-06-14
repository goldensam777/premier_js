'use client'

import { Navbar } from '@premier-js/components'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 24px',
      }}
    >
      <Navbar
        logo={
          <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--gs-text)' }}>
            Studio NOVA
          </span>
        }
        links={navItems.map((item) => ({
          ...item,
          isActive: item.href === pathname,
        }))}
        cta={{ label: 'Contact', href: '/contact' }}
        className="max-w-5xl mx-auto rounded-full"
      />
    </header>
  )
}
