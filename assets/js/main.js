// Atualiza o ano do rodapé automaticamente
document.querySelectorAll("#year, #year2").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Função genérica para animar barras de progresso
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');

  bars.forEach(bar => {
    const fill = bar.querySelector('.progress-fill');
    const target = parseInt(bar.dataset.progress, 10) || 0;

    // Reinicia a barra (caso recarregue ou reaplique)
    fill.style.width = '0%';

    // Anima depois de pequeno atraso (para suavizar)
    setTimeout(() => {
      fill.style.width = `${target}%`;
    }, 200);
  });
}


// Executa automaticamente quando o DOM for carregado
document.addEventListener('DOMContentLoaded', initProgressBars);

// Controle do menu hambúrguer
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !expanded);
    menuToggle.classList.toggle("active");
    nav.classList.toggle("open");
  });
}


 