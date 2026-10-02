# Hailey Home Studio LLC — marketing website (v2, "One call. Every vendor.")

Pure static site: plain HTML/CSS with a little vanilla JS. **No build step, no frameworks, no paid APIs.**
Fonts load from Google Fonts: **Fraunces** (display serif) + **Inter Tight** (grotesk), both free.

- Repo: https://github.com/OONevin/hailey-home-studio (GitHub Pages, branch `main`, root)
- Live preview: https://oonevin.github.io/hailey-home-studio/
- The v1 design is backed up outside the repo at `../hailey-home-studio-v1-backup/` and is also in git history.

All internal links and assets are **relative**, so the site works from the `/hailey-home-studio/` subpath and from a custom domain root.

## Design (v2)
- Palette: burgundy `#7A1F2E` (brand), off-white `#F7F3EE`, ink `#141112`, blush `#EBD8D2`, warm greige `#EFE8E0` / `#D8CFC4`.
- Oversized editorial type, thin rules, numbered sections, asymmetric grids, full-bleed imagery.
- Marquee of sourcing categories (cabinetry · tile · stone · lighting · plumbing fixtures · hardware · window treatments · drapery · flooring · appliances).
- Scroll reveals, hover states, spinning "One call · Every vendor" badge. All motion turns off under `prefers-reduced-motion`.
- Lightbox (native `<dialog>`) on every project image. Use arrow keys or the buttons to move between images and Esc to close. Without JS, each image link opens the full file.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Hero "One call. Every vendor.", full-bleed kitchen, category marquee, **01 For designers & the trade** (usual way vs. HHS way + 4 steps), **02 Meet Hailey / your single point of contact** (headshot), **03 Recent work** grid + full-bleed band, **04 Services**, **05 Who I work with**, CTA |
| `services.html` | Five services (Full-Service Design, Sourcing & Procurement, Custom Window Treatments by appointment, Trade Partnerships, Project Coordination), 4-step process, "What I source" category grid |
| `about.html` | Headshot + Hailey's story in first person, taken from her launch post |
| `portfolio.html` | Large editorial grid of all 8 project images, with lightbox |
| `contact.html` | Direct contact details + FormSubmit consultation form |
| `thank-you.html`, `404.html` | Utility pages (noindex) |

`css/styles.css`, `js/main.js` (mobile nav, sticky header, reveals, lightbox).

## Images (`images/`)
- `hailey-headshot.jpg` / `.webp`: 1200×1200, optimized from the client photo.
- Project photos: `kitchen-pendants.jpg`, `tile-backsplash.jpg`, `checkerboard-tile.jpg`, `checkerboard-tile-2.jpg`, `roman-shade-floral.jpg`, `roman-shade-print.jpg`, `drapery-pattern.jpg`, `drapery-sheer.jpg`.
- **Swapping in full-size originals:** overwrite the files in `images/` with **the same filenames**. Every grid cell uses `object-fit: cover` inside a fixed-height or aspect-ratio box, and each lightbox link points at the same file. Larger originals drop straight in and get sharper with no HTML changes. Update the `width`/`height` attributes if you want them exact; they only prevent layout shift.
- The current photos are crops from phone screenshots of Facebook posts (about 537–1080 px wide). The layout keeps every image at or below roughly 1.5× its native size at 1280 px and caps full-bleed bands at 1620 px.
- Monograms/logo: `hs-monogram*.svg`, `logo.svg`; `og-image.jpg` (1200×630) for social sharing.

## Form (FormSubmit)
- `action="https://formsubmit.co/hailey@haileyhomestudio.com"`, `method="POST"`
- Hidden: `_subject`, `_captcha=false`, `_template=table`, `_honey` honeypot, and
  `_next = https://oonevin.github.io/hailey-home-studio/thank-you.html`
- **⚠ When the `haileyhomestudio.com` domain is connected, change `_next` in `contact.html` to `https://haileyhomestudio.com/thank-you.html`.**
- FormSubmit sends a one-time activation email to the inbox after the first real submission. Hailey has to click it before any messages are delivered.

## URLs / SEO
Canonical, Open Graph, JSON-LD, `sitemap.xml` and `robots.txt` all point at `https://haileyhomestudio.com/`, which is the intended production domain. Leave them as they are. If the domain is connected through GitHub Pages, add a `CNAME` file containing `haileyhomestudio.com`.

## Still needed from the client
1. Full-resolution originals of every project photo, plus any new projects. Landscape shots are best for the full-bleed bands.
2. Approval of all copy. Nothing is invented: no vendor names, clients, testimonials, stats, pricing or awards. "11 years" is the only figure.
3. Confirm the `hailey@haileyhomestudio.com` inbox is live (needed for FormSubmit activation).
4. Optional: the original vector logo file.

## Preview locally
```
cd hailey-home-studio && python3 -m http.server 8000   # open http://localhost:8000
```
Headless-Chromium screenshots are in `preview/` (git-ignored).

## Deploy package
`../hailey-home-studio-netlify.zip` holds the site files at the zip root, without `preview/`, this README or `.git`.
