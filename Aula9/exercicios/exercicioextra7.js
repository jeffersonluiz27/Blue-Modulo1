/**
Calcular a média de todos os números de um array.
 */

const array = [2, 5, 9, 4, 6, 8, 3, 10];
let soma = 0;

for (let i = 0; i < array.length; i++) {
  soma += array[i];
}
console.log(soma / array.length);
