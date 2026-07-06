# Navigation Layout Reference — Schneider IMPACT App

Complete HTML/CSS/JS for the header, top navbar, side navbar, and related UI. Use this to replicate the layout in another HTML website.

---

## Table of Contents

1. [HTML Structure](#1-html-structure)
2. [CSS](#2-css)
   - [2a. Color Tokens (colors.css)](#2a-color-tokens-colorscss)
   - [2b. App Styles (app.css)](#2b-app-styles-appcss)
3. [JavaScript](#3-javascript)
   - [3a. Theme Init (theme-init.js)](#3a-theme-init-theme-initjs)
   - [3b. Navigation (app.js)](#3b-navigation-appjs)
   - [3c. Theme Switcher (theme-switcher.js)](#3c-theme-switcher-theme-switcherjs)
4. [CDN Dependencies](#4-cdn-dependencies)
5. [Usage Notes](#5-usage-notes)

---

## 1. HTML Structure

### Dependencies (head)

```html
<!-- Bootstrap 5.3.3 CSS -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous" />

<!-- Bootstrap Icons 1.11.3 -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

<!-- Google Font: Nunito Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">

<!-- App CSS (see section 2) -->
<link rel="stylesheet" href="app.css" />
<link rel="stylesheet" href="main.css" />
<link rel="stylesheet" href="colors.css" />
```

### Body — Initialization Script (prevent flicker)

Place this inline after `<body>` tag, before any HTML:

```html
<script>
(function () {
  var navLayout = localStorage.getItem('navLayout') || 'vertical';
  if (navLayout === 'horizontal') document.body.classList.add('nav-horizontal');
  var sidebarCollapsed = localStorage.getItem('sidebarCollapsed');
  var isMobile = window.matchMedia('(max-width: 992px)').matches;
  if (sidebarCollapsed === 'true' && !isMobile) document.body.classList.add('sidebar-collapsed');
})();
</script>
```

### Header

```html
<header id="mainHeader" class="app-header border-bottom bg-body">
  <!-- Green strip with logo -->
  <a href="/" class="header-left-strip text-decoration-none" role="img" aria-label="Go to Home" title="Go to Home">
    <div class="header-logo-bg"></div>
  </a>

  <!-- Header right area -->
  <div class="header-right">
    <!-- Mobile hamburger (hidden on lg+) -->
    <button class="btn btn-outline-secondary d-lg-none" id="toggleSidebar" aria-label="Toggle sidebar" title="Toggle menu">
      <i class="bi bi-list"></i>
    </button>

    <!-- IMPACT animated title -->
    <div class="header-title fw-bold" style="font-size: 2rem;">
      <span class="impact-letter" style="animation-delay: 0.1s">I</span>
      <span class="impact-letter" style="animation-delay: 0.2s">M</span>
      <span class="impact-letter" style="animation-delay: 0.3s">P</span>
      <span class="impact-letter" style="animation-delay: 0.4s">A</span>
      <span class="impact-letter" style="animation-delay: 0.5s">C</span>
      <span class="impact-letter" style="animation-delay: 0.6s">T</span>
    </div>

    <!-- Profile dropdown (right side) -->
    <div class="ms-auto d-flex align-items-center gap-2">
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center"
           href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="rounded-circle bg-secondary-subtle text-body-emphasis d-inline-grid"
                style="width:32px;height:32px;place-items:center;">U</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
          <li><h6 class="dropdown-header">Appearance</h6></li>
          <li><button class="dropdown-item" type="button" data-bs-theme-value="light">Light</button></li>
          <li><button class="dropdown-item" type="button" data-bs-theme-value="dark">Dark</button></li>
          <li><button class="dropdown-item" type="button" data-bs-theme-value="auto">Auto (Default)</button></li>
          <li><hr class="dropdown-divider" /></li>
          <li><h6 class="dropdown-header">Navigation layout</h6></li>
          <li><button class="dropdown-item" type="button" data-nav-layout="vertical">Vertical (Sidebar)</button></li>
          <li><button class="dropdown-item" type="button" data-nav-layout="horizontal">Horizontal (Top)</button></li>
          <li><button class="dropdown-item" type="button">Profile</button></li>
          <li><button class="dropdown-item" type="button">Logout</button></li>
        </ul>
      </div>
    </div>
  </div>
</header>
```

### Page Content (Sidebar + Main area)

```html
<div class="page-content">
  <!-- ===== SIDEBAR ===== -->
  <aside class="sidebar d-none d-lg-flex flex-column">
    <nav class="sidebar-nav">
      <!-- Top-level menu items -->
      <a class="sidebar-link menu-item has-sub" data-submenu="sm1" href="javascript:void(0)">
        <i class="bi bi-house-door me-2 menu-icon"></i>
        <span class="label">Dashboard</span>
        <i class="bi bi-chevron-right chev ms-auto"></i>
      </a>
      <ul id="sm1" class="submenu">
        <li><a class="submenu-link active" href="/overview">Overview</a></li>
        <li>
          <a class="submenu-link submenu-item has-sub" data-submenu="sm1-1" href="javascript:void(0)">
            Analytics <i class="bi bi-chevron-right chev-small ms-auto"></i>
          </a>
          <ul id="sm1-1" class="submenu submenu-nested">
            <li><a class="submenu-link" href="/analytics/reports">Reports</a></li>
            <li><a class="submenu-link" href="/analytics/dashboard">Dashboard</a></li>
          </ul>
        </li>
      </ul>

      <!-- Leaf item (no children) -->
      <a class="sidebar-link menu-item" href="/projects">
        <i class="bi bi-folder me-2 menu-icon"></i>
        <span class="label">Projects</span>
      </a>

      <a class="sidebar-link menu-item has-sub" data-submenu="sm2" href="javascript:void(0)">
        <i class="bi bi-gear me-2 menu-icon"></i>
        <span class="label">Settings</span>
        <i class="bi bi-chevron-right chev ms-auto"></i>
      </a>
      <ul id="sm2" class="submenu">
        <li><a class="submenu-link" href="/settings/users">Users</a></li>
        <li><a class="submenu-link" href="/settings/roles">Roles</a></li>
      </ul>
    </nav>

    <!-- Sidebar footer - user info -->
    <div class="sidebar-footer border-top p-3 d-flex align-items-center">
      <span class="rounded-circle bg-light text-success fw-bold me-2 d-inline-grid"
            style="width:36px;height:36px;place-items:center;">U</span>
      <div class="user-meta">
        <div class="fw-semibold">User Name</div>
      </div>
    </div>
  </aside>

  <!-- Desktop sidebar rail tab (MENU toggle button) -->
  <button type="button"
          class="sidebar-rail-tab d-none d-lg-flex"
          data-sidebar-toggle
          title="Menu"
          aria-label="Toggle sidebar menu">
    <i class="bi bi-list" aria-hidden="true"></i>
    <span class="rail-text">MENU</span>
  </button>

  <!-- ===== MAIN CONTENT ===== -->
  <main class="flex-grow-1 content-wrapper">
    <!-- Page content goes here -->
    <h1>Hello World</h1>
  </main>
</div>
```

### Horizontal Top Navbar (alternative layout, hidden by default)

```html
<nav id="horizontalNav" class="navbar navbar-expand-lg brand-navbar sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topMenu"
            aria-controls="topMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="topMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Top level item with dropdown children -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-house-door me-2 menu-icon"></i> Dashboard
          </a>
          <ul class="dropdown-menu brand-dropdown">
            <li><a class="dropdown-item" href="/overview">Overview</a></li>
            <li class="dropdown-submenu">
              <a class="dropdown-item dropdown-toggle" href="#">Analytics</a>
              <ul class="dropdown-menu brand-dropdown">
                <li><a class="dropdown-item" href="/analytics/reports">Reports</a></li>
                <li><a class="dropdown-item" href="/analytics/dashboard">Dashboard</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <!-- Top level leaf item (no dropdown) -->
        <li class="nav-item">
          <a class="nav-link" href="/projects">
            <i class="bi bi-folder me-2 menu-icon"></i> Projects
          </a>
        </li>

        <!-- Another dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-gear me-2 menu-icon"></i> Settings
          </a>
          <ul class="dropdown-menu brand-dropdown">
            <li><a class="dropdown-item" href="/settings/users">Users</a></li>
            <li><a class="dropdown-item" href="/settings/roles">Roles</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Dependencies (before `</body>`)

```html
<!-- Bootstrap 5.3.3 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

<!-- Your app scripts (see section 3) -->
<script src="theme-init.js"></script>
<script src="app.js"></script>
<script src="theme-switcher.js"></script>

<!-- Inline initialization -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    try {
      window.TemplateNav?.init?.();
      window.TemplateNav?.wireSubmenus?.();
      window.TemplateNav?.wireHorizontalDropdowns?.();
      document.body.classList.add('js-ready');
    } catch (e) {
      console.warn('Navigation initialization failed:', e);
    }
  });
</script>
```

---

## 2. CSS

### 2a. Color Tokens (`colors.css`)

```css
:root {
    /* White & Black */
    --c-white: #ffffff;
    --c-black-soft: #112233;
    /* Primary (green brand) */
    --c-primary: #3dcd58;
    --c-primary-dark: #30ac47;
    --c-primary-darker: #2a8a3c;
    --c-primary-darkest: #16a34a;
    --c-primary-bg: #f0fdf4;
    --c-primary-bg-active: #f6fef8;
    --c-primary-bg-light: #ecfdf5;
    --c-primary-border: #bbf7d0;
    --c-primary-border-light: #86efac;
    --c-primary-border-bright: #6bfd9e;
    /* Green */
    --c-green-700: #15803d;
    --c-green-800: #166534;
    --c-green-500: #22c55e;
    --c-green-100: #dcfce7;
    --c-teal-900: #0c4a6e;
    /* Sky / Light-blue */
    --c-sky-400: #38bdf8;
    --c-sky-500: #0ea5e9;
    --c-sky-600: #0284c7;
    --c-sky-700: #0369a1;
    --c-sky-bg: #f0f9ff;
    --c-sky-bg-light: #e0f2fe;
    --c-sky-border: #bae6fd;
    --c-sky-border-light: #7dd3fc;
    /* Cyan */
    --c-cyan-400: #22d3ee;
    --c-cyan-bg: #ecfeff;
    /* Blue */
    --c-blue-500: #3b82f6;
    --c-blue-700: #1e40af;
    --c-blue-border: #dbeafe;
    --c-blue-border-light: #61a1f0;
    --c-link: #337ab7;
    --c-blue-dark: #1d4ed8;
    /* Red */
    --c-red-500: #ef4444;
    --c-red-600: #b91c1c;
    --c-red-700: #991b1b;
    --c-red-bg: #fee2e2;
    --c-red-bg-light: #fef2f2;
    --c-red-bg-lightest: #fff1f2;
    --c-red-border: #fecaca;
    /* Yellow / Amber */
    --c-yellow-bg: #fef9c3;
    --c-yellow-border: #fde68a;
    --c-yellow-800: #854d0e;
    /* Slate */
    --c-slate-900: #0f172a;
    --c-slate-800: #1e293b;
    --c-slate-700: #334155;
    --c-slate-600: #475569;
    --c-slate-500: #64748b;
    --c-slate-400: #94a3b8;
    --c-slate-300: #cbd5e1;
    --c-slate-200: #e2e8f0;
    --c-slate-100: #f1f5f9;
    --c-slate-50: #f8fafc;
    /* Gray */
    --c-gray-900: #1f2937;
    --c-gray-800: #374151;
    --c-gray-700: #4b5563;
    --c-gray-600: #333333;
    --c-gray-500: #666666;
    --c-gray-400: #9ca3af;
    --c-gray-300: #e5e7eb;
    --c-gray-200: #e8eef1;
    --c-gray-150: #dbe5ef;
    --c-gray-140: #dbe4ee;
    --c-gray-100: #f3f4f6;
    --c-gray-50: #f9fafb;
    --c-gray-30: #fafafa;
    --c-gray-20: #fafbfc;
    /* Silver / Neutral */
    --c-silver: #dddddd;
    --c-silver-light: #bebebe;
    --c-silver-bg: #f5f5f5;
    /* Misc */
    --c-eef2f7: #eef2f7;
    --c-eff6ff: #eff6ff;
    --c-999: #999999;
    /* rgba overlays & shadows */
    --c-rgba-black-002: rgba(0, 0, 0, 0.02);
    --c-rgba-black-003: rgba(0, 0, 0, 0.03);
    --c-rgba-black-008: rgba(0, 0, 0, 0.075);
    --c-rgba-black-008b: rgba(0, 0, 0, 0.08);
    --c-rgba-black-010: rgba(0, 0, 0, 0.1);
    --c-rgba-black-012: rgba(0, 0, 0, 0.12);
    --c-rgba-navy-005: rgba(0, 0, 50, 0.05);
    --c-rgba-slate-008: rgba(15, 23, 42, 0.08);
    --c-rgba-green-dark-018: rgba(22, 101, 52, 0.18);
    --c-rgba-red-015: rgba(239, 68, 68, 0.15);
    --c-rgba-primary-dark-040: rgba(48, 172, 71, 0.4);
    --c-rgba-primary-005: rgba(61, 205, 88, 0.05);
    --c-rgba-primary-010: rgba(61, 205, 88, 0.1);
    --c-rgba-primary-015: rgba(61, 205, 88, 0.15);
    --c-rgba-primary-030: rgba(61, 205, 88, 0.3);
}
```

### 2b. App Styles (`app.css`)

```css
:root {
    --brand: #009530;
    --brand-text: #ffffff;
}

/* ===== IMPACT Title Animation ===== */
.impact-letter {
    display: inline-block;
    opacity: 0;
    animation: letterReveal 0.6s ease-out forwards;
    margin: 0 0.1em;
}

@keyframes letterReveal {
    0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
    50% { transform: translateY(5px) scale(1.05); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}

.header-title:hover .impact-letter {
    animation: letterPulse 0.5s ease-in-out;
}

@keyframes letterPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* ===== Base ===== */
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-family: "Nunito Sans", sans-serif;
}

/* ===== App Container ===== */
.app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}

/* ===== HEADER ===== */
.app-header {
    display: flex;
    width: 100%;
    height: 64px;
    background: var(--bs-body-bg);
    flex-shrink: 0;
}

.header-left-strip {
    width: 260px;
    min-width: 260px;
    background: var(--brand);
    display: flex;
    align-items: center;
    padding: 0 16px;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
}

.header-left-strip:hover {
    opacity: 0.9;
    text-decoration: none;
}

.header-logo-bg {
    height: 45px;
    width: 180px;
    background-image: url("/images/logo_se_white_screen.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

body.sidebar-collapsed .header-logo-bg {
    width: 32px;
    background-image: url("/images/Seiconwhite.png");
    background-position: center;
}

.header-right {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
}

.header-title {
    font-weight: 700;
    font-size: 1.15rem;
    color: #009530;
}

[data-bs-theme="dark"] .header-title {
    color: #3DCD58;
}

/* ===== PAGE LAYOUT ===== */
.page-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    height: calc(100vh - 64px);
    max-height: calc(100vh - 64px);
}

/* ===== SIDEBAR ===== */
.sidebar {
    width: 260px;
    min-width: 260px;
    background: var(--brand);
    color: var(--brand-text);
    height: 100%;
    max-height: 100vh;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Scrollable menu zone */
.sidebar-nav {
    flex: 1 1 auto !important;
    min-height: 0 !important;
    max-height: 100% !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    display: flex;
    flex-direction: column;
    gap: .25rem;
    padding: 8px 8px 12px 8px;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.sidebar-nav::-webkit-scrollbar {
    display: none;
}

/* ===== Sidebar Menu Items ===== */
.menu-item {
    display: flex;
    align-items: center;
    gap: .75rem;
    height: 56px;
    min-height: 56px;
    padding: 0 14px 0 16px;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color .2s ease;
    flex-shrink: 0;
}

.sidebar .menu-item,
.sidebar .menu-item .label,
.sidebar .menu-icon {
    color: var(--brand-text);
}

.sidebar .menu-item:hover {
    background: rgba(255,255,255,.10);
}

.menu-icon {
    font-size: 1.25rem;
    width: 24px;
    text-align: center;
    opacity: .95;
}

.menu-item .chev {
    font-size: 1.1rem;
    color: rgba(255,255,255,.8);
    transition: transform .25s ease;
}

.menu-item.expanded .chev {
    transform: rotate(90deg);
}

/* Chevron for nested submenus */
.submenu-item .chev-small {
    font-size: 0.9rem;
    color: rgba(255,255,255,.8);
    transition: transform .25s ease;
    margin-left: auto;
}

.submenu-item.expanded .chev-small {
    transform: rotate(90deg);
}

/* ===== Submenus ===== */
.submenu {
    list-style: none;
    margin: .25rem 0 .5rem 2.1rem;
    padding: 0;
    overflow: visible;
    max-height: 0;
    opacity: 0;
    transform: translateY(-4px);
    transition: max-height .3s ease, opacity .2s ease, transform .25s ease;
}

.submenu.open {
    opacity: 1;
    transform: translateY(0);
    max-height: 5000px !important;
    overflow: visible;
}

.submenu li {
    padding: .35rem 0;
}

.submenu li a {
    color: var(--brand-text);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    width: 100%;
}

/* Nested submenu (3rd level+) */
.submenu-nested {
    margin-left: 1.5rem;
    padding-left: 0.5rem;
    border-left: 2px solid rgba(255,255,255,.2);
    overflow: visible;
}

.submenu-nested.open {
    max-height: 5000px !important;
    overflow: visible;
}

.submenu-item {
    display: inline-flex;
    align-items: center;
    color: var(--brand-text);
    text-decoration: none;
    width: 100%;
    padding: 0.25rem 0;
    cursor: pointer;
    transition: background-color .2s ease;
}

.submenu-item:hover {
    background-color: rgba(255,255,255,.05);
}

.submenu-item.has-sub {
    cursor: pointer;
}

.submenu-link {
    color: var(--brand-text);
    text-decoration: none;
    transition: opacity .2s ease;
}

.submenu-link:hover {
    opacity: 0.8;
}

.submenu-link.active {
    font-weight: 600;
    opacity: 1;
}

/* ===== Sidebar Footer ===== */
.sidebar-footer {
    flex-shrink: 0;
    flex-grow: 0;
    min-height: fit-content;
    max-height: 100px;
}

/* ===== Collapsed State ===== */
.sidebar-collapsed .sidebar {
    width: 76px;
    min-width: 76px;
}

.sidebar-collapsed .header-left-strip {
    width: 76px;
    min-width: 76px;
    justify-content: center;
    padding: 0;
}

.sidebar-collapsed .menu-item {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
}

.sidebar-collapsed .menu-item .label,
.sidebar-collapsed .menu-item .chev,
.sidebar-collapsed .user-meta {
    display: none !important;
}

.sidebar-collapsed .submenu {
    max-height: 0 !important;
    opacity: 0 !important;
}

/* ===== Sidebar Rail Tab (MENU button) ===== */
.sidebar-rail-tab {
    position: fixed;
    top: 90px;
    left: 260px;
    width: 46px;
    height: 130px;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #009530;
    color: var(--brand-text);
    border: 0;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,.18);
    z-index: 1040;
    opacity: 0.15;
    transition: opacity 0.3s ease;
}

.sidebar-rail-tab:hover {
    opacity: 1;
}

.sidebar-rail-tab .bi {
    font-size: 1.35rem;
    line-height: 1;
}

.sidebar-rail-tab .rail-text {
    font-size: .78rem;
    font-weight: 800;
    letter-spacing: .14em;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
}

.sidebar-collapsed .sidebar-rail-tab {
    left: 76px;
}

/* ===== Main Content ===== */
.content-wrapper {
    padding: 1rem;
    overflow-y: auto;
    flex: 1;
    height: 100%;
}

/* ===== Horizontal Top Navbar ===== */
.brand-navbar {
    background-color: var(--brand) !important;
    --bs-navbar-color: var(--brand-text);
    --bs-navbar-hover-color: rgba(255,255,255,.85);
    --bs-navbar-active-color: #fff;
    --bs-navbar-brand-color: var(--brand-text);
    --bs-navbar-brand-hover-color: #fff;
    --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255,255,255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    --bs-navbar-toggler-border-color: rgba(255,255,255,.4);
    min-height: 42px;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.brand-navbar .nav-link {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
}

.brand-navbar .navbar-nav .nav-item {
    margin: 0 0.25rem;
}

.brand-navbar .navbar-toggler {
    opacity: 0.3;
    transition: opacity 0.3s ease;
    border: 1px solid rgba(255,255,255,.2);
}

.brand-navbar .navbar-toggler:hover {
    opacity: 1;
    border-color: rgba(255,255,255,.6);
}

.brand-navbar .navbar-toggler:focus {
    opacity: 1;
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.brand-navbar .nav-link {
    color: var(--brand-text) !important;
    background-color: transparent !important;
}

.brand-navbar .nav-link:hover,
.brand-navbar .nav-link:focus {
    color: rgba(255,255,255,.85) !important;
    background-color: rgba(255,255,255,.1) !important;
}

.brand-navbar .dropdown-menu.brand-dropdown {
    background-color: var(--brand) !important;
    border-color: rgba(255,255,255,.2) !important;
}

.brand-navbar .dropdown-menu.brand-dropdown .dropdown-item {
    color: var(--brand-text) !important;
    background-color: transparent !important;
}

.brand-navbar .dropdown-menu.brand-dropdown .dropdown-item:hover,
.brand-navbar .dropdown-menu.brand-dropdown .dropdown-item:focus {
    background-color: rgba(255,255,255,.15) !important;
    color: #fff !important;
}

/* Multi-level dropdown support */
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
    background-color: var(--brand) !important;
    border-color: rgba(255,255,255,.2) !important;
}

.dropdown-submenu:hover > .dropdown-menu {
    display: block;
}

/* ===== Layout Toggle ===== */
.nav-horizontal .sidebar {
    display: none !important;
}

.nav-horizontal .sidebar-rail-tab {
    display: none !important;
}

.nav-horizontal #horizontalNav {
    display: block !important;
    z-index: 900;
}

.nav-horizontal .page-content {
    flex-direction: column;
}

body:not(.nav-horizontal) #horizontalNav {
    display: none !important;
}

/* ===== Mobile (max 992px) ===== */
@media (max-width: 992px) {
    .sidebar {
        position: fixed;
        top: 64px;
        left: 0;
        height: calc(100vh - 64px);
        z-index: 1050;
    }

    .sidebar-collapsed .sidebar {
        transform: translateX(-100%);
    }

    .sidebar-rail-tab {
        top: 90px;
        left: 0px;
        z-index: 1060;
    }

    .sidebar-collapsed .sidebar-rail-tab {
        left: 0px;
    }

    /* Force horizontal layout on mobile */
    body.nav-horizontal .sidebar-rail-tab,
    body.nav-horizontal #toggleSidebar,
    body.nav-horizontal .sidebar {
        display: none !important;
    }
}
```

---

## 3. JavaScript

### 3a. Theme Init (`theme-init.js`)

Prevents flicker by reading `localStorage` before the page renders.

```js
(function () {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored
        ? (stored === 'auto' ? (prefersDark ? 'dark' : 'light') : stored)
        : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', theme);

    // Layout + sidebar collapse ASAP
    var layout = localStorage.getItem('navLayout') || 'vertical';
    var collapsed = localStorage.getItem('sidebarCollapsed') === 'true';

    function apply() {
        var body = document.body;
        if (!body) return;
        if (layout === 'horizontal') body.classList.add('nav-horizontal');
        else body.classList.remove('nav-horizontal');
        if (layout !== 'horizontal' && collapsed) body.classList.add('sidebar-collapsed');
        else body.classList.remove('sidebar-collapsed');
    }

    if (document.body) apply();
    else document.addEventListener('DOMContentLoaded', apply);
})();
```

### 3b. Navigation (`app.js`)

Controls sidebar toggle, submenu expand/collapse, horizontal dropdowns, layout switching, and responsive behavior.

```js
window.TemplateNav = (function () {
    var appRoot = document.body;
    var isInitialized = false;

    function isMobile() {
        return window.matchMedia('(max-width: 992px)').matches;
    }

    function applyResponsiveLayout() {
        if (isMobile()) {
            appRoot.classList.add('nav-horizontal');
            appRoot.classList.add('sidebar-collapsed');
            return;
        }
        var layout = localStorage.getItem('navLayout') || 'vertical';
        applyNavLayout(layout);
        var savedCollapsed = localStorage.getItem('sidebarCollapsed');
        if (savedCollapsed === 'true') appRoot.classList.add('sidebar-collapsed');
        else if (savedCollapsed === 'false') appRoot.classList.remove('sidebar-collapsed');
    }

    function applyNavLayout(layout) {
        if (layout === 'horizontal') appRoot.classList.add('nav-horizontal');
        else appRoot.classList.remove('nav-horizontal');
    }

    function refreshOpenHeights() {
        var openSubmenus = Array.from(document.querySelectorAll('.submenu.open'));
        openSubmenus.sort(function (a, b) {
            return b.querySelectorAll('.submenu').length - a.querySelectorAll('.submenu').length;
        });
        openSubmenus.forEach(function (sm) {
            sm.style.maxHeight = '5000px';
        });
    }

    function toggleSubmenu(triggerEl) {
        var id = triggerEl.getAttribute('data-submenu');
        var target = document.getElementById(id);
        if (!target) return;

        var isOpen = triggerEl.classList.contains('expanded');
        triggerEl.classList.toggle('expanded', !isOpen);

        if (!isOpen) {
            target.classList.add('open');
            target.style.maxHeight = '5000px';
            requestAnimationFrame(refreshOpenHeights);
            setTimeout(refreshOpenHeights, 350);
        } else {
            target.style.maxHeight = '0px';
            target.classList.remove('open');
            target.querySelectorAll('.submenu.open').forEach(function (nested) {
                nested.classList.remove('open');
                nested.style.maxHeight = '0px';
                var nestedTrigger = document.querySelector('[data-submenu="' + nested.id + '"]');
                if (nestedTrigger) nestedTrigger.classList.remove('expanded');
            });
            setTimeout(refreshOpenHeights, 50);
        }
    }

    function wireSubmenus() {
        setTimeout(function () {
            var boundCount = 0;
            document.querySelectorAll('.menu-item.has-sub').forEach(function (item) {
                if (item.dataset.bound === "true") return;
                item.dataset.bound = "true";
                boundCount++;
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSubmenu(item);
                });
            });
            document.querySelectorAll('.submenu-item.has-sub').forEach(function (item) {
                if (item.dataset.bound === "true") return;
                item.dataset.bound = "true";
                boundCount++;
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSubmenu(item);
                });
            });
            refreshOpenHeights();
            if (boundCount === 0) {
                setTimeout(wireSubmenus, 500);
            }
        }, 100);
    }

    function wireHorizontalDropdowns() {
        document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
            if (submenu.dataset.boundDropdown === "true") return;
            submenu.dataset.boundDropdown = "true";
            var toggle = submenu.querySelector('.dropdown-toggle');
            var menu = submenu.querySelector('.dropdown-menu');
            if (!toggle || !menu) return;
            submenu.addEventListener('mouseenter', function () {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    menu.classList.add('show');
                }
            });
            submenu.addEventListener('mouseleave', function () {
                if (window.matchMedia('(min-width: 992px)').matches) {
                    menu.classList.remove('show');
                }
            });
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                menu.classList.toggle('show');
            });
        });
    }

    function positionMenuTab() {
        var header = document.getElementById('mainHeader');
        var tab = document.querySelector('.sidebar-rail-tab');
        if (!tab) return;
        var headerH = header ? Math.ceil(header.getBoundingClientRect().height) : 64;
        tab.style.top = (headerH + 8) + 'px';
    }

    function init() {
        if (isInitialized) return;
        isInitialized = true;
        applyResponsiveLayout();

        var toggleBtn = document.getElementById('toggleSidebar');
        if (toggleBtn && !toggleBtn.dataset.bound) {
            toggleBtn.dataset.bound = "true";
            toggleBtn.addEventListener('click', function () {
                appRoot.classList.toggle('sidebar-collapsed');
                localStorage.setItem('sidebarCollapsed', appRoot.classList.contains('sidebar-collapsed'));
            });
        }

        document.querySelectorAll('[data-sidebar-toggle]').forEach(function (btn) {
            if (btn.dataset.bound === "true") return;
            btn.dataset.bound = "true";
            btn.addEventListener('click', function () {
                appRoot.classList.toggle('sidebar-collapsed');
                localStorage.setItem('sidebarCollapsed', appRoot.classList.contains('sidebar-collapsed'));
            });
        });

        var saved = localStorage.getItem('sidebarCollapsed');
        var currentlyCollapsed = appRoot.classList.contains('sidebar-collapsed');
        if (saved === 'true' && !currentlyCollapsed) appRoot.classList.add('sidebar-collapsed');
        else if (saved === 'false' && currentlyCollapsed) appRoot.classList.remove('sidebar-collapsed');

        var layout = localStorage.getItem('navLayout') || 'vertical';
        var currentlyHorizontal = appRoot.classList.contains('nav-horizontal');
        var shouldBeHorizontal = layout === 'horizontal';
        if (shouldBeHorizontal && !currentlyHorizontal) appRoot.classList.add('nav-horizontal');
        else if (!shouldBeHorizontal && currentlyHorizontal) appRoot.classList.remove('nav-horizontal');

        document.querySelectorAll('[data-nav-layout]').forEach(function (btn) {
            if (btn.dataset.bound === "true") return;
            btn.dataset.bound = "true";
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var newLayout = btn.getAttribute('data-nav-layout');
                var currentLayout = localStorage.getItem('navLayout') || 'vertical';
                if (newLayout !== currentLayout) {
                    localStorage.setItem('navLayout', newLayout);
                    applyNavLayout(newLayout);
                }
            });
        });

        wireSubmenus();
        wireHorizontalDropdowns();
        positionMenuTab();

        if (!window.templateNavResizeAdded) {
            window.templateNavResizeAdded = true;
            window.addEventListener('resize', function () {
                applyResponsiveLayout();
                positionMenuTab();
                refreshOpenHeights();
            });
        }
    }

    return { init: init, wireSubmenus: wireSubmenus, wireHorizontalDropdowns: wireHorizontalDropdowns, applyNavLayout: applyNavLayout };
})();
```

### 3c. Theme Switcher (`theme-switcher.js`)

Handles Light/Dark/Auto theme toggling via `[data-bs-theme-value]` buttons.

```js
(function () {
    function resolveAuto() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(value) {
        var theme = value === 'auto' ? resolveAuto() : value;
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', value);
    }

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-bs-theme-value]');
        if (!btn) return;
        applyTheme(btn.getAttribute('data-bs-theme-value'));
    });
})();
```

---

## 4. CDN Dependencies

| Resource | URL |
|----------|-----|
| Bootstrap 5.3.3 CSS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` |
| Bootstrap 5.3.3 JS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Bootstrap Icons 1.11.3 | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css` |
| Google Font (Nunito Sans) | `https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap` |

---

## 5. Usage Notes

### How Layout Toggle Works
- **`data-nav-layout="vertical"`** — Shows sidebar, hides horizontal nav
- **`data-nav-layout="horizontal"`** — Shows horizontal top nav, hides sidebar
- Saved to `localStorage` key `navLayout`
- On mobile (< 992px), **horizontal layout is forced automatically**

### Sidebar Collapse
- Toggle via `#toggleSidebar` button or `[data-sidebar-toggle]` elements
- State saved to `localStorage` key `sidebarCollapsed`
- Body class `sidebar-collapsed` controls the visual state

### Submenu Behavior
- Uses `data-submenu="id"` attribute to link toggle element to its submenu `<ul id="id">`
- Submenu heights use `max-height` transitions (animates open/closed)
- Nested submenus fully supported (via `.submenu-nested`)
- All submenus collapse to 0 when parent is closed

### Theme
- `data-bs-theme-value="light|dark|auto"` buttons control Bootstrap 5.3 theme
- Saved to `localStorage` key `theme`
- `theme-init.js` reads it before DOM renders (prevents flash)

### Menu Icons
- Uses [Bootstrap Icons](https://icons.getbootstrap.com/) — class format `bi bi-<name>`
- Default fallback icon: `bi bi-circle`
