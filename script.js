// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     SCROLL SUAVE PARA ÂNCORAS
  ========================== */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ==========================
     HEADER DINÂMICO AO SCROLL
  ========================== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  /* ==========================
     EFEITO PULSE NO WHATSAPP
  ========================== */
  const whatsappBtn = document.querySelector(".whatsapp-fixo");

  if (whatsappBtn) {
    setInterval(() => {
      whatsappBtn.classList.toggle("pulse");
    }, 1500);
  }

  /* ==========================
     FEEDBACK DE CLIQUE NO CTA
  ========================== */
  const ctaBtn = document.querySelector(".cta");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      console.log("CTA clicado: Agendar Avaliação");
    });
  }

});

