(function () {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? (stored === 'auto' ? (prefersDark ? 'dark' : 'light') : stored) : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', theme);
    var layout = localStorage.getItem('navLayout') || 'vertical';
    var collapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    function apply() {
        var body = document.body;
        if (!body) return;
        if (layout === 'horizontal') body.classList.add('nav-horizontal');
        if (layout !== 'horizontal' && collapsed) body.classList.add('sidebar-collapsed');
    }
    if (document.body) apply();
    else document.addEventListener('DOMContentLoaded', apply);
})();

async function loadNavbar() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const navPlaceholder = document.getElementById('nav-placeholder');
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    console.log('Placeholders:', headerPlaceholder, navPlaceholder);
    if (!headerPlaceholder || !navPlaceholder) return;

    try {
        const response = await fetch('layout/navbar.html');
        console.log('Fetch response:', response);
        if (!response.ok) throw new Error('Failed to load navbar');
        const text = await response.text();
        console.log('Navbar HTML loaded');
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        const header = doc.querySelector('header');
        const sidebar = doc.querySelector('.sidebar');
        const railTab = doc.querySelector('.sidebar-rail-tab');
        const nav = doc.getElementById('horizontalNav');
        console.log('Header/Nav found:', header, nav);
        
        if (header) {
            headerPlaceholder.appendChild(header);
            console.log('Header appended');
        }
        if (sidebar && sidebarPlaceholder) {
            sidebarPlaceholder.appendChild(sidebar);
            if (railTab) sidebarPlaceholder.appendChild(railTab);
            console.log('Sidebar appended');
        }
        if (nav) {
            navPlaceholder.appendChild(nav);
            console.log('Nav appended');
        }
    } catch (e) {
        console.error('Failed to load navbar:', e);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadNavbar();
    
    try {
        window.TemplateNav?.init?.();
        window.TemplateNav?.wireSubmenus?.();
        window.TemplateNav?.wireHorizontalDropdowns?.();
        document.body.classList.add('js-ready');
    } catch (e) {
        console.warn('Navigation initialization failed:', e);
    }
});
