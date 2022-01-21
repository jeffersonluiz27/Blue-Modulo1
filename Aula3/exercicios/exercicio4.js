/**
 * 
 * Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar 
 * uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se 
 * os valores lidos são múltiplos entre si. Exemplo:
 * 
 */

 const prompt = require('prompt-sync')();

 var valorA = +prompt('Digite um numero: ');
 var valorB = +prompt('Digite outro numero: ');

if(valorA % valorB == 0 || valorB % valorA == 0){
  console.log("São Multiplos");
}else{
  console.log("Não são Multiplos");
}