import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitReveal } from './split-reveal'
import { FadeIn } from './fade-in'
import { SectionLabel } from './section-label'
import { SKILLS } from '../data'

function SkillRow({ items, dir = 1, accent }) {
  const track = useRef(null)
  useLayoutEffect(() => {
    const el = track.current
    const ctx = gsap.context(() => {
      gsap.set(el, { xPercent: dir > 0 ? 0 : -50 })
      gsap.to(el, { xPercent: dir > 0 ? -50 : 0, ease: 'none', duration: 28, repeat: -1 })
    }, el)
    return () => ctx.revert()
  }, [dir])
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden py-2">
      <div ref={track} className="flex w-max gap-4 will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-sm ${
              accent ? 'border-green/40 bg-green/5 text-chalk' : 'border-ring bg-panel text-mist'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const rows = [
    SKILLS.flatMap((c) => c.items).slice(0, 8),
    SKILLS.flatMap((c) => c.items).slice(8, 17),
    SKILLS.flatMap((c) => c.items).slice(17),
  ]
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <SectionLabel index="(03)">Skills & Tools</SectionLabel>

      <SplitReveal
        as="h2"
        type="lines"
        stagger={0.08}
        className="mb-14 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-chalk md:text-6xl"
      >
        The toolkit behind the interfaces I ship.
      </SplitReveal>

      <div className="space-y-2">
        <SkillRow items={rows[0]} dir={1} accent />
        <SkillRow items={rows[1]} dir={-1} />
        <SkillRow items={rows[2]} dir={1} />
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3">
        {SKILLS.map((cat, i) => (
          <FadeIn key={cat.group} delay={i * 0.04}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-green">{cat.group}</h3>
            <p className="text-sm leading-relaxed text-mist">{cat.items.join(' · ')}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
