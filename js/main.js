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
const navLinks  = document.querySelectorAll('.nav a');

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

/* ── Flip cards — tap/touch & keyboard support ─────────────── */
// On mobile there is no hover, so we toggle a .flipped class on click/tap.
// On desktop hover still works via CSS, click also works as a fallback.
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  // Click / tap — toggle flip
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  // Keyboard — Enter or Space flips the card (accessibility)
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
    // Escape unflips
    if (e.key === 'Escape') {
      card.classList.remove('flipped');
    }
  });

  // Un-flip when focus leaves the card
  card.addEventListener('blur', () => {
    card.classList.remove('flipped');
  });
});

/* ── Contact form handler ──────────────────────────────────── */
const form     = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset field highlights
    form.querySelectorAll('input, textarea').forEach(f => f.style.borderColor = '');

    // Validate required fields
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

    // Validate email format
    const emailField = form.querySelector('#email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      emailField.style.borderColor = '#f87171';
      showFeedback('error', '⚠️ Please enter a valid email address.');
      return;
    }

    // Collect form data
    const data = {
      firstName: form.fname.value.trim(),
      lastName:  form.lname.value.trim(),
      email:     form.email.value.trim(),
      phone:     form.phone.value.trim(),
      service:   form.service.value,
      message:   form.message.value.trim(),
    };

    // ── OPTION A: Formspree (recommended for GitHub Pages) ────
    // 1. Go to https://formspree.io → create a free form → copy your endpoint ID
    // 2. Replace YOUR_FORM_ID below with your actual Formspree ID
    // 3. Remove the simulateSubmit() call and uncomment the fetch block below
    //
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    // .then(res => {
    //   if (res.ok) {
    //     showFeedback('success', '✅ Message sent! I\'ll get back to you soon.');
    //     form.reset();
    //   } else {
    //     showFeedback('error', '❌ Something went wrong. Please try WhatsApp instead.');
    //   }
    // })
    // .catch(() => showFeedback('error', '❌ Network error. Please try again.'));

    // ── OPTION B (current): pre-fill WhatsApp with form data ──
    simulateSubmit(data);
  });
}

function simulateSubmit(data) {
  const msg = encodeURIComponent(
    `Hi Adolph, I contacted you through your portfolio.\n\n` +
    `Name: ${data.firstName} ${data.lastName}\n` +
    `Email: ${data.email}\n` +
    (data.phone ? `Phone: ${data.phone}\n` : '') +
    (data.service ? `Service: ${data.service}\n` : '') +
    `\nMessage:\n${data.message}`
  );
  // ✅ Replace 27000000000 with your real WhatsApp number (no + sign)
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
