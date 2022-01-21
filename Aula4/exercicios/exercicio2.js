/**
 Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número 
 inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido 
 pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.

 */

var prompt = require('prompt-sync')();
var rand = Math.floor(10 * Math.random());

const num = +prompt('Digite um numero de 0 a 10: ');

if (num == rand) {
  console.log(`Numero escolhindo por você (${num}) 
Numero escolhido pelo computador (${rand})
VOCE VENCEU!`);
} else {
  console.log(`Numero escolhindo por você (${num})
Numero escolhido pelo computador (${rand})
VOCE PERDEU!`);
}
