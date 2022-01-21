/**
 * 
 * Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
     A mensagem "Em recuperação", se a média for entre cinco e sete;
     A mensagem "Reprovado", se a média for menor que cinco.
 */

var prompt = require('prompt-sync')();

const nota = +prompt('Digite sua nota 1: ');
const nota2 = +prompt('Digite sua nota 2: ');
const nota3 = +prompt('Digite sua nota 3: ');
const nota4 = +prompt('Digite sua nota 4: ');

const media = (nota + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
  console.log(`Sua média foi ${media} e você foi Aprovado!`);
} else if(media < 5){
  console.log(`Sua média foi ${media} e você foi Reprovado!`);
} else{
  console.log(`Sua média foi ${media} e você está Em Recuperação!`);
}
