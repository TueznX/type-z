// Quando o HTML estiver pronto (antes de carregar imagens e outros recursos)
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loadingscreen");
  loadingScreen.classList.add("visible");
});

// Quando a página estiver 100% carregada (imagens, CSS, etc.)
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loadingscreen");
  loadingScreen.classList.remove("visible");
});