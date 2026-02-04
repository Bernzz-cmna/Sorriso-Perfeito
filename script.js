document.addEventListener("DOMContentLoaded", () => {

  const whatsapp = document.querySelector(".whatsapp-fixo");

  setInterval(() => {
    whatsapp.classList.toggle("pulse");
  }, 1400);

});

