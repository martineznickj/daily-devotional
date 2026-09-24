(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  try {
    var saved = localStorage.getItem('dd-theme');
    if (saved) root.setAttribute('data-theme', saved);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      root.setAttribute('data-theme', 'dark');
  } catch (e) {}
  function sync() {
    if (!toggle) return;
    toggle.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';
  }
  sync();
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      root.setAttribute('data-theme', dark ? 'light' : 'dark');
      try { localStorage.setItem('dd-theme', dark ? 'light' : 'dark'); } catch (e) {}
      sync();
    });
  }
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
})();
