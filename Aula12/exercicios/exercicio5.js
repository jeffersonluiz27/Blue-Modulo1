/**
Crie uma função para inverter um array passado pelo usuário.
 */

const prompt = require('prompt-sync')();

const array = [1, 2, 3, 4, 5, 6];

function inverte(array) {
  let troca = [];
  for (let i = array.length; i > 0; i--) {
    troca.push(array[i - 1]);
  }
  return troca;
}

console.log(inverte(array));
