/**
Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.
 */

const prompt = require('prompt-sync')();

const num = +prompt(`Digite um numero: `);
let div = false;

function divisivel(num) {
  if (num % 3 == 0) {
    return true;
  }
  return false;
}

div = divisivel(num);

if (div) {
  console.log(`${num} é divisivel por 3!`);
} else {
  console.log(`${num} não é divisivel por 3!`);
}
