import { useState } from 'react'
import { CalendarDays, Users, Search, Check } from 'lucide-react'

const rooms = ['Any room', 'The Chart Room', 'Harbour Loft', 'The Lime Wash', "Captain's Quarters"]

const pad = (n) => String(n).padStart(2, '0')
const fmt = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const addDays = (d, n) => {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

export default function BookingBar() {
  const today = new Date()
  const [arrive, setArrive] = useState(fmt(addDays(today, 14)))
  const [depart, setDepart] = useState(fmt(addDays(today, 17)))
  const [room, setRoom] = useState(rooms[0])
  const [guests, setGuests] = useState(2)
  const [sent, setSent] = useState(false)

  const nights = Math.max(
    1,
    Math.round((new Date(depart) - new Date(arrive)) / 86400000) || 1,
  )

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
  }

  return (
    <div id="book" className="relative z-10 scroll-mt-24">
      <div className="wrap">
        <form
          onSubmit={submit}
          className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 shadow-lift ring-1 ring-ink/10 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr_0.9fr_auto]"
          style={{ background: 'color-mix(in oklab, #ffffff 92%, transparent)' }}
        >
          <Field icon={<CalendarDays size={15} />} label="Arrive">
            <input
              type="date"
              value={arrive}
              min={fmt(today)}
              onChange={(e) => setArrive(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-ink outline-none"
            />
          </Field>

          <Field icon={<CalendarDays size={15} />} label="Depart">
            <input
              type="date"
              value={depart}
              min={arrive}
              onChange={(e) => setDepart(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-ink outline-none"
            />
          </Field>

          <Field icon={<Search size={15} />} label="Room">
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink outline-none"
            >
              {rooms.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>

          <Field icon={<Users size={15} />} label="Guests">
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink outline-none"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </Field>

          <button
            type="submit"
            className="group relative flex items-center justify-center gap-2 overflow-hidden bg-sea px-7 py-5 text-sm font-semibold text-bone transition-colors duration-300 hover:bg-sea-deep"
          >
            {sent ? (
              <>
                <Check size={16} />
                Sent
              </>
            ) : (
              <>
                Check
                <span className="num">({nights})</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  nights
                </span>
              </>
            )}
            <span className="shine absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ icon, label, children }) {
  return (
    <label className="group flex cursor-pointer flex-col justify-center gap-1 bg-white px-5 py-4 transition-colors duration-300 hover:bg-sand/50">
      <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] text-mist uppercase">
        <span className="text-clay">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  )
}