/**
Faça um programa que peça 2 números e crie um array contando todos os 
números os números sequenciais do primeiro até o segundo, independente 
de ser maior ou menor.
 */

num1 = 2;
num2 = 9;
array = [];

for (let i = num1; i <= num2; i++) {
  array.push(i);
}

console.log(array);