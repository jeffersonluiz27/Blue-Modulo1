var prompt = require('prompt-sync')();

const nome  = prompt('Digite seu nome: ');
const nota  = +prompt('Digite sua nota 1: ');
const nota2 = +prompt('Digite sua nota 2: ');
const nota3 = +prompt('Digite sua nota 3: ');

const media = (nota + nota2 + nota3) / 3;

if(media >= 6){
  console.log(`${nome}, sua média foi ${media} e você foi aprovado!`);
}else{
  console.log(`${nome}, sua média foi ${media} e você foi reprovado!`)
}