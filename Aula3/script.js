var prompt = require("prompt-sync")();

const nome = prompt('Digite seu nome: ');
const idade = +prompt('Digite sua idade: ');

if(idade >= 18){
  console.log(`${nome} você já pode beber!`);
}else{
  console.log(`${nome} você ainda não pode beber!`);
}