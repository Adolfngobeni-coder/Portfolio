/* ═══════════════════════════════════════════════════════════
   main.js — Adolph Portfolio
   ═══════════════════════════════════════════════════════════ */

/* ── Sticky frosted-glass header on scroll ─────────────────── */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Active nav link highlight on scroll ───────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ── Scroll-triggered fade-in for sections ─────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

/* ── Skill bar animation — fires once when bars scroll into view */
const skillBars = document.querySelectorAll('.skill-bar-fill');

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const pct = bar.getAttribute('data-pct');
      // Small delay so the section fade-in finishes first
      setTimeout(() => {
        bar.style.width = pct + '%';
      }, 200);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => barObserver.observe(bar));
