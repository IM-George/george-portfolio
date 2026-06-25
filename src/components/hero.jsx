import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { SplitReveal } from './split-reveal'
import { FadeIn } from './fade-in'
import { PROFILE, BADGES } from '../data'
import { smoothTo } from '../utils'

gsap.registerPlugin(Draggable, InertiaPlugin)

function Badge({ label, tone, style }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    let drag
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: -120,
        opacity: 0,
        rotate: (style.rotate || 0) - 30,
        duration: 1,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.6 + Math.random() * 0.4,
      })
      gsap.to(el, {
        y: '+=10',
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })
      drag = Draggable.create(el, {
        type: 'x,y',
        inertia: true,
        bounds: el.closest('#hero') || document.getElementById('hero'),
        edgeResistance: 0.65,
        onPressInit() {
          gsap.killTweensOf(el, 'y')
        },
        onDragStart() {
          gsap.to(el, { scale: 1.12, duration: 0.2 })
        },
        onDragEnd() {
          gsap.to(el, { scale: 1, duration: 0.4, ease: 'power2.out' })
        },
      })[0]
    }, el)
    return () => {
      drag && drag.kill()
      ctx.revert()
    }
  }, [style.rotate])

  const tones = {
    green: 'bg-green text-void border-green',
    plasma: 'bg-plasma text-void border-plasma',
    outline: 'bg-panel/80 text-chalk border-ring',
  }

  return (
    <div
      ref={ref}
      className={`badge absolute z-20 cursor-grab select-none rounded-full border px-5 py-2.5 font-mono text-sm font-bold shadow-xl backdrop-blur ${tones[tone]}`}
      style={{ ...style, rotate: `${style.rotate || 0}deg` }}
    >
      {label}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-10"
    >
      <div className="absolute inset-0">
        {BADGES.map((b) => (
          <Badge key={b.label} {...b} />
        ))}
      </div>

      <div id="top" className="relative z-10 mx-auto w-full max-w-[1400px]">
        <p
          data-speed="1.15"
          className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-green md:text-sm"
        >
          {PROFILE.role} · {PROFILE.location}
        </p>

        <SplitReveal
          as="h1"
          stagger={0.035}
          start="top 95%"
          className="font-display text-[16vw] font-bold leading-[0.85] tracking-tightest md:text-[12vw]"
        >
          <span className="block">GEORGE</span>
          <span className="block text-gradient">MUTHARASU</span>
        </SplitReveal>

        <div className="mt-10 grid max-w-3xl gap-6 md:grid-cols-[1.4fr_1fr]" data-speed="0.92">
          <FadeIn delay={0.9}>
            <p className="text-lg leading-relaxed text-mist md:text-xl">
              I build <span className="text-green">fast, interactive</span> web applications — turning
              ideas into polished, production-ready interfaces.
            </p>
          </FadeIn>
          <FadeIn delay={1} className="flex items-end">
            <a
              href="#projects"
              onClick={(e) => smoothTo(e, '#projects')}
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest"
            >
              <span className="h-px w-10 bg-green transition-all duration-300 group-hover:w-16" />
              Selected work
            </a>
          </FadeIn>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 mx-auto flex max-w-[1400px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.3em] text-mist md:px-10">
        <span className="hidden md:block">Drag the badges → throw them</span>
        <span className="animate-pulse">Scroll ↓</span>
      </div>
    </section>
  )
}
