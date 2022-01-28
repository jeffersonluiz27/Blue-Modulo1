/**
Retornar a maior string de um array.
 */

const array = ['String1', 'Testes2', 'Array', 'Paralelepipedo'];
let cont = 0;
let maior = '';

for (const a of array) {
  if (a.length > maior.length) {
    maior = a;
  }
}
console.log(maior);
