/**
Crie um programa em que o usuário escolha a quantidade de notas serem 
entradas e depois peça e armazene essa quantidade de notas em um array. 
Ao final imprima a quantidade de alunos: 
APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
 */

const prompt = require('prompt-sync')();
let cont = 0;
let qNotas = 0;
let aprov = 0,
  recup = 0,
  repro = 0;
const notas = [];

qNotas = parseInt(prompt('Escolha a quantidade de notas: '));

while (cont < qNotas) {
  notas.push(parseFloat(prompt(`Insira a nota do aluno ${cont + 1}: `)));
  if (notas[cont] >= 7) {
    aprov++;
  } else if (notas[cont] < 5) {
    repro++;
  } else if (notas[cont] >= 5 || notas[cont] < 7) {
    recup++;
  }
  cont++;
}
console.log();
console.log(`A qunatidade de alunos Aprovados foi de: ${aprov}`);
console.log(`A qunatidade de alunos Em Recuperação foi de: ${recup}`);
console.log(`A qunatidade de alunos Reprovados foi de: ${repro}`);
