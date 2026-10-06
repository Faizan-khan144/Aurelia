import { ArrowRight } from 'lucide-react'
import { img } from '../data/content.js'
import { Reveal, SplitHeading } from './Motion.jsx'

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-bone">
      <img
        src={img('1566073771259-6a8506099945', 1800, 65)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-sea-deep/90" />
      <div className="grain absolute inset-0" />

      <div className="wrap relative py-24 text-center sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-clay-soft">
            <span className="h-px w-8 bg-clay-soft" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase">
              Reserve
            </span>
            <span className="h-px w-8 bg-clay-soft" />
          </span>
        </Reveal>

        <SplitHeading
          text="The tide, the table, the room"
          delay={120}
          className="font-display mx-auto mt-6 max-w-3xl text-[clamp(2.1rem,5.5vw,4rem)] leading-[1.04] font-medium tracking-[-0.03em]"
        />

        <Reveal delay={420} className="mx-auto mt-6 max-w-lg">
          <p className="text-[15px] leading-relaxed text-bone/70">
            Tell us when you would like to come. We answer the same day, usually
            within a couple of hours.
          </p>
        </Reveal>

        <Reveal delay={540} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 text-sm font-semibold text-bone transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Reserve a room
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="mailto:stay@aurelia.example"
            className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-8 py-4 text-sm font-medium text-bone transition-colors duration-300 hover:border-bone/70 hover:bg-bone/10"
          >
            stay@aurelia.example
          </a>
        </Reveal>

        <Reveal delay={640} className="mx-auto mt-14 max-w-3xl border-t border-bone/15 pt-8">
          <dl className="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {[
              { k: 'Check in', v: 'From 15:00, or whenever you arrive' },
              { k: 'Check out', v: 'Until 11:00 — no rush' },
              { k: 'Getting here', v: '90 min from Naples, we can arrange it' },
            ].map((x) => (
              <div key={x.k}>
                <dt className="text-[10px] font-semibold tracking-[0.2em] text-clay-soft uppercase">
                  {x.k}
                </dt>
                <dd className="mt-2 text-sm text-bone/75">{x.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}