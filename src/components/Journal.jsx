import { ArrowUpRight } from 'lucide-react'
import { journal, img } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function Journal() {
  return (
    <section id="journal" className="relative scroll-mt-24 bg-bone py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Journal</span>
            </Reveal>
            <SplitHeading
              text="Notes from the house"
              delay={80}
              className="font-display mt-4 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-ink"
            />
          </div>
          <Reveal delay={200}>
            <a
              href="#journal"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              All notes
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {journal.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 110}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={img(p.id, 800)}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-bone/95 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink uppercase backdrop-blur-sm">
                  {p.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-[11px] text-mist">
                  <span className="num">{p.date}</span>
                  <span className="h-px flex-1 bg-ink/10" />
                  <span className="num">{p.read} read</span>
                </div>

                <h3 className="font-display mt-4 flex-1 text-xl leading-snug font-medium text-ink transition-colors duration-300 group-hover:text-clay">
                  {p.title}
                </h3>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
                  Read
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}