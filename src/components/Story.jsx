import { img } from '../data/content.js'
import { Reveal, MaskImage, SplitHeading, CountUp } from './Motion.jsx'

const stats = [
  { value: 9, suffix: '', label: 'Rooms, and no more' },
  { value: 1904, suffix: '', label: 'The house was built' },
  { value: 40, suffix: ' m', label: 'Down to the water' },
  { value: 1, suffix: '', label: 'Table each evening' },
]

export default function Story() {
  return (
    <section id="house" className="relative scroll-mt-24 overflow-hidden bg-bone py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative">
          <MaskImage
            src={img('1578683010236-d716f9a3f461', 1200)}
            alt="A lime-washed room in afternoon light"
            className="aspect-4/5 rounded-2xl"
          />

          <div className="absolute -bottom-8 -right-2 hidden w-56 sm:block lg:-right-8 lg:w-64">
            <MaskImage
              src={img('1618773928121-c32242e63f39', 700)}
              alt="Shutters opening onto the garden"
              delay={220}
              className="aspect-square rounded-2xl ring-8 ring-bone"
            />
          </div>

          <div className="absolute -top-6 -left-4 hidden rounded-full border border-ink/10 bg-white/80 px-5 py-3 backdrop-blur-md sm:block">
            <p className="font-display text-[13px] italic text-ink-soft">
              “Someone is always here.”
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow">The house</span>
          </Reveal>

          <SplitHeading
            text="Built for people who do not want a schedule"
            delay={80}
            className="font-display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-medium tracking-[-0.02em] text-ink"
          />

          <Reveal delay={260} className="mt-6 space-y-4">
            <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
              A captain built it in 1904 so he could see the harbour from his desk. We
              bought it with the desk still in place, took out the partitions, and
              stopped at nine rooms.
            </p>
            <p className="text-[15px] leading-relaxed text-mist">
              There is no reception, no restaurant menu and no programme of activities.
              Breakfast runs until you come down. Dinner is one seating at the long
              table. The rest of the day belongs to the sea, the books, or whatever you
              brought with you.
            </p>
          </Reveal>

          <Reveal delay={360} className="mt-9 border-t border-ink/10 pt-7">
            <p className="font-display text-lg italic text-ink">Elena Marchetti</p>
            <p className="mt-1 text-xs tracking-[0.14em] text-mist uppercase">
              Keeper of the house
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={420 + i * 90}>
                <p className="font-display text-3xl font-medium text-ink sm:text-[2rem]">
                  <CountUp to={s.value} />
                  {s.suffix}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-mist">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}