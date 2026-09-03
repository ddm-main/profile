# Deepak Dongare — Portfolio

Personal portfolio for **Deepak Dongare**, IT Manager (Identity & Access
Management and Data Security) at RealThingks GmbH, Pune.

**Next.js 16 (App Router) · TypeScript · SCSS Modules · Framer Motion**

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Dev server with hot reload on port 3000         |
| `npm run build`     | Production build                                |
| `npm start`         | Serve the production build (needs Node)         |
| `npm run typecheck` | `tsc --noEmit`                                  |

## Architecture

```
src/
  app/
    layout.tsx            fonts, metadata, viewport
    page.tsx              section composition
    globals.scss          reset + base type
    icon.svg              favicon
    api/contact/route.ts  Node endpoint for the contact form
  components/
    Backdrop/             fixed gradient field every glass panel sits on
    Nav/                  sticky bar + full-screen mobile sheet
    Hero/                 scroll-pinned portrait, kinetic headline swap
    About/                bento grid — intro, portrait, stats, principles
    Marquee/  Stack/  Experience/  Work/  Contact/  Footer/
    ui/                   Reveal, TiltCard, Counter
  styles/
    _tokens.scss          palette, type, spacing, radii, breakpoints
    _mixins.scss          glass(), gradient-border(), gutter(), up()/down()
    _core.scss            forwarded into every module automatically
  data/profile.ts         all site content, one file
public/                   portrait images
```

### Styling

Every component owns a `*.module.scss`. There are no utility classes in the
markup. `next.config.ts` injects `@use "@/styles/_core" as *` into each module
via `sassOptions.additionalData`, so tokens and mixins are available without an
import in every file.

The surface language is one mixin — `glass()` in `_mixins.scss`. Change the
alpha and blur there and every panel on the site follows.

### The contact form

`POST /api/contact` is a real Node route handler: it validates server-side,
rate-limits per IP (5/minute), and carries a honeypot field. No mail provider is
wired up yet — messages are logged server-side and the client falls back to
`mailto:` if the endpoint is unreachable. Drop Resend/SendGrid/SMTP into
`route.ts` and the form starts delivering with no UI change.

## Editing content

Everything — copy, skills, roles, projects, the three headline words that swap
across the hero — lives in `src/data/profile.ts`. The hero words are auto-sized
to their own character count, so longer phrases still fit the viewport.

## Photos

`public/deepak-cut.webp` is the background-removed cutout used in the hero.
`public/deepak-portrait.webp` is the framed shot in the bento grid. Replace
either file, keep the name.

## Deploying

This is a Node application, not a static bundle — the `/api/contact` route needs
a server. Deploy to Vercel (zero config) or run `npm run build && npm start`
behind a reverse proxy.

> **Note:** GitHub Pages cannot host this, because Pages only serves static
> files. If Pages is required, either drop the API route and add
> `output: "export"` to `next.config.ts`, or point the domain at a Node host.

## Notes

- Light, cool porcelain palette with an indigo → violet → cyan accent spectrum.
- Respects `prefers-reduced-motion`: all scroll choreography flattens.
- Checked at 1440×900 and iPhone (393×852) including safe-area insets.
