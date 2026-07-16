import React, { useEffect, useRef } from 'react'

export default function RotatingCompass({ src, alt }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const centerOffset = (rect.top + rect.height / 2) - vh / 2
      const progress = Math.max(-1, Math.min(1, centerOffset / (vh / 2)))
      el.style.setProperty('--rotateY', `${progress * -55}deg`)
      el.style.setProperty('--rotateX', `${progress * 6}deg`)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { update(); raf = null })
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="compass-3d-stage">
      <img ref={ref} src={src} alt={alt} className="compass-3d" />
    </div>
  )
}
