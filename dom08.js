const eValor = document.querySelector("p");

const eButtons = document.querySelectorAll("button");

const eParButton = eButtons[0];
eParButton.addEventListener("click", ehParListener);

const eImparButton = eButtons[1];
eImparButton.addEventListener("click", ehImparListener);

const eLists = document.querySelectorAll("ul");

const eParList = eLists[0];
const eImparList = eLists[1];

function sorteiaValor() {
  const novoNumero = Math.floor(Math.random() * 10);
  eValor.textContent = novoNumero;
}

function ehParListener(event) {
  console.log("É par!");
  criaElemento(eParList);
}

function ehImparListener(event) {
  console.log("É ímpar!");
  criaElemento(eImparList);
}

function criaElemento(lista) {
  const eLi = document.createElement("li");
  eLi.textContent = eValor.textContent;

  lista.appendChild(eLi);

  sorteiaValor();
}
