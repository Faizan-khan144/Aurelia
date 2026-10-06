import { ArrowUpRight, Maximize, BedDouble, Users } from 'lucide-react'
import { rooms, img } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function Rooms() {
  return (
    <section id="rooms" className="relative scroll-mt-24 bg-sand/60 py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Stay</span>
            </Reveal>
            <SplitHeading
              text="Nine rooms, each slightly different"
              delay={80}
              className="font-display mt-4 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-ink"
            />
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              No two are the same shape. Prices include breakfast, the boat ladder and
              the reading room.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 110}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={img(r.id, 800)}
                  alt={r.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/55 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-bone/95 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink uppercase backdrop-blur-sm">
                  {r.tag}
                </span>

                <span className="absolute right-4 bottom-4 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-bone text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-tight font-medium text-ink">
                    {r.name}
                  </h3>
                  <p className="shrink-0 text-right">
                    <span className="num font-display text-xl font-medium text-clay">
                      ${r.price}
                    </span>
                    <span className="block text-[10px] text-mist">per night</span>
                  </p>
                </div>

                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mist">
                  {r.blurb}
                </p>

                <div className="mt-5 flex items-center gap-4 border-t border-ink/10 pt-4 text-[11.5px] text-ink-soft">
                  <span className="flex items-center gap-1.5">
                    <Maximize size={13} className="text-clay" />
                    <span className="num">{r.size}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BedDouble size={13} className="text-clay" />
                    {r.bed}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-clay" />
                    <span className="num">{r.guests}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-12 flex justify-center">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bone"
          >
            Check availability
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}