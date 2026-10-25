const toggleBtn = document.getElementById('mobile-nav-toggle');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('mobile-toggle-icon');

if (toggleBtn && menu && icon) {
  toggleBtn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden');
    icon.textContent = isHidden ? 'menu' : 'close';
  });

  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      icon.textContent = 'menu';
    });
  });
}