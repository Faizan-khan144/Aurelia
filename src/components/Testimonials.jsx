import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (n) => setI((n + testimonials.length) % testimonials.length)

  return (
    <section className="relative bg-bone py-24 sm:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Guests</span>
          </Reveal>
          <SplitHeading
            text="People who came back"
            delay={80}
            className="font-display mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] font-medium tracking-[-0.02em] text-ink"
          />
          <Reveal delay={220} className="mt-6 max-w-xs">
            <p className="text-[15px] leading-relaxed text-mist">
              Roughly a third of our stays are people visiting again, or sending
              someone they know.
            </p>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bone"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bone"
            >
              <ArrowRight size={17} />
            </button>
            <span className="num ml-2 text-xs text-mist">
              0{i + 1} <span className="text-ink/25">/</span> 0{testimonials.length}
            </span>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative rounded-3xl border border-ink/10 bg-white p-7 shadow-soft sm:p-11">
            <Quote
              size={44}
              strokeWidth={1}
              className="text-clay/30"
              aria-hidden="true"
            />
            <blockquote
              key={i}
              className="font-display mt-5 text-[clamp(1.25rem,2.4vw,1.85rem)] leading-[1.4] font-medium tracking-[-0.01em] text-ink"
            >
              {t.quote}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sea text-sm font-semibold text-bone">
                {t.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{t.name}</span>
                <span className="block text-xs text-mist">{t.role}</span>
              </span>
              <span className="ml-auto hidden gap-1 sm:flex">
                {[0, 1, 2, 3, 4].map((n) => (
                  <svg key={n} width="13" height="13" viewBox="0 0 24 24" fill="#c2643c" aria-hidden="true">
                    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
                  </svg>
                ))}
              </span>
            </figcaption>
          </div>

          <div className="mt-5 flex gap-2">
            {testimonials.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={`Review ${n + 1}`}
                aria-current={n === i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  n === i ? 'w-9 bg-clay' : 'w-4 bg-ink/15 hover:bg-ink/30'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}