// Seleciona os elementos das telas
const telaEntrada = document.getElementById("tela-entrada");
const telaTipoUsuario = document.getElementById("tela-tipo-usuario");

// Seleciona o botão "Iniciar cadastro"
const botaoIniciar = telaEntrada.querySelector("button");

// Ao clicar no botão, troca as telas
botaoIniciar.addEventListener("click", () => {
  telaEntrada.style.display = "none";
  telaTipoUsuario.style.display = "block";
});
