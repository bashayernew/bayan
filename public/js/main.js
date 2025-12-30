/* Main interactions: language toggle, dropdowns, mobile menu, tabs, active link on scroll, form validation */
(function () {
  function qs(sel, parent = document) { return parent.querySelector(sel); }
  function qsa(sel, parent = document) { return Array.from(parent.querySelectorAll(sel)); }

  document.addEventListener('DOMContentLoaded', () => {
    setupLangToggle();
    setupDropdown();
    setupMobileMenu();
    setupTabs();
    setupActiveOnScroll();
    setupFormValidation();
    setupSmoothScroll();
    setupMobileFloatingNav();
  });

  function setupSmoothScroll() {
    // Handle anchor links with offset for sticky header
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '') return;
        
        // Check if it's a cross-page link (contains .html#)
        const isCrossPage = href.includes('.html#') || (href.includes('#') && !href.startsWith('#'));
        
        if (isCrossPage) {
          // Let the browser navigate, scroll will happen on page load
          return;
        }
        
        // Same-page anchor
        const hash = href.startsWith('#') ? href : '#' + href.split('#')[1];
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Handle hash on page load (for direct navigation to anchors, including cross-page)
    function scrollToHash() {
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        const target = document.querySelector(hash);
        if (target) {
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            setTimeout(() => {
              const headerOffset = 80;
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }, 150);
          });
        }
      }
    }

    // Run on load (handles both same-page and cross-page navigation)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        // Small delay to ensure all content is rendered
        setTimeout(scrollToHash, 200);
      });
    } else {
      // Page already loaded, scroll immediately
      setTimeout(scrollToHash, 200);
    }

    // Also handle hashchange (for same-page navigation)
    window.addEventListener('hashchange', scrollToHash);
  }

  function setupLangToggle() {
    qsa('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (window.BayanI18n) window.BayanI18n.setLanguage(lang, true); // true = user initiated
        // Adjust tab focus order for direction
        if (typeof window.fixTabDirection === 'function') window.fixTabDirection();
      });
    });
  }

  function setupDropdown() {
    const dropdown = qs('.nav-dropdown');
    if (!dropdown) return;
    const toggle = qs('.dropdown-toggle', dropdown);
    const menu = qs('.dropdown-menu', dropdown);
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
      const open = dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function setupMobileMenu() {
    const btn = qs('.nav-toggle');
    const menu = qs('.nav-center');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on nav link click (mobile)
    qsa('.nav-center a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));
  }

  function setupTabs() {
    const tabs = qsa('.tab');
    const panels = qsa('.tab-panel');
    if (!tabs.length) return;

    const heroImg = document.querySelector('.hero-img');
    const heroSource = {
      elevators: 'assets/DSC02139.JPG',
      pvs: 'assets/DSC02089.JPG',
      wbvc: 'assets/DSC02064.JPG',
      railings: 'assets/hero-railings.jpg'
    };
    
    function activate(id) {
      tabs.forEach(t => {
        const is = t.dataset.tab === id;
        t.classList.toggle('is-active', is);
        t.setAttribute('aria-selected', String(is));
        t.tabIndex = is ? 0 : -1;
      });
      panels.forEach(p => {
        const is = p.id === `panel-${id}`;
        p.classList.toggle('is-active', is);
        p.hidden = !is;
      });

      if (heroImg && heroSource[id]) {
        heroImg.style.opacity = '0.3';
        const next = heroSource[id];
        if (heroImg.getAttribute('src') !== next) {
          heroImg.setAttribute('src', next);
        }
        setTimeout(() => { heroImg.style.opacity = '1'; }, 80);
      }
    }

    tabs.forEach(t => {
      t.addEventListener('click', () => activate(t.dataset.tab));
      t.addEventListener('keydown', (e) => {
        const idx = tabs.indexOf(t);
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const dirRtl = document.documentElement.dir === 'rtl';
          const moveNext = (e.key === 'ArrowRight' && !dirRtl) || (e.key === 'ArrowLeft' && dirRtl);
          const next = tabs[(idx + (moveNext ? 1 : -1) + tabs.length) % tabs.length];
          next.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(t.dataset.tab);
        }
      });
    });

    // Allow cards dropdown/explore to switch tabs
    qsa('[data-explore-target], [data-tab-target]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = el.getAttribute('data-explore-target') || el.getAttribute('data-tab-target');
        if (!id) return;
        activate(id);
      });
    });

    function fixTabDirection() {
      // managed by keydown logic based on document dir
    }
    window.fixTabDirection = fixTabDirection;
  }

  function setupActiveOnScroll() {
    const links = qsa('.nav-center .nav-link');
    const sections = links.map(a => {
      const href = a.getAttribute('href');
      // Only process valid selectors (must start with # and have content after)
      if (href && href.startsWith('#') && href.length > 1) {
        return qs(href);
      }
      return null;
    }).filter(Boolean);
    
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }

  function setupFormValidation() {
    const form = qs('.contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      qsa('.form-row', form).forEach(row => {
        const input = qs('input, textarea', row);
        const error = qs('.error', row);
        if (!input) return;
        if (!input.checkValidity()) {
          valid = false;
          error.textContent = getErrorMessage(input);
        } else {
          error.textContent = '';
        }
      });
      if (valid) {
        alert(document.documentElement.lang === 'ar' ? 'تم الإرسال (نموذج تجريبي)' : 'Submitted (demo form)');
        form.reset();
      }
    });
  }

  function getErrorMessage(input) {
    const lang = document.documentElement.lang || 'ar';
    const messages = {
      ar: { valueMissing: 'هذا الحقل مطلوب', typeMismatch: 'صيغة غير صحيحة', patternMismatch: 'الرجاء إدخال صيغة صحيحة' },
      en: { valueMissing: 'This field is required', typeMismatch: 'Invalid format', patternMismatch: 'Please match the requested format' }
    };
    if (input.validity.valueMissing) return messages[lang].valueMissing;
    if (input.validity.typeMismatch) return messages[lang].typeMismatch;
    if (input.validity.patternMismatch) return messages[lang].patternMismatch;
    return lang === 'ar' ? 'تحقق من المدخلات' : 'Check your input';
  }

  function setupMobileFloatingNav() {
    const floatingNav = qs('.mobile-floating-nav');
    if (!floatingNav) return;
    
    const toggle = qs('.floating-nav-toggle', floatingNav);
    const drawer = qs('.mobile-nav-drawer', floatingNav);
    const backdrop = qs('.mobile-nav-backdrop', floatingNav);
    const links = qsa('.mobile-nav-link', floatingNav);
    
    if (!toggle || !drawer) return;

    function openNav() {
      floatingNav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      floatingNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // Toggle button click
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (floatingNav.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close on backdrop click
    if (backdrop) {
      backdrop.addEventListener('click', closeNav);
    }

    // Close on link click (with slight delay for navigation)
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        // Close immediately
        closeNav();
        // Update active state
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Let navigation happen naturally
      });
    });

    // Close on outside click (clicking outside drawer)
    document.addEventListener('click', (e) => {
      if (floatingNav.classList.contains('open') && 
          !drawer.contains(e.target) && 
          !toggle.contains(e.target) &&
          !backdrop.contains(e.target)) {
        closeNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && floatingNav.classList.contains('open')) {
        closeNav();
      }
    });

    // Update active state based on current page/section
    function updateActiveState() {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash || '#home';
      
      // Reset all active states
      links.forEach(l => l.classList.remove('active'));

      // Check drawer links
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentHash || (currentPath.includes('index.html') && href === '#home' && currentHash === '')) {
          link.classList.add('active');
        }
        // Check for page matches
        if (href && href.includes('elevators.html') && currentPath.includes('elevators.html')) {
          link.classList.add('active');
        }
        if (href && href.includes('doors.html') && currentPath.includes('doors.html')) {
          link.classList.add('active');
        }
        if (href && href.includes('railings.html') && currentPath.includes('railings.html')) {
          link.classList.add('active');
        }
      });
    }

    // Update on load
    updateActiveState();

    // Update on hash change
    window.addEventListener('hashchange', updateActiveState);

    // Update active state on scroll (for anchor links)
    const sections = links.map(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        return qs(href);
      }
      return null;
    }).filter(Boolean);

    if (sections.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            links.forEach(link => {
              if (link.getAttribute('href') === id) {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
              }
            });
          }
        });
      }, { rootMargin: '-20% 0px -20% 0px', threshold: 0 });

      sections.forEach(section => observer.observe(section));
    }
  }
})();


