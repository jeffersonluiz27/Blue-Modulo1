/**
  Faça um programa que leia e valide as seguintes informações:
  Nome: maior que 3 caracteres;
  Idade: entre 0 e 150;
  Salário: maior que zero;
  Estado Civil: 's', 'c', 'v', 'd';
 */

const prompt = require('prompt-sync')();

let name;
let age;
let wage;
let civilStatus;

do {
  name = prompt('Digite seu nome: ');
  if (name.length < 4) {
    console.log('O Nome tem ser maior que 3 caracteres!');
  }
} while (name.length < 4);

do {
  age = +prompt('Digite sua idade: ');
  if (age < 0 || age > 150 || isNaN(age)) {
    console.log('A idade precisa ser entre 0 e 150!');
  }
} while (age < 0 || age > 150 || isNaN(age));

do {
  wage = +prompt('Digite seu salario: ');
  if (wage < 1 || isNaN(wage)) {
    console.log('O salário precisa ser maior que 0!');
  }
} while (wage < 1 || isNaN(wage));

do {
  civilStatus = prompt('Digite seu estado civil: (s, c, v, d): ').toLowerCase();
  if (
    civilStatus != 's' &&
    civilStatus != 'c' &&
    civilStatus != 'v' &&
    civilStatus != 'd'
  ) {
    console.log('Estado civil precisa ser uma das opções: (s, c, v, d)');
  }
} while (
  civilStatus != 's' &&
  civilStatus != 'c' &&
  civilStatus != 'v' &&
  civilStatus != 'd'
);

console.log('\nCadastro realizado com sucesso!');
