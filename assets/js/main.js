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

/* ====== YOUTUBE THUMBNAILS ======
 * Áp dụng cho mọi phần tử có data-youtube="VIDEO_ID".
 * Tự lấy ảnh đại diện từ YouTube và mở video khi click. */
document.querySelectorAll('[data-youtube]').forEach(function (el) {
  const id = el.getAttribute('data-youtube');
  if (!id || id === 'YOUR_VIDEO_ID') return;
  el.style.backgroundImage = "url('https://img.youtube.com/vi/" + id + "/hqdefault.jpg')";
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';
  el.style.cursor = 'pointer';
  el.addEventListener('click', function () {
    window.open('https://www.youtube.com/watch?v=' + id, '_blank');
  });
});
