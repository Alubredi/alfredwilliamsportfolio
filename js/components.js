/**
 * ALFRED E. WILLIAMS — CORE UI COMPONENTS & SYSTEM INTERACTIONS (components.js)
 * Manages live world clocks, theme state, custom cursor, directory drawer, and lightboxes.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. THEME CONTROLLER
  // --------------------------------------------------------------------------
  const themeStorageKey = 'alfred_portfolio_theme';
  const savedTheme = localStorage.getItem(themeStorageKey);
  const root = document.documentElement;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
    updateThemeToggleLabel();
  }

  function updateThemeToggleLabel() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = isDark
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> Light`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> Dark`;
    });
  }

  // --------------------------------------------------------------------------
  // 2. LIVE WORLD CLOCKS TICKER (Lagos, London, New York, Tokyo)
  // --------------------------------------------------------------------------
  const timezoneMap = [
    { label: 'LAGOS', zone: 'Africa/Lagos' },
    { label: 'LONDON', zone: 'Europe/London' },
    { label: 'NEW YORK', zone: 'America/New_York' },
    { label: 'TOKYO', zone: 'Asia/Tokyo' }
  ];

  function updateWorldClocks() {
    const clockContainers = document.querySelectorAll('.world-clocks');
    if (!clockContainers.length) return;

    const now = new Date();
    const html = timezoneMap.map(item => {
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: item.zone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      return `<span class="clock-item"><span>${item.label}</span> <strong>${timeStr}</strong></span>`;
    }).join(' <span style="opacity:0.3">/</span> ');

    clockContainers.forEach(container => {
      container.innerHTML = html;
    });
  }

  // --------------------------------------------------------------------------
  // 3. CUSTOM CURSOR & MAGNETIC EFFECT
  // --------------------------------------------------------------------------
  function initCursor() {
    const isTouch = window.matchMedia('(hover: none), (max-width: 860px)').matches;
    if (isTouch) return;

    let dot = document.querySelector('.cursor-dot');
    let ring = document.querySelector('.cursor-ring');

    if (!dot || !ring) {
      dot = document.createElement('div');
      dot.className = 'cursor-dot';
      ring = document.createElement('div');
      ring.className = 'cursor-ring';
      document.body.appendChild(dot);
      document.body.appendChild(ring);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover triggers
    const interactiveSelectors = 'a, button, .btn, .showcase-card, .directory-row, input, textarea';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.add('hover-active');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.remove('hover-active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. SCROLL PROGRESS
  // --------------------------------------------------------------------------
  function initScrollProgress() {
    let bar = document.querySelector('.scroll-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'scroll-progress-bar';
      document.body.appendChild(bar);
    }

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalH > 0 ? (scrollY / totalH) * 100 : 0;
      bar.style.width = `${progress}%`;
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 5. SLIDE-OUT DIRECTORY DRAWER & COMPLETE ARCHIVE
  // --------------------------------------------------------------------------
  const directoryData = [
    { title: 'Renalytica Enterprise Platform', category: 'Full-Stack & BI', year: '2026', link: 'case-studies/renalytica.html', ext: 'https://renalytica.com' },
    { title: 'AXiA Active Storefront & Paid Ads', category: 'E-Commerce & Ads', year: '2024', link: 'case-studies/axia-active.html', ext: 'https://axiaactive.com' },
    { title: 'GoFar International Academy Portal', category: 'Web Architecture', year: '2023', link: 'case-studies/gofar-academy.html', ext: 'https://www.gofarinternationalacademy.com/' },
    { title: 'My WORLD of Literature (TWOL)', category: 'Journal & Criticism', year: '2016–2019', link: 'case-studies/twol-literature.html', ext: 'https://twol101.wordpress.com/' },
    { title: 'SimFitness Personal Planner', category: 'Web App', year: '2024', link: 'case-studies/simfitness.html', ext: 'https://simfitness-personal-fitness-planner.netlify.app/' },
    { title: 'IELTS Speaking Assessment Tool', category: 'Assessment System', year: '2024', link: 'case-studies/otec-ielts.html', ext: 'https://ieltsspeakingassessmentbyotec.netlify.app/' },
    { title: '9jaProQuiz Interactive Learning', category: 'EdTech App', year: '2024', link: 'case-studies/9japroquiz.html', ext: 'https://9japroquiz.netlify.app/' },
    { title: 'WC Social Media Calendar & Hub', category: 'Content Systems', year: '2024', link: 'case-studies/wcsocial-calendar.html', ext: 'https://wcsocialmediacalendar.netlify.app/' },
    { title: 'HealthBay Wellness Platform', category: 'Healthcare Web', year: '2024', link: 'case-studies/healthbay.html', ext: 'https://healthbayv3.netlify.app/' },
    { title: 'Tim Milehin Creative Portfolio', category: 'Web Dev & Portfolio', year: '2024', link: 'case-studies/timmilehin.html', ext: 'https://timmilehinportfolio.netlify.app/#about' },
    { title: 'Presidential Committee Report (PCNI)', category: 'Policy Document (145p)', year: '2016', link: 'works.html#pcni', ext: null },
    { title: '“The Far Country” Theatrical Review', category: 'Arts Criticism', year: '2017', link: 'https://twol101.wordpress.com/2017/05/21/the-far-country-review-nearer-than-you-think/', ext: 'https://twol101.wordpress.com/2017/05/21/the-far-country-review-nearer-than-you-think/' },
    { title: 'Blog &amp; Essays — Critical Journal', category: 'Journal &amp; Essays', year: '2026', link: 'blog.html', ext: null },
    { title: 'Privacy Policy &amp; Data Rights', category: 'Governance &amp; Policy', year: '2026', link: 'privacy.html', ext: null },
    { title: 'Terms of Usage &amp; Engagement', category: 'Governance &amp; Policy', year: '2026', link: 'terms.html', ext: null },
    { title: 'Skills &amp; Craft Matrix (10-Yr Overview)', category: 'Core Competency', year: '2026', link: 'index.html#skills', ext: null },
    { title: 'Official Master CV Repository (PDF)', category: 'Credentials &amp; Resume', year: '2026', link: 'Resume and CV/Alfred_Williams_Master_CV.pdf', ext: null },
    { title: 'Lagos SME Field Research (551 SMEs)', category: 'Market Research', year: '2021', link: 'about.html#sme-research', ext: null },
    { title: 'US Embassy F-1 Consular Blueprint', category: 'Persuasive Strategy', year: '2018', link: 'services.html#admissions', ext: null }
  ];

  function renderDirectoryList(filter = 'all') {
    const listContainer = document.querySelector('.drawer-list');
    if (!listContainer) return;

    const isSubfolder = window.location.pathname.includes('/case-studies/') || window.location.href.includes('/case-studies/');
    const rootPrefix = isSubfolder ? '../' : '';

    let filtered = directoryData;
    if (filter === 'web') {
      filtered = directoryData.filter(d => d.category.includes('Web') || d.category.includes('Full-Stack') || d.category.includes('E-Commerce') || d.category.includes('App'));
    } else if (filter === 'editorial') {
      filtered = directoryData.filter(d => d.category.includes('Journal') || d.category.includes('Essay') || d.category.includes('Criticism') || d.category.includes('Policy') || d.category.includes('Research'));
    } else if (filter === 'tools') {
      filtered = directoryData.filter(d => d.category.includes('Tool') || d.category.includes('System') || d.category.includes('App') || d.category.includes('Calendar'));
    }

    listContainer.innerHTML = filtered.map((item, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      let href = '#';
      if (item.link) {
        if (item.link.startsWith('http')) {
          href = item.link;
        } else {
          href = rootPrefix + item.link;
        }
      } else if (item.ext) {
        href = item.ext;
      }

      return `
        <a class="directory-row" href="${href}">
          <div class="directory-row-left">
            <span class="directory-index">${num}</span>
            <span class="directory-name">${item.title}</span>
          </div>
          <span class="directory-category">${item.category} · ${item.year}</span>
        </a>
      `;
    }).join('');
  }

  function initDirectoryDrawer() {
    let drawer = document.querySelector('.directory-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'directory-drawer';
      drawer.innerHTML = `
        <div class="drawer-backdrop"></div>
        <aside class="drawer-panel" role="dialog" aria-modal="true" aria-label="Project Directory">
          <div class="drawer-header">
            <div class="drawer-title">Project Directory &amp; Archive</div>
            <button class="drawer-close-btn" aria-label="Close directory">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="drawer-tabs">
            <button class="drawer-tab active" data-filter="all">All (15)</button>
            <button class="drawer-tab" data-filter="web">Web &amp; Apps</button>
            <button class="drawer-tab" data-filter="editorial">Editorial &amp; Research</button>
            <button class="drawer-tab" data-filter="tools">Interactive Tools</button>
          </div>
          <div class="drawer-list"></div>
        </aside>
      `;
      document.body.appendChild(drawer);
    }

    renderDirectoryList('all');

    // Drawer Event Listeners
    document.querySelectorAll('.directory-trigger-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        drawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeBtn = drawer.querySelector('.drawer-close-btn');
    const backdrop = drawer.querySelector('.drawer-backdrop');

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });

    // Tab filtering
    drawer.querySelectorAll('.drawer-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        drawer.querySelectorAll('.drawer-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderDirectoryList(tab.dataset.filter);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. ONE-CLICK EMAIL COPY FEEDBACK
  // --------------------------------------------------------------------------
  function initCopyEmail() {
    document.querySelectorAll('[data-copy-email]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-copy-email') || 'officialwilliamsae@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = `<span>Copied to clipboard!</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2400);
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. STUDIO PRELOADER (INDEX PAGE)
  // --------------------------------------------------------------------------
  function initPreloader() {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader) return;

    const countEl = document.getElementById('preloaderCount');
    const statusEl = document.getElementById('preloaderStatusText');
    const barFill = document.getElementById('preloaderBarFill');

    // Check if user already saw preloader in this tab session
    const hasPreloaded = sessionStorage.getItem('alfred_preloaded');
    const duration = hasPreloaded ? 350 : 1350;

    document.body.style.overflow = 'hidden';

    const statusMessages = [
      { pct: 0, text: 'CALIBRATING 12-COLUMN BLUEPRINT...' },
      { pct: 25, text: 'INDEXING EDITORIAL & RESEARCH ARCHIVES...' },
      { pct: 50, text: 'SYNCHRONIZING LAGOS FIELD DATA (551 SMEs)...' },
      { pct: 75, text: 'MOUNTING 3D DEPTH SHADERS & VECTOR ENGINES...' },
      { pct: 95, text: 'SYSTEM ARCHIVE READY // LAUNCHING' }
    ];

    const startTime = performance.now();

    function updateCounter(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(eased * 100);

      if (countEl) countEl.textContent = String(currentVal).padStart(2, '0');
      if (barFill) barFill.style.width = `${currentVal}%`;

      for (let i = statusMessages.length - 1; i >= 0; i--) {
        if (currentVal >= statusMessages[i].pct) {
          if (statusEl && statusEl.textContent !== statusMessages[i].text) {
            statusEl.textContent = statusMessages[i].text;
          }
          break;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        sessionStorage.setItem('alfred_preloaded', 'true');
        setTimeout(() => {
          preloader.classList.add('is-opening');
          setTimeout(() => {
            preloader.classList.add('is-finished');
            document.body.style.overflow = '';
            window.dispatchEvent(new CustomEvent('sitePreloaded'));
          }, 850);
        }, 120);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // --------------------------------------------------------------------------
  // 8. PAGE-TO-PAGE TRANSITION CURTAIN & SMOOTH IN-PAGE ANCHORS
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // 8. PAGE-TO-PAGE EDITORIAL CURTAIN & SMOOTH IN-PAGE ANCHORS
  // --------------------------------------------------------------------------
  function initPageTransitions() {
    let curtain = document.getElementById('pageCurtain');
    if (!curtain) {
      curtain = document.createElement('div');
      curtain.className = 'page-transition-curtain';
      curtain.id = 'pageCurtain';
      curtain.setAttribute('aria-hidden', 'true');
      curtain.innerHTML = `
        <div class="curtain-center">
          <div class="curtain-compass-glyph" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="12,3 15,12 12,10 9,12" fill="currentColor"/>
              <polygon points="12,21 9,12 12,14 15,12" fill="currentColor" opacity="0.35"/>
            </svg>
          </div>
          <div class="curtain-brand">Alfred <em>E. Williams</em></div>
          <div class="curtain-label">
            <span class="status-dot"></span>
            <span id="curtainStatus">EDITORIAL ATELIER // DISPATCHING</span>
          </div>
          <div class="curtain-sweep-line"></div>
        </div>
      `;
      document.body.appendChild(curtain);
    }

    // Smooth unveil on page show / history navigation
    window.addEventListener('pageshow', () => {
      curtain.classList.remove('is-active');
      document.body.classList.remove('page-is-exiting');
    });

    // Intercept clicks on internal navigational links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore external protocols or targets
      if (
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      // Handle in-page anchor links (e.g., #skills, #work, #engine)
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        if (!targetId) return;
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          e.preventDefault();
          const headerOffset = 84;
          const elemPos = targetElem.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elemPos - headerOffset,
            behavior: 'smooth'
          });
          history.pushState(null, '', href);
          targetElem.classList.remove('section-highlight-flash');
          void targetElem.offsetWidth;
          targetElem.classList.add('section-highlight-flash');
        }
        return;
      }

      // Check if link points to same page with a hash (e.g., index.html#skills)
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const [destPath, destHash] = href.split('#');

      if (destPath === currentPath) {
        if (destHash) {
          const targetElem = document.getElementById(destHash);
          if (targetElem) {
            e.preventDefault();
            const headerOffset = 84;
            const elemPos = targetElem.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elemPos - headerOffset,
              behavior: 'smooth'
            });
            history.pushState(null, '', '#' + destHash);
            targetElem.classList.remove('section-highlight-flash');
            void targetElem.offsetWidth;
            targetElem.classList.add('section-highlight-flash');
            return;
          }
        }
      }

      // Ignore cross-domain external links
      if (link.hostname && link.hostname !== window.location.hostname) {
        return;
      }

      // Internal Page Navigation: activate disappearing page exit & curtain transition
      e.preventDefault();
      const rawText = link.textContent.trim().toUpperCase() || 'NEXT CHAPTER';
      const statusSpan = document.getElementById('curtainStatus');
      if (statusSpan) {
        statusSpan.textContent = `DISPATCHING TO ${rawText.slice(0, 26)}...`;
      }

      document.body.classList.add('page-is-exiting');
      curtain.classList.add('is-active');

      setTimeout(() => {
        window.location.href = href;
      }, 320);
    });
  }

  // --------------------------------------------------------------------------
  // 9. SCROLLYTELLING SESSIONS & CHAPTER RAIL
  // --------------------------------------------------------------------------
  function initSessionRail() {
    const isTouch = window.matchMedia('(hover: none), (max-width: 1260px)').matches;
    if (isTouch) return;

    // Collect sections and articles with ids or data-session-title
    const sections = Array.from(document.querySelectorAll('section[id], section[data-session-title], article[id], footer[id]'));
    if (sections.length < 3) return;

    // Avoid duplicates
    let rail = document.querySelector('.scrolly-session-rail');
    if (rail) rail.remove();

    rail = document.createElement('nav');
    rail.className = 'scrolly-session-rail';
    rail.setAttribute('aria-label', 'Editorial Session Tracker');

    const sessionItems = sections.map((sec, idx) => {
      const id = sec.id || `session-${idx + 1}`;
      if (!sec.id) sec.id = id;
      const num = String(idx + 1).padStart(2, '0');
      const title = sec.getAttribute('data-session-title') || 
                    sec.querySelector('.section-title')?.textContent?.trim() || 
                    sec.querySelector('.display-title')?.textContent?.trim() || 
                    `Chapter ${num}`;
      const cleanTitle = title.replace(/\s+/g, ' ').slice(0, 24);

      return { sec, id, num, cleanTitle };
    });

    rail.innerHTML = sessionItems.map((item, idx) => `
      <a href="#${item.id}" class="scrolly-session-item ${idx === 0 ? 'is-active' : ''}" data-target-id="${item.id}" aria-label="${item.num} ${item.cleanTitle}">
        <span class="scrolly-session-pip"></span>
        <span class="scrolly-session-tooltip">${item.num} · ${item.cleanTitle}</span>
      </a>
    `).join('');

    document.body.appendChild(rail);

    // Track active session on scroll
    let ticking = false;
    function updateActiveSession() {
      const scrollY = window.scrollY || window.pageYOffset;
      const headerOffset = 120;
      let activeIndex = 0;

      sessionItems.forEach((item, idx) => {
        const top = item.sec.offsetTop - headerOffset;
        const height = item.sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          activeIndex = idx;
        }
      });

      const railLinks = rail.querySelectorAll('.scrolly-session-item');
      railLinks.forEach((link, idx) => {
        link.classList.toggle('is-active', idx === activeIndex);
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSession);
        ticking = true;
      }
    }, { passive: true });

    updateActiveSession();
  }

  // --------------------------------------------------------------------------
  // 10. SCROLLYTELLING ANIMATIONS & READING FOCUS
  // --------------------------------------------------------------------------
  function initScrollytelling() {
    // 1. Reveal elements on scroll (.scrolly-fade)
    const revealElements = document.querySelectorAll('.scrolly-fade, .section-head');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-inview'));
    }

    // 2. Scrollytelling Reading Focus Highlights (.scrolly-focus-span)
    const focusSpans = document.querySelectorAll('.scrolly-focus-span');
    if (focusSpans.length && 'IntersectionObserver' in window) {
      const focusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-focused', entry.isIntersecting);
        });
      }, { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' });

      focusSpans.forEach(span => focusObserver.observe(span));
    }

    // 3. Animated Number Counters
    const counterElements = document.querySelectorAll('.counter-number[data-counter-target]');
    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            obs.unobserve(el);
            animateCounter(el);
          }
        });
      }, { threshold: 0.2 });

      counterElements.forEach(el => counterObserver.observe(el));
    } else {
      counterElements.forEach(el => animateCounter(el));
    }

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-counter-target'), 10);
      const suffix = el.getAttribute('data-counter-suffix') || '';
      if (isNaN(target)) return;

      const duration = 1400;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(ease * target);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + suffix;
        }
      }
      requestAnimationFrame(update);
    }
  }

  // --------------------------------------------------------------------------
  // 11. SUBTLE 3D CARD DEPTH TILT (DESKTOP)
  // --------------------------------------------------------------------------
  function initCardDepth() {
    const isTouch = window.matchMedia('(hover: none), (max-width: 860px)').matches;
    if (isTouch) return;

    const cards = document.querySelectorAll('.skill-card, .showcase-card, .metric-card, .repurpose-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 12. PARALLAX SCROLL MOTION ON 2D ILLUSTRATIONS & MEDIA
  // --------------------------------------------------------------------------
  function initParallaxMedia() {
    const isTouch = window.matchMedia('(hover: none), (max-width: 860px)').matches;
    if (isTouch) return;

    const mediaImages = document.querySelectorAll('.card-media img, .skill-illustration-media img, .faq-advisory-media img');
    if (!mediaImages.length) return;

    mediaImages.forEach(img => {
      img.style.transform = 'scale(1.08) translateY(0px)';
      img.style.willChange = 'transform';
    });

    let ticking = false;

    function onScrollParallax() {
      const vh = window.innerHeight;
      mediaImages.forEach(img => {
        const rect = img.parentElement ? img.parentElement.getBoundingClientRect() : img.getBoundingClientRect();
        if (rect.bottom > -100 && rect.top < vh + 100) {
          const centerY = rect.top + rect.height / 2;
          const distFromCenter = centerY - (vh / 2);
          const normDist = distFromCenter / (vh / 2);
          const translateY = Math.max(Math.min(normDist * -14, 18), -18);
          img.style.transform = `scale(1.08) translateY(${translateY.toFixed(2)}px)`;
        }
      });
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScrollParallax);
        ticking = true;
      }
    }, { passive: true });

    onScrollParallax();
  }

  // --------------------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggleLabel();
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    initCursor();
    initScrollProgress();
    initDirectoryDrawer();
    initCopyEmail();
    initPreloader();
    initPageTransitions();
    initSessionRail();
    initScrollytelling();
    initCardDepth();
    initParallaxMedia();
  });

})();

