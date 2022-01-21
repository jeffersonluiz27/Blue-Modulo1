/*
Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar 
o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
*/
const prompt = require('prompt-sync')();

const anos = +prompt("Entre com os Anos: ");
const meses = +prompt("Entre com os Meses: ");
const dias= +prompt("Entre com os Dias: ");

console.log(`Você já viveu um total de ${(anos*365)+(meses*30)+dias} dias`);