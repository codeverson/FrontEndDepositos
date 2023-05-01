const form = document.getElementById("form-deposito");
const numeroa = document.getElementById("numeroa");
const numerob = document.getElementById("numerob");

let formEValido = false;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mensagemSucesso = `Excelente. o número B (${numerob.value}) é maior que o número A (${numeroa.value})`;
  const mensagemErro = `Você falhou! O número A (${numeroa.value}) é menor que o número B (${numerob.value})`;
  const mensagemIgualdade = `Você falhou! Os números A (${numeroa.value}) e B (${numerob.value}) são iguais.`;

  if (numeroa.value < numerob.value) {
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    setTimeout(() => {
      containerMensagemSucesso.style.display = "none";
    }, 2000);
  } else if (numeroa.value > numerob.value) {
    const containerMensagemErro = document.querySelector(".error-message");
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = "block";
    setTimeout(() => {
      containerMensagemErro.style.display = "none";
    }, 2000);
  } else {
    const containerMensagemIgualdade = document.querySelector(".equal-message");
    containerMensagemIgualdade.innerHTML = mensagemIgualdade;
    containerMensagemIgualdade.style.display = "block";
    setTimeout(() => {
      containerMensagemIgualdade.style.display = "none";
    }, 2000);
  }
});