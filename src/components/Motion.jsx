import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced() || typeof IntersectionObserver === 'undefined') {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`rise ${on ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function MaskImage({ src, alt, className = '', delay = 0, loading = 'lazy' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced() || typeof IntersectionObserver === 'undefined') {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`mask block overflow-hidden ${on ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </span>
  )
}

export function SplitHeading({ text, className = '', delay = 0, as: Tag = 'h2' }) {
  const words = text.split(' ')
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced() || typeof IntersectionObserver === 'undefined') {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`word ${on ? 'in' : ''}`}
          aria-hidden="true"
          style={{ '--d': `${delay + i * 55}ms` }}
        >
          <span>{w}&nbsp;</span>
        </span>
      ))}
    </Tag>
  )
}

export function CountUp({ to, duration = 1500, className = '' }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced() || typeof IntersectionObserver === 'undefined') {
      setVal(to)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, to, duration])

  return (
    <span ref={ref} className={`num ${className}`}>
      {val}
    </span>
  )
}