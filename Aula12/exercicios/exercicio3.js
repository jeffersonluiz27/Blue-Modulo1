/**
Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
 */
const prompt = require('prompt-sync')();

const largura = +prompt(`Digite a largura: `);
const comprimento = +prompt(`Digite o comprimento: `);

function area(largura, comprimento) {
  console.log(`A area é: ${largura * comprimento}m²`);
}

area(largura, comprimento);
