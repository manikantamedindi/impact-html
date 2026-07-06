# IMPACT HTML — Agent Guide

Schneider Electric's Installation Monitoring, Progress and Commissioning Tracker.
Static HTML/CSS/JS frontend — no build, no tests, no linter. Edit directly, open in browser.

## Tech Stack

- **CSS:** Bootstrap 5.3.3 (CDN), PrimeFlex 3.3.1 (vendored)
- **JS:** Bootstrap 5.3 Bundle (CDN), vanilla JS (no jQuery on active pages)
- **Grid:** AG Grid Community 33.1.1 (vendored `plugins/ag-grid/`)
- **Charts:** AG Charts Community 11.1.0 (vendored `plugins/ag-charts-community/`)
- **Icons:** Bootstrap Icons 1.11.3 (CDN)
- **Fonts:** Nunito Sans + Nunito via Google Fonts
- **Archived:** `old-html/` — 22 Bootstrap 3 pages + 2 CSS files. jQuery 3.7.1 + Bootstrap 3 vendored in `js/` but unused by active pages.

## Key Conventions

- **Entry point**: `index.html` (not `Default.html`)
- **Header/sidebar**: `loadNavbar()` in `js/app.js` fetches `components/navbar.html`, injects `<header>` → `#header-placeholder`, `<nav>` → `#nav-placeholder`. Call `window.TemplateNav.init()` etc. after load.
- **State in localStorage**: `navLayout` (vertical/horizontal), `sidebarCollapsed` (true/false), `theme` (light/dark/auto)
- **Desktop-first**: `body { min-width: 1280px !important; }`
- **Page scoping**: body class per page (`.home-page`, `.project-list-page`, etc.)
- **AG Grid**: `window.agGrid.createGrid(gridDiv, gridOptions)`. Custom cell renderers as HTML strings in column defs. Shared helpers in `ag-grid/agGridSetup.js` (pagination, pinned columns, responsive page size via `window.ImpactGridCommon`).
- **Action buttons**: `btn btn-success`, `border-radius: 20px`, `padding: 8px 16px`, `font-weight: 700` (pill shape). See `rules/ACTION_BUTTON_CONSISTENCY_REPORT.md`.
- **Search fields**: `.inner-navbar-search-container` with inline SVG icon + `<input>`. Green focus border (#3dcd58). See `rules/SEARCH_FIELD_RULE.md`.
- **Validations**: Inline error messages in `<span class="validation-error">` + `.is-invalid` class on inputs. See `ProjectList.html`.
- **`navigation-reference.md`**: Canonical Bootstrap 5.3 layout template (1183 lines). Use as HTML source when building nav pages, not as prose doc.

## Navigation System

- `js/modules/navigation.js` → `window.TemplateNav` with `init()`, `wireSubmenus()`, `wireHorizontalDropdowns()`
- Theme switching via `data-bs-theme-value` attributes
- Layout switching via `data-nav-layout` attributes
- Mobile (<992px): forces horizontal + sidebar collapsed, ignores localStorage
- `css/modules/navigation.css` (518 lines): IMPACT letter animation, header/nav styling, responsive variants

## Project Structure

| Path | Notes |
|------|-------|
| `index.html` | Landing page (project selection). **Entry point.** |
| `ProjectList.html` | Project list with AG Grid |
| `components/navbar.html` | Shared header + sidebar (147 lines) |
| `css/style.css` | 4215 lines. AG Grid theme, layout, scrollable tables. Imports `colors.css`. |
| `css/modules/navigation.css` | Navigation layout + theme (518 lines) |
| `css/primeflex.css` | PrimeFlex utility classes |
| `js/app.js` | Theme/layout init, `loadNavbar()` (61 lines) |
| `js/modules/navigation.js` | `TemplateNav` — submenus, sidebar, responsive (208 lines) |
| `ag-grid/*.js` | 13 files (4182 lines total) — per-page mock data + column defs |
| `ag-grid/agGridSetup.js` | Shared `ImpactGridCommon` helper (responsive, pinned cols, pagination) |
| `colors.css` | 121 CSS custom property color tokens (imported by style.css) |
| `plugins/ag-grid/` | Vendored AG Grid Community |
| `plugins/ag-charts-community/` | Vendored AG Charts Community |
| `old-html/` | 22 archived Bootstrap 3 HTML pages + siteMap + test (no longer in use) |
| `rules/` | Design system docs: action buttons, search fields |
| `img/` | 85 images (SVGs, PNGs, JPGs) |
| `public/` | Extra icons and images for AG Grid themes |
| `assets/` | Brand assets (EBO.png, icons/) |
