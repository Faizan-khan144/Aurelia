import { ArrowUpRight } from 'lucide-react'
import { gallery, img } from '../data/content.js'
import { Reveal, SplitHeading, MaskImage } from './Motion.jsx'

export default function Gallery() {
  return (
    <section className="relative bg-sand/60 py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">The place</span>
            </Reveal>
            <SplitHeading
              text="Around the house"
              delay={80}
              className="font-display mt-4 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-ink"
            />
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Photographs taken over one week in May, unedited beyond the crop.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={`${g.id}-${i}`}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-2xl ${
                g.span === 'tall'
                  ? 'row-span-2'
                  : g.span === 'wide'
                    ? 'col-span-2'
                    : ''
              }`}
            >
              <MaskImage
                src={img(g.id, g.span === 'wide' ? 1000 : 700)}
                alt={g.alt}
                delay={i * 80}
                className="h-full w-full"
              />
              <img
                src={img(g.id, g.span === 'wide' ? 1000 : 700)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-0"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="p-4 text-[13px] leading-snug font-medium text-bone">
                  {g.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}