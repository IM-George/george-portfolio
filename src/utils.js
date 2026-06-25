import { ScrollSmoother } from 'gsap/ScrollSmoother'

export function smoothTo(e, href) {
  e.preventDefault()
  const smoother = ScrollSmoother.get()
  if (smoother) smoother.scrollTo(href, true, 'top 80px')
  else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
