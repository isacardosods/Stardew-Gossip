const busca = document.querySelector("busca");
const posts = document.querySelectorAll(".post");

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

busca.addEventListener("input", () => {
  const termo = normalizarTexto(busca.value);

  posts.forEach((post) => {
    const titulo = normalizarTexto(post.querySelector("h2").innerText);
    const tags = normalizarTexto(post.querySelector(".tags").innerText);

    if (titulo.includes(termo) || tags.includes(termo)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";  
    }
  });
});

