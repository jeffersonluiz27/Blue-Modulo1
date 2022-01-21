/*
Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o nome de uma peça 2, o número de peças 2 
e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
*/
const prompt = require('prompt-sync')();

console.log("Entre com os valores solicitados: \n");

const nomePeca1 = prompt("Digite o nome da peça 1: ");
const numPeca1 = +prompt("Digite a quantidade de peças 1: ");
const valPeca1 = +prompt("Digite o Valor da Peça 1: ");


const nomePeca2 = prompt("Digite o nome da peça 2: ");
const numPeca2 = +prompt("Digite a quantidade de peças 2: ");
const valPeca2 = +prompt("Digite o Valor da Peça 2: ");

console.log(`Valor total a pagar pelas peça ${nomePeca1} é de: R$${numPeca1 * valPeca1} Reais`);
console.log(`Valor total a pagar pelas peça ${nomePeca2} é de: R$${numPeca2 * valPeca2} Reais`);
console.log(`Valor total de todas as peças é de: R$${(numPeca1 * valPeca1)+(numPeca2 * valPeca2)} Reais`);
