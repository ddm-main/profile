# Portfolio Audit: Bug Fixes + Improvements

Audited the live preview at 1440px and 390px (scrolled through every section), read all six section components, `ScrollStack`, `index.html`, `index.css`, and Tailwind/TS config. No console errors or runtime exceptions were logged — the problems are layout, scroll-engine, performance, and semantics.

## Confirmed bugs (fix first)

1. **Giant empty voids in the Projects deck.** The section measures 3441px on desktop / 3922px on mobile, with a screen-and-a-half of blank black above the first card. Cause: `ScrollStack` adds a 40vh bottom runway plus per-card pin translation, while the section itself also carries `pt-16/pb-32`. The stack math and the section padding are double-counting space.
2. **Scaled cards are clipped.** The Projects section wrapper has `overflow-hidden`, which cuts the shadow/scale halo of the stacking cards during the pin.
3. **Two competing scroll engines.** `html { scroll-behavior: smooth }` in `index.css` plus a global Lenis instance inside `ScrollStack` both drive the same scroll. Anchor nav (`#about`, `#work`, `#skills`, `#experience`, `#contact`) fights the smooth-scroll hijack, and there is no scroll offset for the fixed nav.
4. **`ScrollStack` reaches outside its own tree.** It calls `document.querySelectorAll('.scroll-stack-card')` and `document.querySelector('.scroll-stack-end')` globally instead of scoping to its own ref — a second stack anywhere on the page silently breaks both.
5. **Hero has no video fallback.** The hero is a single `<video src="/videos/hero.mp4">` with no `poster`, no `loop`, and no image fallback. On any browser that blocks autoplay or fails the 1.9MB fetch, the hero right half renders as pure black — which is exactly how it appears when video playback is unavailable.
6. **`100vh` on mobile.** Hero and About use `min-h-screen` / `h-screen`, so mobile browser chrome causes a jump-and-clip. Should be `dvh`.
7. **Custom cursor leaks.** The `fixed` cursor dot is rendered from the Hero but never unmounts, so it floats over every later section while those sections still show the native cursor.
8. **Focus is invisible.** The mobile menu button uses `focus:outline-none` with no `focus-visible` replacement; no other interactive element has a visible focus ring. Keyboard users cannot see where they are.

## Performance and asset cleanup

9. **Four separate font loads.** `index.html` has three duplicated Google Fonts `<link>` blocks and `index.css` adds a fourth `@import` — pulling Bebas Neue, Montserrat, Cinzel, Great Vibes, Allura, Herr Von Muellerhoff, and Cormorant Garamond. Only Bebas Neue, Montserrat, and one script face are actually used. Consolidate to a single non-blocking request.
10. **Dead 1.2MB of images.** `public/deepak-executive.jpg` (611KB) and `public/deepak-walking.jpg` (610KB) are unreferenced; `resume.pdf` and `Deepak_Dongare_Resume.pdf` are byte-identical duplicates. Images that are used lack `width`/`height` and `loading`/`decoding` hints.
11. **Config mismatch.** The project runs Tailwind v4 (`@import "tailwindcss"` + `@tailwindcss/vite`), but a v3-style `tailwind.config.js` with a `content` array sits in the root doing nothing — misleading and a trap for future edits.
12. **Dead state.** `SkillsSection` keeps `const [, setHoveredIdx] = useState(...)` whose value is never read.

## Design-system and SEO improvements

13. **No design tokens.** Every colour is a raw hex (`#D4AF37`, `#E8DFD8`, `#0E0C0A`, …) repeated across six files, and every heading re-declares `style={{ fontFamily: "'Bebas Neue'" }}` inline. Promote the gold/ivory/char palette and the two type roles to CSS custom properties in `index.css` and use them everywhere, so the theme is changeable in one place.
14. **Semantics and a11y.** Add a skip link, wrap the nav in a real `<header>`/`<nav>` landmark pair, give the decorative insignia an empty `alt`, verify one `<h1>` and ordered headings, and honour `prefers-reduced-motion` for the looping scale/float animations and the Lenis smooth scroll.
15. **SEO head is incomplete.** No `og:*`/`twitter:card` tags, no canonical, no `Person` JSON-LD. Title and description are already good.

## Suggested order

```text
Pass 1  bugs 1-4   scroll engine + Projects spacing (largest visible win)
Pass 2  bugs 5-8   hero fallback, dvh, cursor scope, focus rings
Pass 3  9-12       fonts, assets, config, dead code
Pass 4  13-15      tokens, a11y, SEO head
```

## Technical notes

- `ScrollStack` refactor: scope card lookup to `scrollerRef`, derive the runway from measured card heights instead of a fixed `40vh`, disable Lenis when `prefers-reduced-motion` is set, and drop `scroll-behavior: smooth` from `index.css` so anchors are handled once (programmatic scroll with a nav-height offset).
- No changes to content, copy, or the visual identity — this pass is correctness, performance, and tokenisation only. If you also want a fresh visual direction for any section, say which one and I'll run design directions for it separately.
