document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hide'), 400);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => preloader && preloader.classList.add('hide'), 2500);

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 80, easing: 'ease-out-cubic' });
  }

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme Toggle ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('apexbuild-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('apexbuild-theme', next);
  });

  /* ---------- Sticky Header ---------- */
  const header = document.getElementById('siteHeader');
  const backToTop = document.getElementById('backToTop');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile Nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(sec => navObserver.observe(sec));

  /* ---------- Hero Slider ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dots .dot');
  let currentSlide = 0;
  const showSlide = (i) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    currentSlide = i;
  };
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(+dot.dataset.slide)));
  setInterval(() => showSlide((currentSlide + 1) % slides.length), 5500);

  /* ---------- Counter Animation ---------- */
  const counters = document.querySelectorAll('.stat-number');
  const animateCounter = (el) => {
    const target = +el.dataset.count;
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Project Filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  document.querySelectorAll('.project-zoom').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const img = btn.closest('.project-card').querySelector('img');
      lightboxImg.src = img.src.replace('w=800', 'w=1600');
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  const closeLightbox = () => lightbox.classList.remove('open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- Testimonial Slider ---------- */
  const tCards = document.querySelectorAll('.testimonial-card');
  const tDotsWrap = document.getElementById('testimonialDots');
  let tCurrent = 0;
  tCards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(i));
    tDotsWrap.appendChild(dot);
  });
  const tDots = tDotsWrap.querySelectorAll('span');
  function showTestimonial(i) {
    tCards[tCurrent].classList.remove('active');
    tDots[tCurrent].classList.remove('active');
    tCurrent = (i + tCards.length) % tCards.length;
    tCards[tCurrent].classList.add('active');
    tDots[tCurrent].classList.add('active');
  }
  document.getElementById('testimonialNext').addEventListener('click', () => showTestimonial(tCurrent + 1));
  document.getElementById('testimonialPrev').addEventListener('click', () => showTestimonial(tCurrent - 1));
  setInterval(() => showTestimonial(tCurrent + 1), 6500);

  /* ---------- Back to top ---------- */
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Cursor Glow ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  /* ---------- Contact form -> WhatsApp ---------- */
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const phone = document.getElementById('cf-phone').value.trim();
    const service = document.getElementById('cf-service').value;
    const message = document.getElementById('cf-message').value.trim();

    const text = `Hi ApexBuild! I'd like to enquire about a project.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Project Type:* ${encodeURIComponent(service)}%0A*Details:* ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/94769214278?text=${text}`, '_blank');
  });

});
