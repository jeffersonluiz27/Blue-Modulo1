const prompt = require('prompt-sync')();

// Entrada de dados
let nome = prompt("Qual é o seu nome? ");
console.log("olá " + nome);

//Entrada de numero reconhece como string tambem 
let numero = prompt('Digite um número ');
console.log(`O número digitado foi: ${numero}`);
console.log(typeof(numero));

// Forma de reconhecer como numero
numero = +prompt('Digite um número ');
console.log('O número digitado foi: '+ numero);
console.log(typeof(numero));