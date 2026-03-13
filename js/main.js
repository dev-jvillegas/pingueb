/* ============================================================
   PINGÜEB — JavaScript principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR PERSONALIZADO ── */
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // El anillo sigue al cursor con un pequeño retraso (lerp)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Cursor se agranda sobre elementos clicables
  document.querySelectorAll('a, button, .service-card, .portfolio-item, .skill-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      cursorRing.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      cursorRing.classList.remove('hovered');
    });
  });


  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ── NAVBAR: oscurece al hacer scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ── MENÚ HAMBURGUESA (móvil) ── */
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    // Abrir / cerrar al hacer clic en el botón
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }


  /* ── SMOOTH SCROLL para enlaces internos ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ── CONTADORES ANIMADOS ──
     Busca elementos con data-target y los anima de 0 al valor real.
     El contador arranca cuando la barra de stats entra en pantalla.
     Para cambiar un número: edita data-target en el HTML.
     Para cambiar el sufijo: edita data-suffix en el HTML.
  ── */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const prefix   = el.dataset.prefix || '';
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    const startTime = performance.now();

    function update(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current  = Math.round(easeOutQuart(progress) * target);
      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // Dispara los contadores cuando la stats-bar entra en pantalla (solo una vez)
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-num[data-target]').forEach(animateCounter);
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });

    counterObserver.observe(statsBar);
  }

});