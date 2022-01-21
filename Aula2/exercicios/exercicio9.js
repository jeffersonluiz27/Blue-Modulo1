/**
  Conversor de moedas - Crie um programa que solicite um 
  um valor em real ao usuário e converta esse valor, para dólar.
 */

const prompt = require("prompt-sync")();

console.log("Converta Real em Dolar");
const real = +prompt("Digite o valor em Real: ");
const dolar = 5.50;

const cambio = real / dolar;

console.log(`O valor da conversão em Dolar é de: U$${cambio.toFixed(2)} `);