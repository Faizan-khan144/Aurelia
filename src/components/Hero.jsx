import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { heroSlides, img } from '../data/content.js'
import { SplitHeading, Reveal } from './Motion.jsx'
import BookingBar from './BookingBar.jsx'

export default function Hero() {
  const [i, setI] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setInterval(() => setI((n) => (n + 1) % heroSlides.length), 6000)
    return () => window.clearInterval(timer.current)
  }, [])

  const go = (n) => {
    setI((n + heroSlides.length) % heroSlides.length)
    window.clearInterval(timer.current)
    timer.current = window.setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6000)
  }

  const active = heroSlides[i]

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {heroSlides.map((s, n) => (
          <img
            key={s.id}
            src={img(s.id, 1920, 70)}
            alt=""
            aria-hidden="true"
            loading={n === 0 ? 'eager' : 'lazy'}
            fetchPriority={n === 0 ? 'high' : 'auto'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
              n === i ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl">
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-3 text-bone/80">
              <span className="h-px w-10 bg-clay" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
                {active.kicker}
              </span>
            </span>
          </Reveal>

          <SplitHeading
            as="h1"
            text={active.title}
            delay={220}
            className="font-display mt-6 text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.03em] text-bone"
          />

          <Reveal delay={520} className="mt-6 max-w-lg">
            <p className="text-[15px] leading-relaxed text-bone/70 sm:text-base">
              {active.note}
            </p>
          </Reveal>

          <Reveal delay={640} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              See the rooms
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#house"
              className="group inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3.5 text-sm font-medium text-bone backdrop-blur-sm transition-colors duration-300 hover:border-bone/60 hover:bg-bone/10"
            >
              The house
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 border-t border-bone/15 pt-6">
          <div className="flex items-center gap-3">
            {heroSlides.map((s, n) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(n)}
                aria-label={`Show slide ${n + 1}`}
                aria-current={n === i}
                className="group py-2"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    n === i ? 'w-14 bg-clay' : 'w-7 bg-bone/35 group-hover:bg-bone/70'
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="hidden font-display text-sm text-bone/60 italic sm:block">
            Amalfi coast · 40 m above the water
          </p>
        </div>
      </div>

      <BookingBar />
    </section>
  )
}