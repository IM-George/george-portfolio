import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from './section-label'
import { PROFILE, PROJECTS } from '../data'

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({ p }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10
    gsap.to(el, { rotateX: rx, rotateY: ry, duration: 0.4, transformPerspective: 900, ease: 'power2.out' })
  }
  const reset = () => gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })

  return (
    <a
      ref={ref}
      href={PROFILE.links.github}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative flex h-[62vh] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-ring bg-panel p-8 will-change-transform md:h-[68vh] md:w-[42vw] md:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green/10 blur-3xl transition-opacity duration-500 group-hover:bg-green/20" />
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm text-green">{p.id}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-mist">{p.year}</span>
      </div>
      <div>
        <h3 className="font-display text-5xl font-bold tracking-tight text-chalk md:text-7xl">{p.name}</h3>
        <p className="mt-3 font-mono text-sm uppercase tracking-widest text-green">{p.kind}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-mist">{p.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-ring px-3 py-1 font-mono text-xs text-mist">
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function Projects() {
  const trigger = useRef(null)
  const track = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const distance = () => track.current.scrollWidth - window.innerWidth + 80
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: trigger.current,
            start: 'top top',
            end: () => '+=' + distance(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    }, trigger)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={trigger} id="projects" className="relative z-10 md:h-screen md:overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:absolute md:left-1/2 md:top-10 md:z-20 md:w-full md:-translate-x-1/2 md:px-10">
        <SectionLabel index="(02)">Selected Projects</SectionLabel>
      </div>

      <div
        ref={track}
        className="flex snap-x gap-6 overflow-x-auto px-6 pb-16 md:h-screen md:items-center md:overflow-visible md:px-10 md:pb-0 md:pt-20"
      >
        {PROJECTS.map((p) => (
          <div key={p.id} className="snap-center">
            <ProjectCard p={p} />
          </div>
        ))}
        <div className="hidden shrink-0 items-center md:flex md:w-[30vw]">
          <p className="font-display text-4xl font-bold leading-tight text-chalk/30">
            More
            <br />
            on the
            <br />
            <span className="text-green">way →</span>
          </p>
        </div>
      </div>
    </section>
  )
}
