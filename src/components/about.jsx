import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitReveal } from './split-reveal'
import { FadeIn } from './fade-in'
import { SectionLabel } from './section-label'
import { ABOUT, EXPERIENCE, STATS } from '../data'

gsap.registerPlugin(ScrollTrigger)

function Stat({ value, suffix, label }) {
  const numRef = useRef(null)
  useLayoutEffect(() => {
    const el = numRef.current
    const obj = { n: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: 'power2.out',
        snap: { n: 1 },
        onUpdate() {
          el.textContent = Math.round(obj.n) + suffix
        },
        scrollTrigger: { trigger: el, start: 'top 92%' },
      })
    }, el)
    return () => ctx.revert()
  }, [value, suffix])
  return (
    <div className="bg-panel p-8">
      <div ref={numRef} className="font-display text-5xl font-bold tracking-tight text-chalk md:text-6xl">
        0{suffix}
      </div>
      <div className="mt-3 text-sm leading-snug text-mist">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionLabel index="(01)">About</SectionLabel>

      <div className="grid gap-16 md:grid-cols-[1.5fr_1fr]">
        <SplitReveal
          as="h2"
          type="words"
          stagger={0.012}
          className="font-display text-3xl font-medium leading-[1.2] tracking-tight text-chalk md:text-[2.7rem]"
        >
          {ABOUT}
        </SplitReveal>

        <div className="space-y-8" data-speed="1.08">
          {EXPERIENCE.map((job) => (
            <FadeIn key={job.company} className="border-t border-ring pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-chalk">{job.role}</h3>
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-mist">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm font-medium text-green">{job.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{job.notes}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ring md:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
