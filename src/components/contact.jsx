import { SplitReveal } from './split-reveal'
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
              href={`mailto:${PROFILE.email}`}
              className="inline-block font-display text-2xl font-semibold text-chalk transition-colors hover:text-green md:text-4xl"
            >
              {PROFILE.email}
            </a>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-mist">Phone</p>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="text-lg text-mist transition-colors hover:text-chalk">
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
