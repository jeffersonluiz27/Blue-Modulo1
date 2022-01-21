/**
 * 
 * Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, 
 * de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados 
 * formam, com base nos seguintes casos:
    se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
 */

const prompt = require('prompt-sync')();

var ladoA = +prompt('Digite o 1º lado do triangulo: ');
var ladoB = +prompt('Digite o 2º lado do triangulo: ');
var ladoC = +prompt('Digite o 3º lado do triangulo: ');

if (ladoA < ladoB) {
  let temp = ladoA;
  ladoA = ladoB;
  ladoB = temp;
}
if (ladoA < ladoC) {
  let temp = ladoA;
  ladoA = ladoC;
  ladoC = temp;
}
if (ladoB < ladoC) {
  let temp = ladoB;
  ladoB = ladoC;
  ladoC = temp;
}

if (ladoA >= ladoB + ladoC) {
  console.log('Não Forma Triangulo');
} else if (ladoA == ladoB && ladoB == ladoC) {
  console.log('Triangulo Equilatero');
} else if (ladoA == ladoB || ladoB == ladoC) {
  console.log('Triangulo Isosceles');
} else if (ladoA ** 2 == ladoB ** 2 + ladoC ** 2) {
  console.log('Triangulo Retangulo');
} else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
  console.log('Triangulo Obtusangulo');
} else if (ladoA ** 2 < ladoB ** 2 + ladoC ** 2) {
  console.log('Triangulo Acutangulo');
}

