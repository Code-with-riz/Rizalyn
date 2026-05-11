// ── Read More toggle ──
const bio = document.getElementById('bio');
const readMoreBtn = document.getElementById('readMoreBtn');

readMoreBtn.addEventListener('click', function () {
  const isExpanded = bio.classList.toggle('expanded');
  readMoreBtn.textContent = isExpanded ? 'Read less' : 'Read more';
});

// ── Sidebar active state ──
const navItems = document.querySelectorAll('[data-nav]');

navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navItems.forEach(function (n) {
      n.classList.remove('active');
    });
    item.classList.add('active');
  });
});
