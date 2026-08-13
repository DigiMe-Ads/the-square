# The Square — React

A React (Vite) rebuild of the original static **The Square** website — a dynamic
urban retreat in the heart of Colombo. The multi-page HTML site was converted
into a single-page React app broken into reusable, scalable components.

---

## Tech stack

| Concern      | Choice                                  |
| ------------ | --------------------------------------- |
| Build tool   | [Vite](https://vitejs.dev) 8            |
| UI           | React 19 (JavaScript / JSX)             |
| Routing      | react-router-dom 7 (`BrowserRouter`)    |
| Sliders      | [Swiper](https://swiperjs.com)          |
| Lightbox     | yet-another-react-lightbox              |
| Styling      | The original `style.css`, kept as-is    |

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

---

## Project structure

```
the-square/
├── public/                 # static assets served as-is
│   ├── img/                # all images (copied from the original site)
│   ├── video/              # hero video
│   ├── favicon.ico
│   └── .htaccess           # SPA fallback + caching for Apache/Namecheap
├── index.html              # HTML shell (fonts + Font Awesome + favicon)
└── src/
    ├── main.jsx            # entry: Router + ReservationProvider + global CSS
    ├── App.jsx             # route table
    ├── styles/
    │   ├── style.css       # original global stylesheet (unchanged rules)
    │   └── overrides.css   # per-page styles that were inline in the old HTML
    │                       #   + a small Swiper→slick bridge
    ├── context/
    │   └── ReservationContext.jsx   # global reservation-modal open/close state
    ├── data/               # all content lives here — edit these, not the JSX
    │   ├── site.js         # contact info, socials, map embeds, copyright
    │   ├── navigation.js   # dropdown + footer links, space thumbnails
    │   ├── spaces.js       # the five spaces + slider slide lists
    │   ├── blogPosts.js    # blog articles (title, excerpt, body paragraphs)
    │   ├── events.js       # events listing
    │   ├── faqs.js         # FAQ questions/answers
    │   └── gallery.js      # gallery images for space pages
    ├── components/
    │   ├── layout/         # Navbar, Footer, Layout, ScrollToTop
    │   ├── common/         # ReservationModal, ContactSection, PageBanner,
    │   │                   #   ComingSoon
    │   ├── home/           # HeroBanner, CreativeSection, SpacesSlider,
    │   │                   #   BlogNewsSection
    │   ├── spaces/         # SpaceIntro, OpeningHours, Gallery, ShowcaseSlider
    │   └── blog/           # BlogCard
    └── pages/              # one component per route
        ├── Home.jsx
        ├── Spaces.jsx
        ├── About.jsx
        ├── Blog.jsx
        ├── BlogPost.jsx    # data-driven by :slug
        ├── Events.jsx
        ├── Faqs.jsx
        ├── MaysTable.jsx
        └── SpaceComingSoon.jsx
```

### Routes

| Path                | Page                                   |
| ------------------- | -------------------------------------- |
| `/`                 | Home                                   |
| `/about`            | About                                  |
| `/spaces`           | Spaces index                           |
| `/mays-table`       | May's Table (open space)               |
| `/nidahas` `/sono` `/suisse-del` `/event-space` | Coming Soon spaces |
| `/blog`             | Blog listing                           |
| `/blog/:slug`       | Single blog post                       |
| `/events`           | Events                                 |
| `/faqs`             | FAQ                                    |
| `*`                 | redirects to Home                      |

---

## Editing content

Almost all copy and imagery is data-driven. To add a blog post, append an object
to `src/data/blogPosts.js`; it automatically appears on the Blog page and the
home "Blog & News" block. To open a "Coming Soon" space, change its `status` to
`'open'` in `src/data/spaces.js` and give it a real page. New images go in
`public/img/` and are referenced as `/img/your-file.png`.

---

## Deploying to Namecheap shared hosting

Yes — this site can be hosted directly on Namecheap. A Vite build produces plain
static files (HTML/CSS/JS), which cPanel/Apache shared hosting serves natively.
No Node.js runtime is required on the server.

1. Build the site:

   ```bash
   npm run build
   ```

2. Upload **the contents of `dist/`** (not the folder itself) into `public_html`
   on Namecheap — via cPanel File Manager or FTP. Make sure the included
   **`.htaccess`** file is uploaded too (enable "show hidden files" in File
   Manager). It rewrites every route back to `index.html` so React Router works
   on refresh/deep links, and adds gzip + long-cache headers.

3. Visit your domain — done.

**Deploying under a subfolder** (e.g. `yourdomain.com/the-square/`): set
`base: '/the-square/'` in `vite.config.js`, add `basename="/the-square"` to
`<BrowserRouter>` in `src/main.jsx`, change `RewriteBase` in `.htaccess` to
`/the-square/`, then rebuild.

> Note: the reservation, contact, and newsletter forms are front-end only (they
> validate and reset, matching the original site). Wire them to an email service
> or backend endpoint when you're ready to collect submissions.
