/**
 * DESAFIO
 * O usuario deve digitar um numero entre 1 e 365, com este valor você deve 
 * me dizer qual mes do ano cai esse dia
 * 273 304 334 365
 */

const prompt = require("prompt-sync")();

const num = +prompt("Digite um numero entre 1 e 365: ");

if(num < 1){
  console.log("Dia digitado inválido!");
}else if(num <= 31){
  console.log("Janeiro");
}else if(num <= 59){
  console.log("Fevereiro");
}else if (num <= 90){
  console.log("Março");
}else if(num <= 120){
  console.log("Abril");
}else if(num <= 151){
  console.log("Maio");
}else if(num <= 181){
  console.log("Junho");
}else if(num <= 212){
  console.log("Julho");
}else if(num <= 243){
  console.log("Agosto");
}else if(num <= 273){
  console.log("Setembro");
}else if(num <= 304){
  console.log("Outubro");
}else if(num <= 334){
  console.log("Novembro");
}else if(num <= 365){
  console.log("Dezembro");
}else{
  console.log("Dia digitado inválido!");
}