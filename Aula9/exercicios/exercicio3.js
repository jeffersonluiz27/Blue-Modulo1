/**
Faça um programa que, dado uma lista de N números (o usuário deve determinar a 
quantidade de números a serem entrados e entrar cada um deles), determine o 
menor valor, o maior valor e a soma dos valores.
 */


const prompt = require('prompt-sync')();

const num = [];
let menor =0;
let maior =0;
let soma = 0;

const x = +prompt('Informe a quantidade de numeros a serem entrados: ');

for (let i = 0; i < x; i++) {
  num.push(+prompt(`Informe o ${i + 1}º numero: `));
}

num.sort((a,b) => a-b);

menor = num[0];
maior = num[x-1]

for (n of num) {
  soma+=n;
}

console.log(`O maior numero foi: ${maior}`);
console.log(`O menor numero foi: ${menor}`);
console.log(`A Soma dos numeros foi de: ${soma}`);