var prompt = require('prompt-sync')();

const num = 123;
console.log(num);
console.log(typeof num);

const numString = num.toString();
console.log(numString);
console.log(typeof numString);

console.log('_________');
console.log();

const num1 = '123';
console.log(num1);
console.log(typeof num1);

const toNumber = Number(num1);
console.log(toNumber);
console.log(typeof toNumber);

console.log('_________');
console.log();

const nome = prompt('Digite seu nome: ');
const nomeLower = nome.toLowerCase();

console.log(nome);

console.log(nomeLower);

const nomeUpper = nome.toUpperCase();

console.log(nomeUpper);

const nomeReplace = nome.replace(/ /g, '');
console.log(nomeReplace);

console.log(nome.trim());

const nome1 = nome.indexOf('e');
console.log(nome1);

const nomeSlice1 = nome.slice(1);
console.log(nomeSlice1);

const nomeSlice2 = nome.slice(1, 3);
console.log(nomeSlice2);

const nomeSlice3 = nome.slice(0, -3);
console.log(nomeSlice3);

const nomeSplit = nome.split(' ');
console.log(nomeSplit);
