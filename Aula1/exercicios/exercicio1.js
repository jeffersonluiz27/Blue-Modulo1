/* 
Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média do aluno, sabendo que a nota A 
tem peso 4 e a nota B tem peso 6.
*/
const prompt = require('prompt-sync')();

const notaA = +prompt("Digite a 1ª nota: ");
const notaB = +prompt("Digite a 2ª nota: ");

let media = ((notaA*4)+(notaB*6))/(4+6);

console.log(`A média do Aluno é ${media}`);