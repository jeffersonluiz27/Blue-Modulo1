/**
 Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
 */

const prompt = require('prompt-sync')();
const rand = Math.floor(10 * Math.random());
let num;
let att = 1;

do {
  num = +prompt('Digite um numero de 0 a 10: ');
  if (num != rand) {
    if (num < rand) {
      console.log(`O numero escolhido pelo computador é maior que ${num}!\n`);
    } else {
      console.log(`O numero escolhido pelo computador é menor que ${num}!\n`);
    }
    att++;
  }
} while (num != rand);
console.log(`\nParabens você acertou em ${att} tentativas!`);
