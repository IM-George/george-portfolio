import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

import { Background } from './components/background'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Marquee } from './components/marquee'
import { About } from './components/about'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Contact } from './components/contact'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function App() {
  useLayoutEffect(() => {
    let smoother
    const ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
      })
    })
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Background />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}
