/**
Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.
 */

const prompt = require('prompt-sync')();

data = prompt('Digite uma data no formato DD/MM/AAAA: ');

function dataPorExtenso(data) {
  let dataSplit = data.split('/');

  if (dataSplit[1] == 1) {
    return `${dataSplit[0]} de Janeiro de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 2) {
    return `${dataSplit[0]} de Fevereiro de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 3) {
    return `${dataSplit[0]} de Março de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 4) {
    return `${dataSplit[0]} de Abril de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 5) {
    return `${dataSplit[0]} de Maio de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 6) {
    return `${dataSplit[0]} de Junho de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 7) {
    return `${dataSplit[0]} de Julho de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 8) {
    return `${dataSplit[0]} de Agosto de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 9) {
    return `${dataSplit[0]} de Setembro de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 10) {
    return `${dataSplit[0]} de Outubro de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 11) {
    return `${dataSplit[0]} de Novembro de ${dataSplit[2]}`;
  } else if (dataSplit[1] == 12) {
    return `${dataSplit[0]} de Dezembro de ${dataSplit[2]}`;
  } else {
    return null;
  }
}
console.log(dataPorExtenso(data));
