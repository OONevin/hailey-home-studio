# Hailey Home Studio LLC — marketing website (preview build)

Static site: plain HTML/CSS with a little vanilla JS. No build step, no frameworks, no paid APIs.
Fonts load from Google Fonts (Cormorant Garamond + Jost, both free).
**Status: PREVIEW ONLY.** It hasn't been deployed, and no repo has been created.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Hero with tagline, intro, 4 service highlights, "How it works" strip (Concept & Specification → Sourcing → Ordering & Procurement → Installation), designers/builders/homeowners trio, portfolio teaser, CTA |
| `services.html` | Full-Service Design · Sourcing & Procurement · Custom Window Treatments (by appointment) · Trade Partnerships · Project Coordination through Installation |
| `about.html` | Hailey's story, written only from her launch post, plus a headshot placeholder |
| `portfolio.html` | 8-image gallery cropped from her Facebook posts |
| `contact.html` | Phone, email, Instagram, service area, and a FormSubmit consultation form |
| `thank-you.html` | Where the form sends visitors after they submit (noindex) |
| `404.html` | Not-found page (noindex) |

Other files: `css/styles.css`, `js/main.js` (mobile nav, sticky header, reveal-on-scroll, FormSubmit `_next`), `favicon.ico/.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`, `site.webmanifest`, `robots.txt`, `sitemap.xml`.

### Images (`images/`)
- `hs-monogram.svg` (plus `-ivory` and `-gold` versions): clean vector "HS" monogram, rebuilt from Cormorant Garamond letterforms in burgundy #7A1F2E
- `logo.svg`: full lockup (monogram + "HAILEY HOME STUDIO LLC")
- `logo-card.png`: tight crop of the logo from the business-card screenshot. This is reference only and is not used on the site.
- `og-image.jpg`: 1200×630 social share image
- Project crops: `kitchen-pendants.jpg`, `tile-backsplash.jpg`, `roman-shade-floral.jpg`, `roman-shade-print.jpg`, `drapery-pattern.jpg`, `drapery-sheer.jpg`, `checkerboard-tile.jpg`, `checkerboard-tile-2.jpg`

> **⚠ Image quality note:** All project photos are crops from **phone screenshots of Facebook posts**. They're low resolution, with the collage tiles only about 537 px wide, and the screenshots added compression. That's why the site shows them at modest sizes. **Before launch, get full-size originals from Hailey** and replace the files under the same names (or update the `src` values).

## Still needed from the client
1. **Full-resolution original photos** of every project shown, and any other projects she wants featured. Please include a few landscape shots for the hero.
2. **A professional headshot** for `about.html`. A striped placeholder box is there now (`.headshot`).
3. **Confirm the `hailey@haileyhomestudio.com` inbox is live.** FormSubmit sends a one-time activation email to that address after the first real submission. The form won't deliver anything until Hailey clicks the activation link. (Optional: once it's activated, swap the email in the form `action` for the random FormSubmit alias to hide the address from scrapers.)
4. Approval of all copy. Every line comes from her business card and Facebook posts, with nothing invented: no testimonials, stats, awards, or credentials beyond "11 years."
5. Optional: the original vector logo file, if she has one. The SVG monogram here is a close recreation, not her designer's master file.
6. Confirm the domain (`haileyhomestudio.com`) and who hosts it. Canonical URLs, Open Graph tags, the sitemap, and JSON-LD all assume `https://haileyhomestudio.com/`.

## Form details (FormSubmit)
- `action="https://formsubmit.co/hailey@haileyhomestudio.com"`, `method="POST"`
- Hidden fields: `_subject`, `_captcha=false`, `_template=table`, `_next` (JS sets this to `<current origin>/thank-you.html`), and the `_honey` honeypot
- Fields: name, email, phone, I am a (Homeowner/Designer/Builder/Other), project type, message

## Preview locally
```
cd hailey-home-studio && python3 -m http.server 8000
# open http://localhost:8000
```
Screenshots from headless Chromium are in `preview/`.

## Deploy package
`../hailey-home-studio-netlify.zip` holds the site files at the zip root, without `preview/` or this README. You can drag it straight into Netlify Drop once it's approved.
