/**
Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.
 */

const prompt = require('prompt-sync')();

data = prompt('Digite uma data no formato DD/MM/AAAA: ');
let dataSplit = data.split('/');

function dataPorExtenso(dia, mes, ano) {
  if (dia > 31 || dia < 1) {
    return null;
  } else if (mes > 12 || mes < 1) {
    return null;
  } else if (ano < 1000) {
    return null;
  }

  if (mes == '01') {
    return `${dia} de Janeiro de ${ano}`;
  } else if (mes == '02') {
    return `${dia} de Fevereiro de ${ano}`;
  } else if (mes == '03') {
    return `${dia} de Março de ${ano}`;
  } else if (mes == '04') {
    return `${dia} de Abril de ${ano}`;
  } else if (mes == '05') {
    return `${dia} de Maio de ${ano}`;
  } else if (mes == '06') {
    return `${dia} de Junho de ${ano}`;
  } else if (mes == '07') {
    return `${dia} de Julho de ${ano}`;
  } else if (mes == '08') {
    return `${dia} de Agosto de ${ano}`;
  } else if (mes == '09') {
    return `${dia} de Setembro de ${ano}`;
  } else if (mes == '10') {
    return `${dia} de Outubro de ${ano}`;
  } else if (mes == '11') {
    return `${dia} de Novembro de ${ano}`;
  } else if (mes == '12') {
    return `${dia} de Dezembro de ${ano}`;
  }
}
console.log(dataPorExtenso(dataSplit[0], dataSplit[1], dataSplit[2]));
