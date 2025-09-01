// Voltar ao topo
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.onclick = function (e) {
  e.stopPropagation();
  nav.classList.toggle("active");
};

// Fecha menu ao clicar fora
document.body.addEventListener('click', () => {
  nav.classList.remove("active");
});

nav.addEventListener('click', (e) => {
  e.stopPropagation();
});