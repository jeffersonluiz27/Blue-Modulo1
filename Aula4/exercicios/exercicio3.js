/**
 Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário 
 a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis 
 serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa 
 não deve se preocupar com a quantidade de notas existentes na máquina.
  Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, 
  uma nota de 50, uma nota de 5 e uma nota de 1.
  Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, 
  uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1. 

 */

var prompt = require('prompt-sync')();

var notas = 0;
var saque = +prompt('Informe o valor que deseja sacar: ');

if (saque >= 10 && saque <= 600) {
  if (saque >= 100) {
    notas = saque / 100;
    saque = saque - Math.trunc(notas) * 100;
    console.log(`${Math.trunc(notas)} nota(s) de 100`);
  }
  if (saque >= 50) {
    notas = saque / 50;
    saque = saque - Math.trunc(notas) * 50;
    console.log(`${Math.trunc(notas)} nota(s) de 50`);
  }
  if (saque >= 10) {
    notas = saque / 10;
    saque = saque - Math.trunc(notas) * 10;
    console.log(`${Math.trunc(notas)} nota(s) de 10`);
  }
  if (saque >= 5) {
    notas = saque / 5;
    saque = saque - Math.trunc(notas) * 5;
    console.log(`${Math.trunc(notas)} nota(s) de 5`);
  }
  if (saque >= 1) {
    notas = saque / 1;
    saque = saque - Math.trunc(notas) * 1;
    console.log(`${Math.trunc(notas)} nota(s) de 1`);
  }
} else {
  console.log('Valor inválido!');
}
