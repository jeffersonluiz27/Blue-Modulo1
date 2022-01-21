var prompt = require("prompt-sync")();

const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

if (num1 === num2){
    console.log('Os números são iguais. A condição é verdadeira.');
}else{
  console.log('Passou e não entrou');
}