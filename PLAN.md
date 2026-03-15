# eralp.dev Hugo Refactor Plan

## Goal
Replace the Gatsby v2 site with a minimal Hugo static site. No themes, no npm, no dependencies beyond Hugo itself.

## Decisions

- **Framework: Hugo** — Pre-installed on Cloudflare Pages, single binary, no node_modules. Chose this over vendored JS solutions to avoid dependency rot (lesson from Gatsby).
- **Scaffolding: `hugo new project`** — Use Hugo's official CLI to generate the project structure. Do not manually create directories or config files that Hugo can scaffold for us.
- **No Hugo theme** — Override the default layouts with our own minimal templates (`baseof.html`, `list.html`, `single.html`) for full control and simplicity.
- **Deploy target: Cloudflare Pages** — Build command is just `hugo`. No install step needed.

### Styling & UX
- **Dark theme only** — Single dark color scheme, no light mode, no switching.
- **Syntax highlighting** — Hugo's built-in Chroma highlighter (configured in `hugo.toml`).
- **Responsive** — Mobile-first CSS, no framework.

### SEO & Social
- **OG tags** — Hugo built-in `_internal/opengraph.html` and `_internal/twitter_cards.html`. Title/description from frontmatter.
- **OG image** — Single default image (reuse avatar from master branch). Set in `[params]`.
- **Sitemap** — Hugo auto-generates `/sitemap.xml`.
- **RSS** — Hugo auto-generates RSS. Use built-in, drop if customization needed.
- **robots.txt** — Yes, plus AI crawler blocking (ai.txt / robots.txt AI directives).
- **Canonical URLs** — Yes, via Hugo built-in.
- **Favicon** — Same image as OG default.

### Content
- **Post dates** — From frontmatter `date` field. Hugo sorts descending by default.
- **Landing page** — Bio/intro + list of links to all posts.
- **No tags, categories, reading time, or ToC.**
- **No drafts** — All content is published.

### Analytics
- **Umami** — Migrate from current site (script injection in head).
- **No Google Analytics.**

### Performance
- **Minification** — Use Hugo's built-in `--minify` flag if trivial.
- **No PWA, no service worker, no offline support.**

### Infrastructure
- **404 page** — Custom `layouts/404.html`.
- **Redirects from old Gatsby URLs** — Old site used root-level slugs (`/flutter-mock-api-server/`), Hugo will use `/posts/flutter-mock-api-server/`. Use Hugo `aliases` in frontmatter to redirect old URLs.

### Content migration
- **Blog posts from master** — Port the 5 existing MDX posts to plain Markdown.
- **Old URLs (Gatsby):**
  - `/flutter-mock-api-server/`
  - `/gh-cli-pr/`
  - `/meta/`
  - `/prod-bug-local-proxy/`
  - `/react-native-mobile-and-web-code-sharing/`
- Each post gets `aliases: ["/old-slug/"]` in frontmatter.

## TODO

- [ ] Run `hugo new project` to scaffold the site
- [ ] Configure `hugo.toml` (title, baseURL, description, params, Chroma, minify, robots.txt)
- [ ] Create `baseof.html` layout (head with OG/meta, header, nav, footer, Umami script)
- [ ] Create `list.html` (landing page with bio + post links sorted by date)
- [ ] Create `single.html` (individual post page)
- [ ] Create `404.html`
- [ ] Add CSS (minimal, dark/light via prefers-color-scheme, responsive)
- [ ] Copy OG/favicon image from master worktree into `static/`
- [ ] Add robots.txt with AI crawler blocking
- [ ] Port 5 blog posts from MDX to Markdown (with aliases for old URLs)
- [ ] Test locally with `hugo server`
- [ ] Configure for Cloudflare Pages deployment
