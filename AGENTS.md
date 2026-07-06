# IMPACT HTML — Agent Guide

Schneider Electric's Installation Monitoring, Progress and Commissioning Tracker.
Static HTML/CSS/JS frontend (no build system, no tests, no linter).

## Tech Stack

- **CSS:** Bootstrap 5.3.3 (CDN, active pages), Bootstrap 3 (archived `old-html/`), PrimeFlex 3.3.1
- **JS:** Bootstrap 5.3 Bundle (CDN), jQuery 3.7.1 (archived `old-html/` only)
- **Grid:** AG Grid Community 33.1.1 (vendored in `plugins/ag-grid/`)
- **Charts:** AG Charts Community 11.1.0 (vendored in `plugins/ag-charts-community/`)
- **Icons:** Bootstrap Icons 1.11.3 (CDN), Glyphicons (archived pages)
- **Fonts:** Nunito Sans + Nunito via Google Fonts

## Project Structure (current)

| Path | Content |
|------|---------|
| `index.html` | Landing page (project selection). **Entry point.** |
| `ProjectList.html` | Project list page |
| `components/navbar.html` | Shared header + sidebar loaded via fetch by `js/app.js` |
| `css/style.css` | Main stylesheet (4216 lines, imports `colors.css`) |
| `css/modules/navigation.css` | Bootstrap 5.3 navigation layout + theme |
| `css/primeflex.css` | PrimeFlex utility classes |
| `js/app.js` | Theme init, layout init, `loadNavbar()` placeholder injection |
| `js/modules/navigation.js` | `window.TemplateNav` — submenu toggling, sidebar collapse, responsive layout |
| `ag-grid/*.js` | 13 files — per-page AG Grid mock data + column defs |
| `colors.css` | ~120 CSS custom property color tokens (imported by style.css) |
| `plugins/ag-grid/` | Vendored AG Grid Community (full npm package) |
| `plugins/ag-charts-community/` | Vendored AG Charts Community |
| `old-html/` | 20 archived Bootstrap 3 pages (no longer in use) |
| `img/` | 84 images (SVGs, PNGs, JPGs) |
| `fonts/` | Glyphicons font files (for archived pages) |

## Key Conventions

- **No build, no tests, no linter** — edit directly, open in browser
- Landing page is `index.html` (not `Default.html`, not `index.html` previously absent)
- Header/sidebar loaded dynamically: `loadNavbar()` in `js/app.js` fetches `components/navbar.html`, splits `<header>` and `<nav>` into `#header-placeholder` and `#nav-placeholder`
- Layout state persisted in `localStorage` keys: `navLayout`, `sidebarCollapsed`, `theme`
- `bootstrap.bundle.min.js` loaded from CDN (not vendored); Bootstrap 3 `bootstrap.min.js` is vendored only for archived pages
- Desktop-first: `body { min-width: 1280px !important; }`
- Page-specific CSS scoped via body classes (`.home-page`, `.project-list-page`, etc.)
- AG Grid: `agGrid.createGrid(gridDiv, gridOptions)`, custom cell renderers as HTML strings in column defs
- `navigation-reference.md` has canonical Bootstrap 5.3 layout reference (1183 lines — use as template source, not prose doc)

## Navigation System

- `js/modules/navigation.js` exposes `window.TemplateNav` with `init()`, `wireSubmenus()`, `wireHorizontalDropdowns()`
- Theme switching via `data-bs-theme-value` attributes on dropdown items (light / dark / auto)
- Layout switching via `data-nav-layout` attributes (vertical / horizontal)
- On mobile (<992px), forces horizontal layout + sidebar collapsed
- **Do not use `Default.html`** — it's an outdated page; the current landing page is `index.html`
