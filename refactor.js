const fs = require('fs')

const files = {
  'src/data.js': `export const PROFILE = {
  name: 'George M',
  role: 'Senior React.js Developer',
  tagline: 'Frontend Engineer',
  location: 'Chennai, Tamil Nadu',
  email: 'nijenthen@gmail.com',
  phone: '+91 8248325081',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
}

export const ABOUT = \`I'm a React.js developer with 4+ years designing, building and maintaining scalable single-page applications. I turn business requirements, wireframes and Figma designs into production-ready interfaces — reusable component libraries, clean state management and fast, accessible experiences.\`

export const STATS = [
  { value: 4, suffix: '+', label: 'Years building for the web' },
  { value: 60, suffix: '+', label: 'Reusable components shipped' },
  { value: 20, suffix: '+', label: 'REST APIs integrated' },
  { value: 5, suffix: '', label: 'Products taken to production' },
]

export const EXPERIENCE = [
  {
    company: '10xscale.ai',
    role: 'Software Engineer',
    period: 'Nov 2023 — Present',
    notes:
      'SPAs with React, TypeScript & Redux Toolkit. Interactive dashboards, candidate-management & workflow-automation tools. Perf work via code-splitting, memoization & lazy loading.',
  },
  {
    company: 'ABSHRMS',
    role: 'Software Developer',
    period: 'May 2022 — Oct 2023',
    notes:
      'Enterprise HRMS — payroll, attendance & leave. Built a 40+ component library, integrated 20+ REST APIs, and tuned large-dataset rendering with virtualization & pagination.',
  },
]

export const PROJECTS = [
  {
    id: '01',
    name: 'Hire10x',
    kind: 'Recruitment Automation Platform',
    year: '2023 — 25',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'FastAPI', 'Typesense'],
    blurb:
      'A platform that streamlines hiring — JD creation, candidate sourcing, lead & pipeline management, plus centralised comms across LinkedIn, Gmail, WhatsApp and calls.',
  },
  {
    id: '02',
    name: 'Career Pilot',
    kind: 'Job Aggregation Platform',
    year: '2024 —',
    stack: ['React', 'TypeScript', 'FastAPI', 'REST'],
    blurb:
      'Centralised job discovery aggregating LinkedIn, Naukri, Indeed & Apna. Automated sync workflows and recommendations behind responsive, data-driven dashboards.',
  },
  {
    id: '03',
    name: 'TaskPilot',
    kind: 'Task Management Application',
    year: '2025',
    stack: ['React', 'Redux Toolkit', 'REST'],
    blurb:
      'Role-based dashboards with task assignment, status tracking and collaboration workflows — dynamic UIs with real-time updates and a modular architecture.',
  },
  {
    id: '04',
    name: 'Chrome Extensions',
    kind: 'LinkedIn Lead Extraction · X-Ray Search',
    year: '2026 —',
    stack: ['JavaScript', 'React', 'Chrome APIs'],
    blurb:
      'A lead-extraction extension that maps LinkedIn profiles into recruitment workflows, plus a Google X-Ray query builder to supercharge candidate sourcing.',
  },
]

export const SKILLS = [
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'State & Data',
    items: ['Redux Toolkit', 'RTK Query', 'Context API', 'REST', 'Axios', 'JWT / OAuth'],
  },
  {
    group: 'Styling & UI',
    items: ['Tailwind CSS', 'SCSS', 'Material UI', 'Responsive Design', 'Accessibility (ARIA)', 'Shadcn UI'],
  },
  {
    group: 'Performance',
    items: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Virtualization', 'Bundle Optimization'],
  },
  {
    group: 'Testing',
    items: ['Jest', 'React Testing Library', 'Unit Testing', 'Functional Testing'],
  },
  {
    group: 'Tooling & Backend',
    items: ['Git / GitHub', 'CI/CD', 'Docker', 'Webpack', 'FastAPI', 'NestJS', 'Node.js'],
  },
]

export const BADGES = [
  { label: 'React', tone: 'green', style: { top: '6%', left: '8%', rotate: -8 } },
  { label: 'TypeScript', tone: 'plasma', style: { top: '14%', right: '10%', rotate: 7 } },
  { label: 'GSAP', tone: 'green', style: { top: '64%', left: '4%', rotate: 5 } },
  { label: 'Redux', tone: 'outline', style: { bottom: '10%', right: '20%', rotate: -6 } },
  { label: 'Next.js', tone: 'outline', style: { top: '40%', right: '4%', rotate: 10 } },
  { label: 'Tailwind', tone: 'plasma', style: { bottom: '18%', left: '16%', rotate: -10 } },
]

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
\`,

  'src/utils.js': \`import { ScrollSmoother } from 'gsap/ScrollSmoother'

export function smoothTo(e, href) {
  e.preventDefault()
  const smoother = ScrollSmoother.get()
  if (smoother) smoother.scrollTo(href, true, 'top 80px')
  else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
\`,

  'src/components/split-reveal.jsx': \`import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

export function SplitReveal({ as: Tag = 'h2', children, className = '', type = 'chars', stagger = 0.02, start = 'top 85%' }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    let split
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: 'lines,words,chars', linesClass: 'split-line' })
      const targets = type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars
      gsap.from(targets, {
        yPercent: 115,
        opacity: 0,
        rotateX: -45,
        transformOrigin: '0% 50% -40',
        stagger,
        duration: 0.8,
        ease: 'back.out(1.6)',
        scrollTrigger: { trigger: el, start },
      })
    }, el)
    return () => {
      ctx.revert()
      split && split.revert()
    }
  }, [type, stagger, start])
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
\`,

  'src/components/fade-in.jsx': \`import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FadeIn({ children, className = '', y = 36, delay = 0 }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: el, start: 'top 90%' },
      })
    }, el)
    return () => ctx.revert()
  }, [y, delay])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
\`,

  'src/components/background.jsx': \`export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,228,72,0.10),transparent_55%)]" />
      <div className="absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-green/10 blur-[140px]" />
      <div className="absolute -right-40 top-2/3 h-[32rem] w-[32rem] rounded-full bg-plasma/10 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />
    </div>
  )
}
\`,

  'src/components/navbar.jsx': \`import { useEffect, useState } from 'react'
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
      className={\`fixed inset-x-0 top-0 z-50 transition-all duration-500 \\\${
        scrolled ? 'border-b border-ring/80 bg-void/70 backdrop-blur-xl' : 'border-b border-transparent'
      }\`}
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
\`,

  'src/components/hero.jsx': \`import { useLayoutEffect, useRef } from 'react'
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
      className={\\\`badge absolute z-20 cursor-grab select-none rounded-full border px-5 py-2.5 font-mono text-sm font-bold shadow-xl backdrop-blur \\\${tones[tone]}\\\`}
      style={{ ...style, rotate: \\\`\\\${style.rotate || 0}deg\\\` }}
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
\`,

  'src/components/marquee.jsx': \`import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Marquee() {
  const track = useRef(null)
  useLayoutEffect(() => {
    const el = track.current
    const ctx = gsap.context(() => {
      const tween = gsap.to(el, { xPercent: -50, ease: 'none', duration: 20, repeat: -1 })
      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-3, 3, self.getVelocity() / 320)
          tween.timeScale(1 + Math.abs(v))
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  const words = ['React', 'TypeScript', 'GSAP', 'Next.js', 'Performance', 'Accessibility', 'Design Systems', 'Redux']
  const row = [...words, ...words]
  return (
    <section className="relative z-10 overflow-hidden border-y border-ring bg-void/40 py-6">
      <div ref={track} className="flex w-max gap-10 whitespace-nowrap will-change-transform">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl font-semibold text-chalk/80 md:text-4xl">
            {w}
            <span className="text-green">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
\`,

  'src/components/section-label.jsx': \`export function SectionLabel({ index, children }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-green">{index}</span>
      <span className="h-px flex-1 bg-ring" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">{children}</span>
    </div>
  )
}
\`,

  'src/components/about.jsx': \`import { useLayoutEffect, useRef } from 'react'
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
\`,

  'src/components/projects.jsx': \`import { useLayoutEffect, useRef } from 'react'
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
\`,

  'src/components/skills.jsx': \`import { useLayoutEffect, useRef } from 'react'
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
            className={\\\`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono text-sm \\\${
              accent ? 'border-green/40 bg-green/5 text-chalk' : 'border-ring bg-panel text-mist'
            }\\\`}
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
\`,

  'src/components/contact.jsx': \`import { SplitReveal } from './split-reveal'
import { PROFILE } from '../data'
import { smoothTo } from '../utils'

export function Contact() {
  return (
    <footer id="contact" className="relative z-10 overflow-hidden border-t border-ring px-6 pb-12 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-mist">(04) — Contact</p>

        <SplitReveal
          as="h2"
          stagger={0.03}
          className="font-display text-[13vw] font-bold leading-[0.9] tracking-tightest md:text-[10vw]"
        >
          <span className="block">LET’S BUILD</span>
          <span className="block text-gradient">SOMETHING.</span>
        </SplitReveal>

        <div className="mt-16 flex flex-col gap-10 border-t border-ring pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-mist">Email</p>
            <a
              href={\\\`mailto:\\\${PROFILE.email}\\\`}
              className="inline-block font-display text-2xl font-semibold text-chalk transition-colors hover:text-green md:text-4xl"
            >
              {PROFILE.email}
            </a>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-mist">Phone</p>
            <a href={\\\`tel:\\\${PROFILE.phone.replace(/\\\\s/g, '')}\\\`} className="text-lg text-mist transition-colors hover:text-chalk">
              {PROFILE.phone}
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { label: 'LinkedIn', href: PROFILE.links.linkedin },
              { label: 'GitHub', href: PROFILE.links.github },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ring px-6 py-3 font-mono text-xs uppercase tracking-widest text-chalk transition-colors hover:border-green hover:bg-green hover:text-void"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-mist md:flex-row">
          <span>© 2026 George M — {PROFILE.location}</span>
          <span>Built with React · GSAP · ScrollSmoother · SplitText</span>
          <a href="#top" onClick={(e) => smoothTo(e, '#top')} className="transition-colors hover:text-chalk">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
\`,

  'src/App.jsx': \`import { useLayoutEffect } from 'react'
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
\`
}

const path = require('path')

fs.mkdirSync('src/components', { recursive: true })

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(filename, content)
}
console.log('done')
