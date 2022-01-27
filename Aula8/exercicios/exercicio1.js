/*
Peça ao usuário uma quantidade de linhas e e outra de colunas, 
e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/
const prompt = require('prompt-sync')();

const linhas = +prompt('Informe o numero de linhas: ');
const colunas = +prompt('Informe o numero de colunas: ');

const matriz = [];

for (let i = 0; i < linhas; i++) {
  const cols = [];
  for (let j = 0; j < colunas; j++) {
    cols[j] = i + j;
  }
  matriz[i] = cols;
}

console.table(matriz);
