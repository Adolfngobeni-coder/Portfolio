/* ═══════════════════════════════════════════════════════════
   main.js — Adolph Portfolio
   ═══════════════════════════════════════════════════════════ */

/* ── Sticky frosted-glass header ───────────────────────────── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Active nav link on scroll ─────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ── Scroll-triggered fade-in ──────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
fadeEls.forEach(el => fadeObserver.observe(el));

/* ── Skill bar animation on scroll ────────────────────────── */
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.width = e.target.getAttribute('data-pct') + '%';
      }, 200);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => barObserver.observe(b));

/* ── Flip cards ───────────────────────────────────────────── */
const flipCards = document.querySelectorAll('.flip-card');
flipCards.forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
    if (e.key === 'Escape') card.classList.remove('flipped');
  });
  card.addEventListener('blur', () => card.classList.remove('flipped'));
});

/* ── Contact form handler ──────────────────────────────────── */
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    form.querySelectorAll('input, textarea').forEach(f => f.style.borderColor = '');
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#f87171';
        valid = false;
      }
    });
    if (!valid) {
      showFeedback('error', '⚠️ Please fill in all required fields.');
      return;
    }

    const emailField = form.querySelector('#email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      emailField.style.borderColor = '#f87171';
      showFeedback('error', '⚠️ Please enter a valid email address.');
      return;
    }

    const data = {
      firstName: form.fname.value.trim(),
      lastName: form.lname.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
    };
    simulateSubmit(data);
  });
}

function simulateSubmit(data) {
  const msg = encodeURIComponent(
    `Hi Adolph, I contacted you through your portfolio.\n\n` +
    `Name: ${data.firstName} ${data.lastName}\n` +
    `Email: ${data.email}\n` +
    (data.phone ? `Phone: ${data.phone}\n` : '') +
    (data.service && data.service !== 'Select a service…' ? `Service: ${data.service}\n` : '') +
    `\nMessage:\n${data.message}`
  );
  const waURL = `https://wa.me/27000000000?text=${msg}`;
  showFeedback('success', '✅ Opening WhatsApp with your message pre-filled…');
  setTimeout(() => {
    window.open(waURL, '_blank');
    form.reset();
  }, 1200);
}

function showFeedback(type, msg) {
  feedback.className = 'form-feedback ' + type;
  feedback.textContent = msg;
  feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ═══════════════════════════════════════════════════════════
   PROJECT CAROUSEL - 3 SLIDES AT A TIME
   ═══════════════════════════════════════════════════════════ */
const track = document.getElementById('projectTrack');
const prevBtn = document.getElementById('prevProject');
const nextBtn = document.getElementById('nextProject');
const dotsContainer = document.getElementById('projectDots');

if (track && prevBtn && nextBtn && dotsContainer) {
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const totalSlides = slides.length;
  
  // Determine slides per view based on screen width
  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }
  
  let slidesPerView = getSlidesPerView();
  let currentPage = 0;
  const totalPages = Math.ceil(totalSlides / slidesPerView);

  // Create dots
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentPage) dot.classList.add('active');
      dot.addEventListener('click', () => goToPage(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentPage);
    });
  }

  function getSlideWidth() {
    const slide = slides[0];
    if (!slide) return 300;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 24;
    return slide.offsetWidth + gap;
  }

  function updateCarousel() {
    const slideWidth = getSlideWidth();
    const translateValue = -currentPage * slidesPerView * slideWidth;
    track.style.transform = `translateX(${translateValue}px)`;
    updateDots();
  }

  function goToPage(page) {
    currentPage = Math.min(Math.max(page, 0), totalPages - 1);
    updateCarousel();
  }

  function nextSlide() {
    if (currentPage + 1 < totalPages) {
      currentPage++;
    } else {
      currentPage = 0; // loop back to start
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentPage - 1 >= 0) {
      currentPage--;
    } else {
      currentPage = totalPages - 1; // loop to end
    }
    updateCarousel();
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newSlidesPerView = getSlidesPerView();
      if (newSlidesPerView !== slidesPerView) {
        slidesPerView = newSlidesPerView;
        const newTotalPages = Math.ceil(totalSlides / slidesPerView);
        currentPage = Math.min(currentPage, newTotalPages - 1);
        if (currentPage < 0) currentPage = 0;
        createDots();
        updateCarousel();
      } else {
        updateCarousel();
      }
    }, 150);
  });

  // Initialize
  createDots();
  updateCarousel();

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
}

/* ═══════════════════════════════════════════════════════════
   CV MODAL
   ═══════════════════════════════════════════════════════════ */
function openCV() {
  const modal = document.getElementById('cvModal');
  const iframe = document.getElementById('cvFrame');
  if (!iframe.src || iframe.src === window.location.href) {
    iframe.src = iframe.getAttribute('data-src');
  }
  openModal('cvModal');
}

/* ═══════════════════════════════════════════════════════════
   CERTIFICATE LIGHTBOX
   ═══════════════════════════════════════════════════════════ */
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => openCert(card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openCert(card);
    }
  });
});

function openCert(card) {
  const src = card.getAttribute('data-cert');
  const title = card.getAttribute('data-title') || 'Certificate';
  const body = document.getElementById('certModalBody');
  const modalTitle = document.getElementById('certModalTitle');

  modalTitle.innerHTML = `<i class="fa-solid fa-certificate"></i> ${title}`;
  body.innerHTML = `<div class="modal-loading"><i class="fa-solid fa-spinner"></i><span>Loading certificate…</span></div>`;

  if (!src || src === '#') {
    body.innerHTML = `<div class="modal-loading"><i class="fa-solid fa-triangle-exclamation"></i><span>No certificate file linked yet.</span></div>`;
    openModal('certModal');
    return;
  }

  const ext = src.split('.').pop().toLowerCase();
  const isImage = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext);

  if (isImage) {
    const img = new Image();
    img.className = 'cert-lightbox-img';
    img.alt = title;
    img.onload = () => { body.innerHTML = ''; body.appendChild(img); };
    img.onerror = () => { body.innerHTML = '<div class="modal-loading"><i class="fa-solid fa-circle-exclamation"></i><span>Could not load image.</span></div>'; };
    img.src = src;
  } else {
    body.innerHTML = `<iframe src="${src}#toolbar=0&navpanes=0&scrollbar=1" title="${title}" frameborder="0"></iframe>`;
  }
  openModal('certModal');
}

/* ═══════════════════════════════════════════════════════════
   SHARED MODAL HELPERS
   ═══════════════════════════════════════════════════════════ */
function openModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('open');
  document.body.classList.add('modal-open');
  overlay.addEventListener('click', function handler(e) {
    if (e.target === overlay) {
      closeModal(id);
      overlay.removeEventListener('click', handler);
    }
  });
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (id === 'certModal') {
    setTimeout(() => {
      document.getElementById('certModalBody').innerHTML = '';
    }, 350);
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['cvModal', 'certModal'].forEach(id => {
      if (document.getElementById(id).classList.contains('open')) closeModal(id);
    });
  }
});
