/*
Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em 
dias e informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.
*/
const prompt = require('prompt-sync')();

const valor = +prompt("Digite total de Dias: ");
console.log(`Você tem: ${Math.trunc(valor/365)} anos, ${Math.trunc((valor%365)/30)} meses e ${(valor%365)%30} dias.`); //.toFixed(0)