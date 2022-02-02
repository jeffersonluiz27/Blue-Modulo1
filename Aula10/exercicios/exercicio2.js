/**
Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro), apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
 */

const prompt = require('prompt-sync')();

const qtdNomes = +prompt(`Informe a quantidade de nomes: `);

const nomes = [];

let tamMaiorNome;
let tamMenorNome;
let maioresNomes = [];
let menoresNomes = [];

for (let i = 1; i <= qtdNomes; i++) {
  const nome = prompt(`Digite o ${i}º nome: `);
  nomes.push(nome);

  if (!tamMaiorNome || tamMaiorNome <= nome.length) {
    if (tamMaiorNome < nome.length) {
      maioresNomes = [];
    }
    tamMaiorNome = nome.length;

    maioresNomes.push(nome);
  }
  if (!tamMenorNome || tamMenorNome >= nome.length) {
    if (tamMenorNome > nome.length) {
      menoresNomes = [];
    }
    tamMenorNome = nome.length;

    menoresNomes.push(nome);
  }
}

nomes.reverse();

console.log(`Lista de nomes invertida: ${nomes}`);

console.log(`O(s) Maior(es) nome(s): ${maioresNomes}`);
console.log(`O(s) Menor(es) nome(s): ${menoresNomes}`);