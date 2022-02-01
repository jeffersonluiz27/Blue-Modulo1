/**
Numa eleição existem três candidatos. Faça um programa que peça o 
número total de eleitores. Peça para cada eleitor votar e ao final 
mostrar o número de votos de cada candidato.
 */

const prompt = require('prompt-sync')();

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;

const eleitores = +prompt('Infome a quantidade de eleitores: ');

for (let i = 0; i < eleitores; ) {
  console.log(`Candidatos: 
  Digite 1 para Candidato1
  Digite 2 para Candidato2
  Digite 3 para Candidato3`);
  let voto = prompt(`Eleitor nº ${i + 1}. Informe seu voto: `);
  if (voto == 1) {
    candidato1++;
    console.clear();
  } else if (voto == 2) {
    candidato2++;
    console.clear();
  } else if (voto == 3) {
    candidato3++;
    console.clear();
  } else {
    console.clear();
    console.log(`Por favor, digite um numero válido!!!\n`);
    continue;
  }
  i++;
}

console.log(`Resultado:
Candidato 1 ficou com ${candidato1} votos
Candidato 2 ficou com ${candidato2} votos
Candidato 3 ficou com ${candidato3} votos`);