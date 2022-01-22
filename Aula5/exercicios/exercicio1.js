/**
 * Faça um programa que leia um nome de usuário e a sua senha e
 * não aceite a senha igual ao nome do usuário, mostrando uma
 * mensagem de erro e voltando a pedir as informações.
 */

const prompt = require('prompt-sync')();

let user;
let pass;

do {
  user = prompt('Digite um nome de Usuario: ');
  pass = prompt('Digite uma senha: ');
  if (user == pass) {
    console.log('Erro! O usuario e a senha não podem ser iguais!');
  }
} while (user == pass);
