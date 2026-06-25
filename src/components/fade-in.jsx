import { useLayoutEffect, useRef } from 'react'
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
