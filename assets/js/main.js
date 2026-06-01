/* ============================================================
 * main.js – Anpha | Script dùng chung cho toàn site
 * ============================================================ */

/* ====== MOBILE NAV ====== */
function openMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) { nav.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  if (nav) { nav.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ====== STICKY HEADER SHADOW ====== */
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (!header) return;
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(10,76,138,.18)'
    : '0 2px 12px rgba(10,76,138,.12)';
});

/* ====== CLOSE MOBILE NAV ON ESC ====== */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMobileNav();
});
