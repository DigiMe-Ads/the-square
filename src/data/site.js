// Central place for global site details (contact info, social links, footer copy).
// Edit these once and every component that consumes them updates.

export const site = {
  name: 'The Square',
  tagline: 'A dynamic urban retreat in the heart of Colombo.',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat, maxime deleniti ad aspernatur quasi voluptates, quia placeat consectetur nemo nesciunt ipsa',
  copyright: `Copyright © ${new Date().getFullYear()} - The Square - All Rights Reserved.`,
  contact: {
    phone: '+94770000000',
    email: 'info@ruwaana.lk',
    address: ['xxx xxxxxxx xxxxxxxx xxxxxxxx', 'xxxxxxxxxxx xxxxxxxx xxxx', 'xxxxxx xxxxxxx xxxxx'],
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61559923762186',
    instagram: 'https://www.instagram.com/the_square_by_col_7/',
    linkedin: 'https://www.linkedin.com',
  },
  // Google Maps embeds used across the contact sections.
  map: {
    home: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.594034908856!2d79.8688116!3d6.9027394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c71921dab%3A0x8fe1cd648229bc6e!2sArcade%20Independence%20Square!5e0!3m2!1sen!2slk!4v1721918879079!5m2!1sen!2slk',
    default:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19960.636308852434!2d79.88478435543175!3d6.927222248898171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590f7091a3d5%3A0x7ca577bcaa960c1f!2sMaradana%20Railway%20Station!5e0!3m2!1sen!2slk!4v1719141366063!5m2!1sen!2slk',
  },
}

export default site
