import { useLayoutEffect, useRef } from 'react'
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
