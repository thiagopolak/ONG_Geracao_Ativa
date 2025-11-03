// Atualiza o ano do rodapé automaticamente
document.querySelectorAll("#year, #year2").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Função para animar barras de progresso
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

// ==========================
//  Menu Hamburguer
// ==========================
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
// ==========================
// GERAÇÃO DE CARDS DE PROJETOS
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    const fill = bar.querySelector(".progress-fill");
    const progress = bar.getAttribute("data-progress");

    if (fill && progress) {
      fill.style.width = `${progress}%`;
    }
  });
});
// ==============================
// VALIDAÇÃO DO FORMULÁRIO DE CADASTRO
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio automático

    let isValid = true;

    // limpa mensagens antigas
    form.querySelectorAll(".error-message").forEach(el => el.remove());

    // valida Nome
    const nome = form.nome;
    if (nome.value.trim().length < 3) {
      showError(nome, "O nome deve ter pelo menos 3 caracteres.");
      isValid = false;
    }

    // valida E-mail
    const email = form.email;
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showError(email, "Digite um e-mail válido.");
      isValid = false;
    }

    // valida CPF (formato XXX.XXX.XXX-XX)
    const cpf = form.cpf;
    if (!cpf.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      showError(cpf, "Digite um CPF válido no formato 000.000.000-00.");
      isValid = false;
    }

    // valida Telefone (formato (00) 90000-0000)
    const telefone = form.telefone;
    if (!telefone.value.match(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/)) {
      showError(telefone, "Digite um telefone válido, ex: (11) 90000-0000.");
      isValid = false;
    }

    // valida Nascimento
    const nascimento = form.nascimento;
    if (!nascimento.value) {
      showError(nascimento, "Informe sua data de nascimento.");
      isValid = false;
    }

    // valida CEP
    const cep = form.cep;
    if (!cep.value.match(/^\d{5}-\d{3}$/)) {
      showError(cep, "Digite um CEP válido, ex: 12345-678.");
      isValid = false;
    }

    // valida Endereço
    if (!form.endereco.value.trim()) {
      showError(form.endereco, "Informe seu endereço.");
      isValid = false;
    }

    // valida Cidade
    if (!form.cidade.value.trim()) {
      showError(form.cidade, "Informe sua cidade.");
      isValid = false;
    }

    // valida Estado
    if (!form.estado.value) {
      showError(form.estado, "Selecione um estado.");
      isValid = false;
    }

    // valida Tipo
    if (!form.tipo.value) {
      showError(form.tipo, "Selecione uma opção.");
      isValid = false;
    }

    if (isValid) {
      alert("Cadastro enviado com sucesso!");
      form.reset(); // limpa formulário
    }
  });

  // função para mostrar mensagem de erro
  function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.textContent = message;
    element.insertAdjacentElement("afterend", error);
  }
});

 