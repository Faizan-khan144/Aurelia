import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks } from '../data/content.js'

const logo = (
  <svg viewBox="0 0 34 34" width="30" height="30" aria-hidden="true">
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

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          solid
            ? 'border-ink/10 bg-bone/85 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <header className="wrap flex h-[68px] items-center justify-between gap-6">
          <a
            href="#top"
            className={`flex items-center gap-2.5 transition-colors duration-500 ${
              solid ? 'text-ink' : 'text-bone'
            }`}
          >
            {logo}
            <span className="font-display text-[19px] leading-none font-semibold tracking-tight">
              Aurelia
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-[13.5px] font-medium transition-colors duration-500 ${
                  solid ? 'text-ink-soft hover:text-ink' : 'text-bone/85 hover:text-bone'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    solid ? 'bg-ink' : 'bg-bone'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className={`hidden items-center gap-2 text-[13px] font-medium transition-colors duration-500 sm:flex ${
                solid ? 'text-ink-soft hover:text-clay' : 'text-bone/80 hover:text-bone'
              }`}
            >
              <Phone size={14} strokeWidth={2} />
              <span className="num">+1 234 567 890</span>
            </a>

            <a
              href="#book"
              className="group relative hidden overflow-hidden rounded-full bg-clay px-5 py-2.5 text-[13px] font-semibold text-bone transition-transform duration-300 hover:-translate-y-0.5 sm:block"
            >
              <span className="relative z-10">Reserve</span>
              <span className="shine absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid h-10 w-10 place-items-center rounded-full border transition-colors duration-500 lg:hidden ${
                solid
                  ? 'border-ink/15 text-ink'
                  : 'border-bone/30 text-bone backdrop-blur-sm'
              }`}
            >
              <Menu size={18} />
            </button>
          </div>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-bone transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
            <span className="font-display text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-ink/10 py-4 font-display text-2xl font-medium"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
                <span className="font-sans text-[11px] text-mist num">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t border-ink/10 px-6 py-6">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-clay py-3.5 text-center text-sm font-semibold text-bone"
            >
              Reserve a room
            </a>
            <a
              href="tel:+1234567890"
              className="block rounded-full border border-ink/15 py-3.5 text-center text-sm font-medium"
            >
              <span className="num">+1 234 567 890</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}