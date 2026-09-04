# Portfolio Audit — Round 2 (browser run, 2026-09-04)

Ran the live site (deepakd.online, same commit as local HEAD `348209d`) in the Claude browser at 1409x912 and 375x812, scrolled every section, read console + network, inspected the DOM at runtime, and re-read all six components, `ScrollStack`, `index.html`, `index.css`. Also ran `tsc -b` (clean), `oxlint src` (2 warnings, both in `ScrollStack`) and a production build.

No console errors and no failed requests. Everything below is either measured in the running page or read out of the source.

## P0 — breaks the point of the site

1. **The contact form throws messages away.** `ContactSection.handleSubmit` only does `e.preventDefault(); setSent(true)` — no network call at all — then shows "PACKET DELIVERED / Transmission registered successfully". A recruiter who fills it in believes they contacted you; nothing was sent. The Supabase client is wired up (`src/integrations/supabase/client.ts`) but imported by nothing.
   Fix: post to a Supabase table or edge function (or Formspree/Resend), add pending/error states, and never show success until the request resolves.

2. **All four "VIEW INITIATIVE" buttons go to your LinkedIn profile.** The field is literally named `githubUrl` in `ProjectsSection` but holds `https://linkedin.com/in/deepak-dongare` in all four entries. Four buttons, one destination, and the destination isn't the initiative.

3. **The stacking cards pin ~230px too high, so each card's header is cut off above the viewport.** Measured at `scrollY = 3300`: card tops sit at −96 / −34 / +10 px instead of the intended 137 / 165 / 193 px. `ScrollStack` records `initialTops` once in `useLayoutEffect`, before the Google fonts swap in and shrink the headline; the resize handler only flips `isMobile`, so on a desktop resize (or after any font/image reflow) the effect never re-runs and the math stays stale.
   Fix: re-measure after `document.fonts.ready`, on a `ResizeObserver`, and on width change — not only when the mobile breakpoint is crossed.

## P1 — real usability bugs

4. **Navigation disappears after the hero.** The `<header>`/`<nav>` lives inside `HeroSection` and scrolls away with it. The page is 8,826px on desktop and 12,011px on mobile with no nav and no back-to-top after the first screen. `index.css` even sets `--nav-height` and comments "anchor targets clear the fixed nav" — nothing is fixed. Lift the nav into `App`, make it sticky with a scrolled/condensed state.

5. **The mobile drawer doesn't lock the page.** `document.body.style.overflow = 'hidden'` has no effect because `<html>` is the scroll container — verified: the page scrolled from 0 to 600 with the drawer open. Background scrolls behind the overlay on iPhone. Lock the html element (or `position: fixed` on body with scroll restore).

6. **Drawer accessibility.** The toggle has no `aria-expanded`/`aria-controls`, focus is never moved into the drawer (stays on `body`), there's no Escape-to-close and no focus trap. The drawer defines an `exit` variant but isn't wrapped in `AnimatePresence`, so closing never animates. The button also has no `type="button"` (it defaults to `submit`).

7. **Custom cursor gap.** The hero applies `lg:cursor-none` to the whole section, but the gold dot only renders while the hero is ≥25% visible (`isInHero`). Scroll so the hero is ~20% in view and the pointer is invisible over visible hero area.

8. **Hash links jump, they don't glide.** Lenis doesn't intercept anchor clicks, so nav links snap instantly while wheel scrolling is smooth — two different feels. Use `lenis.scrollTo(target, { offset: -navHeight })` on nav clicks.

9. **Logo `href="#"`** leaves a bare `#` in the URL and isn't a real top target. Use `#hero` + `scrollTo(0)`.

10. **Headline text has no spaces between lines.** Each line is a `<span class="block">`, so the accessible name and the SEO text read `ENTERPRISECLOUD & IAMARCHITECT`, `9+ YEARS DRIVINGGLOBAL IT OPERATIONS.`, `INITIALIZETRANSMISSION.` Add whitespace or `aria-label` on the headings.

11. **Tap targets under 44px on mobile:** hamburger 40x32, logo 84x16. On the 375px card header, `01 //` wraps onto its own line above the category.

12. **JS animations ignore `prefers-reduced-motion`.** The CSS block in `index.css` only neutralises CSS animations/transitions; the framer-motion infinite loops (hero 10s scale breath, watermark float, About laser sweep) keep running. `ScrollStack` handles it correctly — do the same with `useReducedMotion()` elsewhere.

## P2 — performance

13. **1.88MB hero video downloads on phones.** `preload="auto"` on a mobile UA pulled 2,027KB total (hero.mp4 1,876KB + poster 94KB + portrait 57KB); FCP was 3.9s even on a fast desktop connection. Serve the poster only below `lg`, use `preload="metadata"`, add a WebM/AV1 source, and skip the video for reduced-motion / `Save-Data`.

14. **One 401KB JS chunk** (123KB gzip), no code splitting. framer-motion is most of it — `LazyMotion` + `domAnimation`, or lazy-loading the below-fold sections, would cut a lot.

15. **Dead weight in the repo:** `@supabase/supabase-js` plus the generated client and a 2,378-line `types.ts` (unused — tree-shaken out, but still shipped in the repo and the lockfile); `src/assets/about.png` (1.9MB), `watermark.png` (176KB), `hero.png` (16KB), `public/deepak-original.jpg` (104KB), `public/icons.svg` (8KB) — none referenced anywhere.

16. **`ScrollStack` leftovers:** the `isUpdatingRef` re-entrancy guard is a no-op in a synchronous function, `scaleDuration` is declared in the props interface and never used, `will-change: transform, filter` is left permanently on four full-width cards, and the two lint warnings (exhaustive-deps, ref-in-cleanup) both come from here.

## P3 — SEO, semantics, hygiene

17. **`og:image` is not yours.** `index.html` declares `twitter:card=summary_large_image` with no image; the host injects one pointing at a Lovable-generated screenshot on `pub-…r2.dev` tied to preview build `348209d`. Ship your own 1200x630 OG image from `/public` and declare `og:image` + `twitter:image` yourself.

18. **No `robots.txt`, no `sitemap.xml`** (both 404). Unknown paths (`/some-missing-page`) return **200** with the homepage — soft 404s that Google will index.

19. **Contact section is a `<footer>`** that contains the section `<h2>`, the form, *and* the real page footer line. Make it `<section id="contact">` with a separate `<footer>`.

20. **Form fields have no `<label>`, no `name`, no `autocomplete`.** The `// SENDER` / `// CHANNEL` / `// PAYLOAD` captions are `<span>`s; placeholders are the only cue and vanish on typing. Add real labels (visually styled the same) and `autocomplete="name email"`.

21. **`.env` is committed** (`git ls-files` lists it) and `.gitignore` doesn't cover it. Only the Supabase publishable key is in there, but it shouldn't be in history.

22. **Contrast:** bronze `#8C6D4F` on black is 4.2:1 — under 4.5 for the small mono numerals in the mobile drawer. Everything else measured 6.8:1 or better.

23. **Third-party analytics.** The host injects `/~flock.js` and beacons `POST /~api/analytics` on load. Fine if intended — worth knowing it's there since there's no notice on the page.

## Content calls (your judgement, not bugs)

- **"100% — ZERO TRUST & IAM"** isn't a metric; it reads as filler next to "9+ years" and "TISAX". Swap for something countable (users/tenants governed, endpoints hardened, apps onboarded to SSO).
- **Hero says "Enterprise Cloud & IAM Architect", everything else says IT Manager.** Recruiters search on the title you actually hold — consider aligning, or make the split deliberate.
- **The four "initiatives" have nothing to view.** Your real shippable projects (JobPilot, J.A.R.V.I.S. repo sync, this portfolio, the Claude skills suite) aren't on the site at all. A second row of "Builds" with GitHub links would make the section earn its CTA.
- **No availability/contact affordance after the hero** other than scrolling to the bottom — a persistent nav (item 4) fixes that too.

## Suggested order

1. Contact form actually sends (1) → correct the project links (2) → fix the stack measurement (3)
2. Sticky nav (4) → mobile drawer lock + a11y (5, 6) → cursor and anchor polish (7, 8, 9)
3. Headline spacing + labels + landmarks (10, 19, 20) → reduced motion (12) → tap targets (11)
4. Video/mobile payload (13) → bundle split (14) → delete dead assets and Supabase (15, 16)
5. OG image, robots, sitemap, 404 (17, 18) → `.env` out of git (21)
