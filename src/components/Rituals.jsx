import {
  UtensilsCrossed,
  Waves,
  BookOpen,
  Sailboat,
  Sun,
} from 'lucide-react'
import { rituals } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

const icons = { UtensilsCrossed, Waves, BookOpen, Sailboat, Sun }

export default function Rituals() {
  return (
    <section id="rituals" className="relative scroll-mt-24 overflow-hidden bg-sea py-24 text-bone sm:py-32">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full border border-bone/10 spin-slow" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-[20rem] w-[20rem] rounded-full border border-bone/10 spin-slow" style={{ animationDirection: 'reverse' }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bone/25 to-transparent" />

      <div className="wrap relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-clay-soft">
              <span className="h-px w-10 bg-clay-soft" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
                Days here
              </span>
            </span>
          </Reveal>
          <SplitHeading
            text="Five things worth doing, and one worth not doing"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em]"
          />
        </div>

        <div className="mt-14 divide-y divide-bone/15 border-y border-bone/15">
          {rituals.map((r, i) => {
            const Icon = icons[r.icon]
            return (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="group grid items-start gap-4 py-7 transition-colors duration-400 hover:bg-bone/[0.04] sm:grid-cols-[3.5rem_1fr] sm:gap-7 md:grid-cols-[3.5rem_18rem_1fr] md:items-center"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full border border-bone/25 text-clay-soft transition-all duration-400 group-hover:border-clay-soft group-hover:bg-clay-soft group-hover:text-sea">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div className="flex items-baseline gap-4">
                  <span className="num text-[11px] text-bone/40">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium sm:text-2xl">
                    {r.title}
                  </h3>
                </div>

                <p className="text-[14.5px] leading-relaxed text-bone/70 sm:col-start-2 md:col-start-3">
                  {r.blurb}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-10">
          <p className="font-display text-lg text-bone/55 italic">
            Nothing is compulsory. That is the whole idea.
          </p>
        </Reveal>
      </div>
    </section>
  )
}