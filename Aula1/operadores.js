const prompt = require('prompt-sync')();

// Adição

//Soma strings
let nome = prompt('Digite seu nome: ');
let sobrenome = prompt('Digite seu sobrenome: ')
console.log(nome + " " + sobrenome);


let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

console.log(num1 + num2);

//Subtração, Multiplicação e Divisão
console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${num1 * num2}`); 
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);


// Resto da divisão
console.log(`Resto da divisão de ${num1}/${num2}: ${num1 % num2}`);

// Exponencial
console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);