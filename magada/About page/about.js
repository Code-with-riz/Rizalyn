// ── Sidebar active state ──
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navItems.forEach(function (n) {
      n.classList.remove('active');
    });
    item.classList.add('active');
  });
});
