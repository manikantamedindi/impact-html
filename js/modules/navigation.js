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
