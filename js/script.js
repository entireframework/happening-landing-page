function updateIntroHeight() {
  const intro = document.querySelector('.intro');
  if (intro) {
    document.documentElement.style.setProperty('--intro-height', intro.offsetHeight + 'px');
  }
}

function updateHeaderOpacity() {
  const scrollY = window.scrollY;
  const maxScroll = window.innerWidth * 0.15;
  const t = Math.min(scrollY / maxScroll, 1);
  const opacity = 0.8 - t * (0.8 - 0.25);
  document.documentElement.style.setProperty('--header-opacity', opacity);
}

window.addEventListener('load', () => {
  updateIntroHeight();
  updateHeaderOpacity();
});
window.addEventListener('resize', updateIntroHeight);
window.addEventListener('scroll', updateHeaderOpacity);
