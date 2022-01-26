/**
Faça um programa que peça o nome de usuário e a senha de um usuário. 
A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
 */

const prompt = require('prompt-sync')();

let confirma = false;
let usuario = '';
let senha = '';
const regex = /\W|_&[0-9]/;

usuario = prompt('Insira um Usuario: ');

do {
  senha = prompt(
    'Insira uma Senha com no minimo 8 caracters (Tendo 1 numero e 1 caracter especial): '
  );
  if (senha.length < 8) {
    console.log('\nA Senha não pode ser menor que 8!');
  } else if (regex.test(senha) == false) {
    console.log('\nA Senha precisa ter pelo menos 1 numero e 1 caracter! ');
  } else {
    confirma = true;
  }
} while (!confirma);

console.log(`
Usuario: ${usuario}
Senha: ${senha}
`);
