const prompt = require('prompt-sync')();

function pizzaPronta(sabor) {
  console.log(`Sua pizza de ${sabor} está pronta.`);
}

function pedirPizza(callback) {
  const sabor = prompt('Escolha o sabor da sua pizza: ');
  callback(sabor);
}

pedirPizza(pizzaPronta);
