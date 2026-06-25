import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAV } from '../data'
import { smoothTo } from '../utils'

gsap.registerPlugin(ScrollTrigger)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 'top -40',
      onUpdate: (self) => setScrolled(self.scroll() > 40),
      onToggle: (self) => setScrolled(self.isActive),
    })
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      st.kill()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-ring/80 bg-void/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" onClick={(e) => smoothTo(e, '#top')} className="font-display text-lg font-bold tracking-tight">
          George<span className="text-green">.</span>
        </a>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => smoothTo(e, item.href)}
                className="group relative inline-block py-1 text-mist transition-colors hover:text-chalk"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-green transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => smoothTo(e, '#contact')}
          className="rounded-full bg-green px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-void transition-transform duration-300 hover:scale-105"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  )
}
