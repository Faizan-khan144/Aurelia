import { Camera, Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { navLinks } from '../data/content.js'

const logo = (
  <svg viewBox="0 0 34 34" width="34" height="34" aria-hidden="true">
    <circle cx="17" cy="17" r="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7 21c3.2 0 3.2-4 6.4-4s3.2 4 6.4 4 3.2-4 6.4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="17" cy="11.5" r="2.4" fill="currentColor" />
  </svg>
)

const columns = [
  {
    title: 'Visit',
    items: [
      { label: 'Via del Porto 12', href: null },
      { label: '84010 Amalfi (SA), Italy', href: null },
      { label: 'Get directions', href: '#top' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { label: '+1 234 567 890', href: 'tel:+1234567890' },
      { label: 'stay@aurelia.example', href: 'mailto:stay@aurelia.example' },
      { label: 'Press & partnerships', href: 'mailto:press@aurelia.example' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-sea-deep text-bone">
      <div className="wrap py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              {logo}
              <span className="font-display text-xl font-semibold">Aurelia</span>
            </div>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-bone/65">
              Nine rooms above the water. Built in 1904, kept deliberately small ever
              since.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Mail, label: 'Email' },
                { icon: Phone, label: 'Call' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={label === 'Instagram' ? '#top' : label === 'Email' ? 'mailto:stay@aurelia.example' : 'tel:+1234567890'}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-bone/25 text-bone/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay-soft hover:bg-clay-soft hover:text-sea-deep"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] text-clay-soft uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-bone/70 transition-colors duration-300 hover:text-bone"
                  >
                    <span className="h-px w-0 bg-clay-soft transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[10px] font-semibold tracking-[0.2em] text-clay-soft uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label} className="text-sm text-bone/70">
                    {it.href ? (
                      <a
                        href={it.href}
                        className="transition-colors duration-300 hover:text-bone"
                      >
                        {it.label}
                      </a>
                    ) : (
                      it.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-bone/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-bone/55">
            <MapPin size={13} className="text-clay-soft" />
            © {new Date().getFullYear()} Aurelia. A fictional property for demonstration.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs text-bone/55">
            <a href="#top" className="transition-colors duration-300 hover:text-bone">
              Privacy
            </a>
            <a href="#top" className="transition-colors duration-300 hover:text-bone">
              Terms
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-bone"
            >
              Back to top
              <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}