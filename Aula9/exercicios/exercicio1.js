/**
Faça um programa que peça 2 números e crie um array contando todos os 
números os números sequenciais do primeiro até o segundo, independente 
de ser maior ou menor.
 */

const num1 = 9;
const num2 = 2;
const array = [];

if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
} else if (num1 > num2) {
  for (let i = num2; i <= num1; i++) {
    array.push(i);
  }
}

console.log(array);