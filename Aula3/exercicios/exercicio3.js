/**
 * 
 * Faça um programa que leia um número, e informe se ele é par ou impar
 */

var prompt = require("prompt-sync")();

const num = +prompt("Digite um numero: ");

if(num % 2 == 0){
  console.log(`${num} é Par!`);
}else{
  console.log(`${num} é Impar!`);
}