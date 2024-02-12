// Select the HTML elements for JS, where it will be manipulated and treated according to what is asked in the challenge
// Seleciona os elementos do html para o JS, onde vai ser manipualdo e tratado conforme o que se pede no desafio
const inputValue = document.getElementById("inputValue");
const buttonClick = document.getElementById("btnEnter");
const elementMsg = document.getElementById("message");

// add a DOM event to the buttonClick element - adiciona um evento DOM no elemento buttonClick
buttonClick.addEventListener("click", execValid);

function execValid() {
 attemps();
}

// Generates a number random
// Gera um numero aleatório
function randomNumber() {
 let numberRandom = Math.floor(Math.random() * 10);
 return numberRandom;
}

// Convert input value to int -> data type
// Converte o valor do input para int -> tipo de dado
function convNumber() {
 let inputVal = parseInt(inputValue.value);
 return inputVal;
}

// Validates the answer, whether it is equal to or different from the randomly generated number
// Valida a resposta, se está igual ou diferente do numero gerado aleatoriamente
function validAnswer() {
 let inputValue = convNumber();
 let randNumber = randomNumber();

 if (inputValue == randNumber) {
  createdElementCorrect();
  congratulations();
  newButton();
 } else {
  createdElementError();
 }
}

// Counter variables
// Variáveis contadoras
let count = 0;
let limitedClick = 6;
let countChance = 6;

// Controls user attempts during responses and limits to 6 attempts
// Controla as tentativas do usuario durante as respostas e limita a 6 tentativas
function attemps() {
 if (count >= limitedClick) {
  overAttemps();
  newButton();
  return;
 } else {
  count++;
  countChance--;
  validAnswer();
 }
}

// Creates the message element to inform that the number is correct, in case the person got the number right
// Cria o elemento de mensagem para informar que o numero está correto, no caso que a pessoa acertou o numero
function createdElementCorrect() {
 let p = document.createElement("p");
 p.innerHTML = `Congratulations! You got it right on the ${count}th try.`;
 return elementMsg.appendChild(p);
}

// Create the message element to inform that the number is wrong and the number of attempts the person still has to try to get it right
// Cria o elemento de mensagem para informar que o numero está errado e a quantidade de tentativas que a pessoa ainda tempara tentar acertar
function createdElementError() {
 let p = document.createElement("p");
 if (countChance > 0) {
  p.innerHTML = `I'm sorry, you made a mistake! Have more ${countChance}`;
 } else {
  p.innerHTML = `I'm sorry, you made a mistake! Last try`;
 }
 return elementMsg.appendChild(p);
}

// Message saying that attempts are over
// Mensagem dizendo que as tentativas acabaram
function overAttemps() {
 let h2 = document.createElement("h2");
 h2.innerHTML = "Your attempts are over";
 return elementMsg.appendChild(h2);
}

// Congratulations message in case you guess the number of the day
// Mensagem de parabéns caso você adivinhe o número do dia
function congratulations() {
 let h2 = document.createElement("h2");
 h2.innerHTML = "Meus parabens, você acertou";
 return elementMsg.appendChild(h2);
}

// Create new button new game
// Cria o botão de novo jogo
function newButton() {
 let newBtn = document.createElement("button");

 newBtn.innerHTML = "New Game";
 newBtn.addEventListener("click", reloadPage);

 let parentBtnClick = buttonClick.parentNode;
 return parentBtnClick.replaceChild(newBtn, buttonClick);
}

// Function for reload page
// Função de recarregar a pagina
function reloadPage() {
 location.reload();
}
