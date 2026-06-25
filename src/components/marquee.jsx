import { useLayoutEffect, useRef } from 'react'
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
