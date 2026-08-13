// Blog posts. `body` is an array of paragraphs so a single BlogPost page
// component can render any post by slug. Add a new object here to publish a post.

export const blogPosts = [
  {
    slug: 'mays-urban-thai-dine-arrives-in-sri-lanka',
    title:
      "MAYs Urban Thai Dine: From Pattaya Streets to Colombo's Heart - A Global Culinary Sensation Arrives in Sri Lanka!",
    excerpt:
      'In the vibrant world of international cuisine, few stories are as inspiring as that of MAYs Urban Thai Dine.',
    image: '/img/gallery_a.png',
    body: [
      "In the vibrant world of international cuisine, few stories are as inspiring as that of MAYs Urban Thai Dine. Born from humble beginnings on the streets of Pattaya, Thailand, this remarkable franchise has blossomed into a global culinary phenomenon, bringing the authentic flavors of urban Thai cuisine to food lovers across continents.",
      "The heart and soul of MAYs is its founder, Ms. May. Hailing from a farmer family in northeastern Thailand, May's journey is a testament to the power of determination and passion. Starting as a clothes seller in Bangkok at 19, she found her true calling in hospitality. After a decade of climbing the corporate ladder, May yearned to create something uniquely her own – a dining experience that matched global standards in quality but was infused with love and personality.",
      'In 2014, armed with nothing but her culinary skills and an unwavering vision, May took to the streets of Pattaya with a simple food stall. Her urban refined street food quickly captured the hearts and palates of locals and tourists alike. Long queues became a common sight, sometimes stretching for over an hour. This initial success laid the foundation for what would become the MAYs Urban Thai Dine empire.',
      "The evolution of MAYs has been nothing short of remarkable. From its first proper restaurant in Pattaya in 2016 to its international debut in Bali, Indonesia in 2017, MAYs has consistently pushed the boundaries of Thai cuisine. The brand's expansion into Vietnam in 2018, with locations in Ho Chi Minh City, further cemented its status as a rising star in the Asian culinary scene.",
      "What sets MAYs apart is its unique blend of traditional Thai flavors with a contemporary urban twist. Each restaurant is a carefully crafted experience, with interiors that reflect the local setting while maintaining the brand's signature style. Whether it's the contemporary-floral ambiance of a city standalone location or the industrial-floral decor of a business district outlet, MAYs creates an immersive dining atmosphere that complements its exquisite cuisine.",
      "From its humble street food origins to its current status as a global culinary brand, MAYs Urban Thai Dine continues to captivate diners with its unique blend of traditional Thai flavors and contemporary flair. As it expands its reach, MAYs doesn't just bring a taste of Thailand to the world – it brings a piece of Ms. May's dream, shared with food lovers everywhere.",
    ],
  },
  {
    slug: 'essence-of-thailand-thai-cuisine',
    title:
      'The Essence of Thailand: Exploring the Rich Tapestry of Thai Cuisine with MAYs Urban Thai Dine.',
    excerpt:
      'Thai cuisine, with its vibrant flavors and aromatic herbs, has captured the hearts and palates of food lovers worldwide.',
    image: '/img/gallery_b.png',
    body: [
      "Thai cuisine, with its vibrant flavors and aromatic herbs, has captured the hearts and palates of food lovers worldwide. As MAYs Urban Thai Dine brings its culinary expertise to new shores, it's an opportune moment to explore the rich tapestry of Thai cuisine and its potential resonance with Sri Lankan taste buds.",
      "At its core, Thai cuisine is a harmonious balance of five fundamental flavors: sweet, sour, salty, bitter, and spicy. This complex interplay of tastes is achieved through the skillful use of ingredients like palm sugar, tamarind, fish sauce, bitter herbs, and fiery chilies. It's a culinary philosophy that finds surprising parallels in Sri Lankan cuisine, where a similar emphasis on balanced, bold flavors prevails.",
      'One of the cornerstones of Thai cooking is the use of fresh herbs and aromatics. Lemongrass, galangal, kaffir lime leaves, and Thai basil are just a few of the ingredients that lend Thai dishes their distinctive fragrance and flavor. These aromatics might find a welcoming audience in Sri Lanka, where spices and herbs like curry leaves, pandan, and rampe are integral to the local cuisine.',
      'The Thai love for coconut milk in curries and desserts is another aspect that might resonate with Sri Lankan diners. Both cuisines use coconut milk to add richness and depth to their dishes, creating a creamy base for spices to shine. The Thai green curry, with its vibrant color and complex flavor profile, could be an exciting discovery for those accustomed to Sri Lankan coconut milk-based curries.',
      'Seafood plays a crucial role in Thai cuisine, particularly in coastal regions. From tangy tom yum soup loaded with shrimp to whole fish steamed with lime and garlic, Thai seafood dishes celebrate the bounty of the sea. This focus on fresh, flavorful seafood aligns well with Sri Lankan coastal cuisine, where fish curry is a staple and seafood is highly prized.',
      'Rice, the foundation of many Asian cuisines, holds a place of honor in both Thai and Sri Lankan kitchens. While jasmine rice is the Thai staple, the fragrant red and white rice varieties of Sri Lanka could provide an interesting local twist to Thai dishes.',
      "Street food culture is another area where Thai and Sri Lankan cuisines find common ground. The vibrant street food scene in Thailand, which inspired the creation of MAYs Urban Thai Dine, mirrors the lively street food traditions of Sri Lanka. From Thailand's pad thai to Sri Lanka's kottu roti, both cultures celebrate quick, flavorful dishes enjoyed in bustling urban settings.",
      'As MAYs Urban Thai Dine introduces its unique brand of urban Thai cuisine to new audiences, it brings with it an opportunity for culinary exploration and cultural exchange. The similarities between Thai and Sri Lankan flavor profiles suggest that MAYs’ offerings could find an appreciative audience among Sri Lankan food lovers.',
      'From the streets of Pattaya to the global stage, MAYs Urban Thai Dine has demonstrated the universal appeal of Thai cuisine. As it continues to expand, it not only brings the authentic tastes of Thailand to the world but also opens up exciting possibilities for fusion and innovation, blending local tastes with Thai culinary traditions. In this gastronomic journey, food becomes a bridge between cultures, offering a delicious means of understanding and appreciating our shared love for bold, balanced flavors.',
    ],
  },
]

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug)

export default blogPosts
