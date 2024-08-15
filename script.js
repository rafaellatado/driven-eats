let foodName = '';
let foodPrice = 0;
let drinkName = '';
let drinkPrice = 0;
let dessertName = '';
let dessertPrice = 0;
let total = 0;

function escolheComida(element) {

  let previousElement = document.querySelector('.container-produto.comida.show-border');

  if (previousElement !== null) {
    previousElement.classList.remove('show-border');
  }

  element.classList.add('show-border');

  let icon = element.querySelector('.icon');

  let previousIcon = document.querySelector('.icon.comida.show-icon');

  if (previousIcon !== null) {
    previousIcon.classList.remove('show-icon');
  }

  icon.classList.add('show-icon');

  checkSelections();

  foodPrice = element.querySelector('.p-price').textContent;
  foodPrice = foodPrice.replace('R$', '').trim();
  foodPrice = foodPrice.replace(',', '.');
  foodPrice = parseFloat(foodPrice);

  foodName = element.querySelector('.p-title').innerHTML;

}

function escolheBebida(element) {

  previousElement = document.querySelector('.container-produto.bebida.show-border');

  if (previousElement !== null) {
    previousElement.classList.remove('show-border');
  }

  element.classList.add('show-border');

  icon = element.querySelector('.icon');

  previousIcon = document.querySelector('.icon.bebida.show-icon');

  if (previousIcon !== null) {
    previousIcon.classList.remove('show-icon');
  }

  icon.classList.add('show-icon');

  checkSelections();

  drinkPrice = element.querySelector('.p-price').textContent;
  drinkPrice = drinkPrice.replace('R$', '').trim();
  drinkPrice = drinkPrice.replace(',', '.')
  drinkPrice = parseFloat(drinkPrice);

  drinkName = element.querySelector('.p-title').innerHTML;

}

function escolheSobremesa(element) {

  previousElement = document.querySelector('.container-produto.sobremesa.show-border');

  if (previousElement !== null) {
    previousElement.classList.remove('show-border');
  }

  element.classList.add('show-border');

  icon = element.querySelector('.icon');

  previousIcon = document.querySelector('.icon.sobremesa.show-icon');

  if (previousIcon !== null) {
    previousIcon.classList.remove('show-icon');
  }

  icon.classList.add('show-icon');

  checkSelections();

  dessertPrice = element.querySelector('.p-price').textContent;
  dessertPrice = dessertPrice.replace('R$', '').trim();
  dessertPrice = dessertPrice.replace(',', '.');
  dessertPrice = parseFloat(dessertPrice);

  dessertName = element.querySelector('.p-title').innerHTML;

}

function checkSelections() {

  const foodSelected = document.querySelector('.container-produto.comida.show-border') !== null;
  const drinkSelected = document.querySelector('.container-produto.bebida.show-border') !== null;
  const dessertSelected = document.querySelector('.container-produto.sobremesa.show-border') !== null;

  if (foodSelected && drinkSelected && dessertSelected) {

    document.querySelector('.button-one').classList.add('visibility-button-one');
    document.querySelector('.button-two').classList.add('visibility-button-two');

  }
}

function fecharPedido() {

  document.querySelector('.button-two').classList.remove('visibility-button-two');
  document.querySelector('.confirmar-pedido-container').classList.add('visibility-fechamento-pedido');
  document.querySelector('.content-transparency').classList.add('transparency-visibility');

  document.querySelector('.nome-prato').innerHTML = foodName;
  document.querySelector('.preco-prato').innerHTML = foodPrice.toFixed(2).replace('.', ',');

  document.querySelector('.nome-bebida').innerHTML = drinkName;
  document.querySelector('.preco-bebida').innerHTML = drinkPrice.toFixed(2).replace('.', ',');

  document.querySelector('.nome-sobremesa').innerHTML = dessertName;
  document.querySelector('.preco-sobremesa').innerHTML = dessertPrice.toFixed(2).replace('.', ',');

  total = foodPrice + drinkPrice + dessertPrice;
  total = total.toFixed(2).replace('.', ',');

  document.querySelector('.somatorio-valor').innerHTML = total;

}

function cancelarPedido() {

  document.querySelector('.button-two').classList.add('visibility-button-two');
  document.querySelector('.confirmar-pedido-container').classList.remove('visibility-fechamento-pedido');
  document.querySelector('.content-transparency').classList.remove('transparency-visibility');

}

function pedir() {

  const nome = prompt("Qual o seu nome?");
  const endereco = prompt("Qual o seu endereco?");


  const msg = `Olá, gostaria de fazer o pedido:
  -Prato: ${foodName}
  - Bebida: ${drinkName}
  - Sobremesa: ${dessertName}
  Total: R$ ${total}
  Nome: ${nome}
  Endereço: ${endereco}`;

  const number = `5521997219895`;

  const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`
  
  window.open(url, '_blank');

}
