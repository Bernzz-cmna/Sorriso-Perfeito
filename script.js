// ANIMAÇÕES AO SCROLL (ELEGANTE)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Observa seções e hero
document.querySelectorAll('.section, .hero-grid').forEach(el => {
  observer.observe(el);
});

// CORREÇÃO / GARANTIA DE IMAGENS
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    console.warn(`Imagem não carregou: ${img.src}`);
  });

  // força render correta (evita "transparente bugado")
  img.style.opacity = '0';
  img.style.transition = 'opacity .6s ease';

  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });
});

// SCROLL SUAVE PARA CTAs INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// EFEITO SUTIL NO HEADER AO SCROLL
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 10px 40px rgba(0,0,0,.6)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// MICRO INTERAÇÃO NO WHATSAPP
const whatsapp = document.querySelector('.whatsapp-fixo');

if (whatsapp) {
  whatsapp.addEventListener('mouseenter', () => {
    whatsapp.style.transform = 'scale(1.08)';
  });

  whatsapp.addEventListener('mouseleave', () => {
    whatsapp.style.transform = 'scale(1)';
  });
}
