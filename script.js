const reviewsData = [
  { nome: "Mariana S.", texto: "Atendimento impecável, ambiente luxuoso e profissionais incríveis.", estrelas: 5 },
  { nome: "Carlos A.", texto: "Nunca me senti tão confortável em uma clínica odontológica.", estrelas: 5 },
  { nome: "Fernanda L.", texto: "Resultado super natural, superou minhas expectativas.", estrelas: 5 },
  { nome: "Ricardo M.", texto: "Tecnologia moderna e atendimento humanizado.", estrelas: 4 },
  { nome: "Juliana P.", texto: "Equipe extremamente profissional e atenciosa.", estrelas: 5 },
  { nome: "Eduardo R.", texto: "Clínica de alto padrão, recomendo sem pensar duas vezes.", estrelas: 5 }
];

function gerarEstrelas(qtd) {
  return "★".repeat(qtd) + "☆".repeat(5 - qtd);
}

function gerarAvaliacoes() {
  const container = document.getElementById("reviews");
  container.innerHTML = "";

  const selecionadas = reviewsData.sort(() => 0.5 - Math.random()).slice(0, 3);

  selecionadas.forEach(r => {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <span>${gerarEstrelas(r.estrelas)}</span>
      <p>"${r.texto}"</p>
      <strong>${r.nome}</strong>
    `;
    container.appendChild(div);
  });
}

gerarAvaliacoes();
