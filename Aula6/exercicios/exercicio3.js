/**
 Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
 */

const prompt = require('prompt-sync')();
let cont = 0;

const quant = +prompt('Informe a quantidade de alunos a serem cadastrados: ');
let aluno = [];
let nota = [];
let media = 0;

while (cont < quant) {
  aluno.push(prompt(`Informe o nome do ${cont + 1}º Aluno: `));
  nota.push(+prompt(`Informe a nota do ${cont + 1}º Aluno: `));
  media += nota[cont];
  cont++;
}

console.log();

cont = 0;
while (cont < quant) {
  console.log(`O Aluno ${aluno[cont]} teve nota ${nota[cont]} `);
  cont++;
}
console.log(`A media das notas foi de: ${(media / nota.length).toFixed(2)}`);
