// Central place for global site details (contact info, social links, footer copy).
// Edit these once and every component that consumes them updates.

export const site = {
  name: 'The Square',
  tagline: 'WHERE COLOMBO COMES TOGETHER.',
  description: 'Dining. Culture. Connection. Experiences.',
  copyright: `Copyright © ${new Date().getFullYear()} - The Square - All Rights Reserved.`,
  // Phone, email and opening hours for The Square are still to be supplied by
  // the client; anything left empty is hidden on the site.
  contact: {
    phone: '',
    email: '',
    hours: '',
    address: ['Arcade Clock Tower Building', 'Independence Square', 'Colombo 07', 'Sri Lanka'],
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61559923762186',
    instagram: 'https://www.instagram.com/the_square_by_col_7/',
    linkedin: 'https://www.linkedin.com',
  },
  // Google Maps embed (Arcade Independence Square) used in the contact sections.
  map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.594034908856!2d79.8688116!3d6.9027394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c71921dab%3A0x8fe1cd648229bc6e!2sArcade%20Independence%20Square!5e0!3m2!1sen!2slk!4v1721918879079!5m2!1sen!2slk',
}

export default site
