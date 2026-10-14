// The four spaces at The Square. Every space renders through the shared
// SpaceDetail page; optional fields (email, menuUrl, gallery…) are simply
// skipped when missing. `logo` is the square brand tile used in the menu and
// on the Spaces page; spaces without one get a text tile in `tileColor`.
import { maysGallery } from './gallery'

const LOCATION_GF = 'Ground Floor, Arcade Clock Tower Building, Independence Square, Colombo 07'

export const spaces = [
  {
    slug: 'mays-table',
    name: "MAY's TABLE",
    logo: '/img/mays.jpg',
    slide: '/img/slide1.png',
    image: '/img/table.png',
    number: '01',
    // Home "Explore The Square" card
    tagline: "Authentic Thai. Distinctively MAY's.",
    summary:
      'Experience the vibrant flavours of Thailand through authentic dishes, traditional techniques and carefully selected ingredients.',
    cta: "Explore MAY's Table",
    // Detail page
    heading: 'AUTHENTIC THAI. AT THE HEART OF COLOMBO.',
    body: [
      "At MAY's Table, Thai cuisine is celebrated in its most authentic form.",
      "Inspired by Thailand's rich culinary heritage, the menu brings together bold flavours, aromatic herbs, traditional techniques and carefully selected ingredients.",
      'From comforting classics to vibrant street-food favourites, every dish is created to capture the balance of sweet, sour, salty, spicy and umami that defines Thai cuisine.',
      "Whether you're joining us for lunch, dinner, a casual gathering or a special occasion, MAY's Table invites you to experience the depth and diversity of Thai food.",
    ],
    hours: ['Monday – Sunday', '11:30 AM – 11:00 PM'],
    phone: '+94 77 233 0707',
    email: 'mays@colomboseven.com',
    menuUrl: 'https://www.mayspattaya.com/mays-table',
    reservable: true,
    gallery: maysGallery,
  },
  {
    slug: 'nidahas',
    name: 'NIDAHAS',
    logo: '/img/nidahas.jpg',
    slide: '/img/slide2.png',
    image: '/img/slide2.png',
    number: '02',
    tagline: 'A space rooted in Sri Lankan spirit.',
    summary: 'Discover a new expression of local culture, flavour and contemporary hospitality.',
    note: 'Opening details to be confirmed.',
    cta: 'Discover Nidahas',
    heading: 'WHERE COLOMBO COMES TOGETHER AFTER DARK.',
    body: [
      'NIDAHAS is a distinctive bar and social destination at The Square, created for good drinks, great conversations and memorable evenings.',
      'With its relaxed atmosphere and vibrant social character, NIDAHAS offers a place to unwind, meet friends and enjoy the night at your own pace.',
      "Whether you're dropping in for an after-work drink, catching up with friends or settling in for an evening out, NIDAHAS brings a different energy to The Square.",
      'Come for the drinks. Stay for the atmosphere. Make it a night to remember.',
    ],
    // Hours and email are pending client confirmation.
    hours: ['Opening details to be confirmed.'],
    phone: '+94 76 671 2348',
    location: LOCATION_GF,
    contactCta: 'Contact Nidahas',
  },
  {
    slug: 'summer-colombo',
    name: 'SUMMER COLOMBO',
    // Placeholder imagery until Summer Colombo brand assets are supplied.
    tileColor: '#1f4e5a',
    slide: '/img/slide3.png',
    image: '/img/slide3.png',
    number: '03',
    tagline: 'A Contemporary Dining Experience',
    summary:
      'A vibrant destination for good food, relaxed moments and memorable gatherings in the heart of Colombo.',
    cta: 'Explore Summer',
    heading: 'THE TASTE OF SUMMER, ALL YEAR ROUND.',
    body: [
      'Summer Colombo brings a fresh, contemporary dining experience to the heart of Colombo 07.',
      'Inspired by the relaxed elegance of a modern Parisian brasserie, the space brings together all-day dining, brunch favourites, artisanal coffee, handcrafted desserts and contemporary comfort food.',
      'From breakfast and leisurely brunches to business lunches, coffee catch-ups and relaxed dinners, Summer Colombo is designed to make every visit feel effortless.',
      'With stylish surroundings, thoughtfully prepared food and a warm, welcoming atmosphere, it is a place to meet, unwind and enjoy the moment — whatever the time of day.',
    ],
    hours: ['Monday – Sunday', '8:00 AM – 10:00 PM'],
    phone: '+94 77 134 0608',
    location: LOCATION_GF,
    reservable: true,
  },
  {
    slug: 'barista',
    name: 'BARISTA',
    // Placeholder imagery until Barista brand assets are supplied.
    tileColor: '#3b2a20',
    slide: '/img/slide4.png',
    image: '/img/slide4.png',
    number: '04',
    tagline: 'Coffee & Café',
    summary:
      'Your everyday coffee destination at Independence Square — from expertly brewed coffee to relaxed catch-ups and easy moments.',
    cta: 'Explore Barista',
    heading: 'YOUR COFFEE. YOUR MOMENT.',
    body: [
      'Barista brings its signature café experience to the heart of Independence Square.',
      "Whether you're starting your morning, taking a break from the day or meeting someone over coffee, Barista offers a welcoming space to enjoy your favourite brews and everyday café moments.",
      'Set within the heritage surroundings of Arcade Independence Square, this Barista location combines the character of its historic setting with the familiar modern café experience the brand is known for.',
    ],
    hours: ['Monday – Sunday', '7:00 AM – 10:00 PM'],
    phone: '+94 11 351 8966',
    location: 'No. CT/GF/3A, Arcade – Independence Square, Colombo 07',
    contactCta: 'Visit Barista',
  },
]

export const getSpace = (slug) => spaces.find((s) => s.slug === slug)

export default spaces
