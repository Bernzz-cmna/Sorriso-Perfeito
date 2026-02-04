// SCROLL REVEAL
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section, .hero-grid').forEach(el => {
  observer.observe(el);
});

// PRELOAD DE IMAGENS
document.querySelectorAll('img').forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity .7s ease';

  if (img.complete) {
    img.style.opacity = '1';
  } else {
    img.onload = () => img.style.opacity = '1';
  }
});

// HEADER SOMBRA
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow =
    window.scrollY > 30
      ? '0 20px 50px rgba(0,0,0,.6)'
      : 'none';
});
