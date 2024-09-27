//img de fundo.
const imgFundo = document.querySelector("body");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  imgFundo.style.backgroundPosition = `${x * 5}% ${y * 5}%`;
});

//calculadora.

const display = document.querySelector(".display");
const bts = document.querySelectorAll(".item");
let numeroAtual = "";
let numeroAnterior = "";
let operadorAtual = "";

function atualizarDisplay() {
  display.textContent = numeroAtual;
}

bts.forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoBotao = botao.textContent;

    if (!isNaN(textoBotao) || textoBotao === ".") {
      numeroAtual += textoBotao;
      atualizarDisplay();
    } else if (
      textoBotao === "+" ||
      textoBotao === "-" ||
      textoBotao === "*" ||
      textoBotao === "/"
    ) {
      operadorAtual = textoBotao;
      numeroAnterior = numeroAtual;
      numeroAtual = "";
    } else if (textoBotao === "=") {
      if (operadorAtual === "+") {
        numeroAtual = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
      } else if (operadorAtual === "-") {
        numeroAtual = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
      } else if (operadorAtual === "*") {
        numeroAtual = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
      } else if (operadorAtual === "/") {
        numeroAtual = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
      }
      atualizarDisplay();
    } else if (textoBotao === "C" || textoBotao === "CE") {
      numeroAtual = "";
      numeroAnterior = "";
      operadorAtual = "";
      atualizarDisplay();
    }
  });
});
