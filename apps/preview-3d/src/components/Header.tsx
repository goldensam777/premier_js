'use client'

import { PillNav } from '@premier-js/components'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const activeIndex = navItems.findIndex((item) => item.href === pathname)

  return (
    <header
      style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
      }}
    >
      <PillNav
        items={navItems}
        defaultActive={activeIndex >= 0 ? activeIndex : 0}
      />
    </header>
  )
}
