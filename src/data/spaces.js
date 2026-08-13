// The five spaces at The Square. `status: 'open'` renders a full detail page;
// 'coming-soon' renders the shared Coming Soon template.

export const spaces = [
  {
    slug: 'mays-table',
    name: "MAY's TABLE",
    thumb: '/img/mays.jpg',
    slide: '/img/slide1.png',
    number: '01',
    status: 'open',
  },
  {
    slug: 'nidahas',
    name: 'Nidahasa',
    thumb: '/img/nidahas.jpg',
    slide: '/img/slide2.png',
    number: '02',
    status: 'coming-soon',
  },
  {
    slug: 'sono',
    name: 'Sono',
    thumb: '/img/sono.jpg',
    slide: '/img/slide3.png',
    number: '03',
    status: 'coming-soon',
  },
  {
    slug: 'suisse-del',
    name: 'Suisse Deli',
    thumb: '/img/deli.jpg',
    slide: '/img/slide4.png',
    number: '04',
    status: 'coming-soon',
  },
  {
    slug: 'event-space',
    name: 'Event Space',
    thumb: '/img/space.jpg',
    slide: '/img/slide5.png',
    number: '05',
    status: 'coming-soon',
  },
]

// Homepage "Our Spaces" slider order (as it appears in the original index.html).
export const homeSpaceSlides = [
  { number: '01', text: "May's-Table", img: '/img/slide1.png', to: '/mays-table' },
  { number: '02', text: 'Nidahasa', img: '/img/slide2.png', to: '/nidahas' },
  { number: '03', text: 'Sono', img: '/img/slide3.png', to: '/sono' },
  { number: '04', text: 'Suisse Deli', img: '/img/slide4.png', to: '/suisse-del' },
  { number: '05', text: 'Event space', img: '/img/slide5.png', to: '/event-space' },
]

// Generic showcase slides reused on space detail pages.
export const showcaseSlides = [
  { number: '01', text: 'Boutique Hall', img: '/img/slide1.png' },
  { number: '02', text: 'Cafeteria', img: '/img/slide2.png' },
  { number: '03', text: 'Cafe Shop', img: '/img/slide3.png' },
]

export const getSpace = (slug) => spaces.find((s) => s.slug === slug)

export default spaces
