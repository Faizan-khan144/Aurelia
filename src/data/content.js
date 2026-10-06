export const img = (id, w = 1600, q = 68) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`

export const heroSlides = [
  {
    id: '1566073771259-6a8506099945',
    kicker: 'Amalfi · Italy',
    title: 'Nine rooms above the water',
    note: 'A 1904 captain’s house, restored slowly.',
  },
  {
    id: '1582719478250-c89cae4dc85b',
    kicker: 'Salt air, no hurry',
    title: 'Wake to the tide, not a clock',
    note: 'Breakfast is served until you arrive.',
  },
  {
    id: '1571003123894-1f0594d2b5d9',
    kicker: 'Open all year',
    title: 'The sea does the entertaining',
    note: 'Boats, books and long empty afternoons.',
  },
]

export const stats = [
  { value: 9, suffix: '', label: 'Rooms, no more' },
  { value: 1904, suffix: '', label: 'The house was built' },
  { value: 40, suffix: 'm', label: 'To the waterline' },
  { value: 24, suffix: 'h', label: 'Someone is always here' },
]

export const rooms = [
  {
    name: 'The Chart Room',
    tag: 'Sea view',
    price: 240,
    size: '32 m²',
    bed: 'Queen',
    guests: 2,
    blurb: 'Old maps still hang above the desk. Morning light comes in sideways.',
    id: '1590490360182-c33d57733427',
  },
  {
    name: 'Harbour Loft',
    tag: 'Corner suite',
    price: 385,
    size: '54 m²',
    bed: 'King',
    guests: 3,
    blurb: 'Two walls of glass. The fishing boats leave around five.',
    id: '1611892440504-42a792e24d32',
  },
  {
    name: 'The Lime Wash',
    tag: 'Garden',
    price: 195,
    size: '26 m²',
    bed: 'Double',
    guests: 2,
    blurb: 'Ground floor, cool stone, a fig tree outside the shutters.',
    id: '1618773928121-c32242e63f39',
  },
  {
    name: 'Captain’s Quarters',
    tag: 'Terrace',
    price: 520,
    size: '70 m²',
    bed: 'King',
    guests: 4,
    blurb: 'The whole top floor, a private terrace and the best view we have.',
    id: '1584132967334-10e028bd69f7',
  },
]

export const rituals = [
  {
    title: 'The long table',
    blurb: 'One seating each evening. Whatever the boats brought in, cooked over wood.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Cold water swimming',
    blurb: 'A ladder down the rocks, towels on the wall, no lifeguard and no clock.',
    icon: 'Waves',
  },
  {
    title: 'The reading room',
    blurb: 'Four hundred books, a wood stove in winter and nobody allowed to talk loudly.',
    icon: 'BookOpen',
  },
  {
    title: 'Boat days',
    blurb: 'Take the wooden dinghy out. It comes back with fuel and a warning.',
    icon: 'Sailboat',
  },
  {
    title: 'Nothing at all',
    blurb: 'The terrace was built for this. Shade at noon, sun by four.',
    icon: 'Sun',
  },
]

export const testimonials = [
  {
    quote:
      'We came for three nights and cancelled the rest of the trip. I have never been so reluctant to leave a place.',
    name: 'Nadia Haddad',
    role: 'Second visit',
    initials: 'NH',
  },
  {
    quote:
      'There is no reception desk, no key card, no upsell. Someone meets you at the gate and shows you where the good swimming is.',
    name: 'Tomás Ferreira',
    role: 'Lisbon',
    initials: 'TF',
  },
  {
    quote:
      'Dinner on the first night set the tone: eight strangers, one long table, and fish I still think about.',
    name: 'Marguerite Voss',
    role: 'Berlin',
    initials: 'MV',
  },
]

export const journal = [
  {
    date: '14 May',
    kicker: 'The house',
    title: 'Why we only have nine rooms',
    read: '4 min',
    id: '1445019980597-93fa8acb246c',
  },
  {
    date: '02 Apr',
    kicker: 'Kitchen',
    title: 'Cooking with whatever the boats bring in',
    read: '6 min',
    id: '1540541338287-41700207dee6',
  },
  {
    date: '19 Feb',
    kicker: 'Seasons',
    title: 'The month the sea turns silver',
    read: '3 min',
    id: '1520250497591-112f2f40a3f4',
  },
]

export const gallery = [
  { id: '1551882547-ff40c63fe5fa', alt: 'Terrace looking out to the water', span: 'tall' },
  { id: '1578683010236-d716f9a3f461', alt: 'A room in afternoon light', span: 'wide' },
  { id: '1566073771259-6a8506099945', alt: 'The house from the harbour', span: '' },
  { id: '1618773928121-c32242e63f39', alt: 'Lime-washed wall and shutters', span: '' },
  { id: '1611892440504-42a792e24d32', alt: 'Corner of the loft suite', span: 'wide' },
  { id: '1584132967334-10e028bd69f7', alt: 'The captain’s terrace', span: 'tall' },
]

export const navLinks = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'The house', href: '#house' },
  { label: 'Days here', href: '#rituals' },
  { label: 'Journal', href: '#journal' },
]