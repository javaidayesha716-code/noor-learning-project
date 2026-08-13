const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.style.display === 'block';
  primaryNav.style.display = isOpen ? 'none' : 'block';
  navToggle.setAttribute('aria-expanded', !isOpen);
});