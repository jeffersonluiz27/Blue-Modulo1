/**
Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve interromper o programa e anunciar o vencedor.
 */

const jogoVelha = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// const colunaX = 0;
// const linhaY = 0;

// const jogada = 'X';

// jogoVelha[linhaY][colunaX] = jogada;

const condicoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

for (const condicaoVitoria of condicoesVitoria) {
  for (const coordenada of condicaoVitoria) {
    const linha = Math.floor(coordenada / 3);
    const coluna = coordenada % 3;

    console.log({ linha, coluna });
  }
}

console.log(jogoVelha);