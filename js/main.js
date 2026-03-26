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
});

/* ── Scroll-triggered fade-in ──────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

/* ── Skill bar animation on scroll ────────────────────────── */
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => { e.target.style.width = e.target.getAttribute('data-pct') + '%'; }, 200);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => barObserver.observe(b));

/* ── Contact form handler ──────────────────────────────────── */
const form     = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#f87171';
        valid = false;
      }
    });

    if (!valid) {
      showFeedback('error', '⚠️ Please fill in all required fields.');
      return;
    }

    // Email format check
    const emailField = form.querySelector('#email');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
    if (!emailOk) {
      emailField.style.borderColor = '#f87171';
      showFeedback('error', '⚠️ Please enter a valid email address.');
      return;
    }

    // ── Collect data ─────────────────────────────────────────
    const data = {
      firstName: form.fname.value.trim(),
      lastName:  form.lname.value.trim(),
      email:     form.email.value.trim(),
      phone:     form.phone.value.trim(),
      service:   form.service.value,
      message:   form.message.value.trim(),
    };

    // ── Option A: send via Formspree ─────────────────────────
    // 1. Go to https://formspree.io, create a free form, get your endpoint
    // 2. Replace the URL below with your Formspree endpoint
    // 3. Remove the "simulateSubmit()" call and uncomment the fetch block
    //
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    // .then(res => {
    //   if (res.ok) {
    //     showFeedback('success', '✅ Message sent! I'll get back to you soon.');
    //     form.reset();
    //   } else {
    //     showFeedback('error', '❌ Something went wrong. Please try again or use WhatsApp.');
    //   }
    // })
    // .catch(() => showFeedback('error', '❌ Network error. Please try again.'));

    // ── Option B: open pre-filled WhatsApp (fallback / current) ─
    // Remove this block once you hook up a real form backend
    simulateSubmit(data);
  });
}

function simulateSubmit(data) {
  // Build a WhatsApp message from the form data and open it
  const msg = encodeURIComponent(
    `Hi Adolph, I contacted you through your portfolio.\n\n` +
    `Name: ${data.firstName} ${data.lastName}\n` +
    `Email: ${data.email}\n` +
    (data.phone ? `Phone: ${data.phone}\n` : '') +
    (data.service ? `Service: ${data.service}\n` : '') +
    `\nMessage:\n${data.message}`
  );

  // ✅ Replace 27000000000 with your real WhatsApp number
  const waURL = `https://wa.me/+2763 343 6756?text=${msg}`;

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
