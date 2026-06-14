import { Navbar } from '@premier-js/components'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/work' },
  { label: 'À propos', href: '/about' },
]

export function Header() {
  return (
    <Navbar
      logo={
        <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--gs-text)' }}>
          Studio NOVA
        </span>
      }
      links={navItems}
      cta={{ label: 'Contact', href: '/contact' }}
    />
  )
}
