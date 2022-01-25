/**
Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.
 */
let cont = 0;
const lances = [];
let um = 0;
let dois = 0;
let tres = 0;
let quatro = 0;
let cinco = 0;
let seis = 0;

while (cont < 100) {
  lances.push(Math.floor(6 * Math.random() + 1));

  if (lances[cont] == 1) {
    um++;
  } else if (lances[cont] == 2) {
    dois++;
  } else if (lances[cont] == 3) {
    tres++;
  } else if (lances[cont] == 4) {
    quatro++;
  } else if (lances[cont] == 5) {
    cinco++;
  } else if (lances[cont] == 6) {
    seis++;
  }

  cont++;
}

console.log(`
Quantidade de Numeros:
Um = ${um}
Dois = ${dois}
Tres = ${tres}
Quatro = ${quatro}
Cinco = ${cinco}
Seis = ${seis}
`);
