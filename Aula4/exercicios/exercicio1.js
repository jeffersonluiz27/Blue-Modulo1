/**
 Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe 
 contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário 
 de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
  Salários até R$ 280,00 (incluindo): aumento de 20%. 
  Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
  Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
  Salários de R$ 1500,00 em diante: aumento de 5%.
  Após o aumento ser realizado, informe na tela:
    O salário antes do reajuste.
    O percentual de aumento aplicado.
    O valor do aumento.
    O novo salário, após o aumento.

 */

var prompt = require('prompt-sync')();

const salario = +prompt('Digite o valor do Salario: ');
var percent = 0;
var novoSalario;

if (salario <= 280.0) {
  percent = 20 / 100;
  novoSalario = salario + salario * percent;

  console.log(`
  O salario antes do reajuste era de: R$ ${salario}
  Foi aplicado um reajuste de: ${percent * 100}%
  O Reajuste corresponde a: R$ ${salario * percent}
  O novo Salario será de: R$ ${novoSalario} 
  `);
} else if (salario <= 700.0) {
  percent = 15 / 100;
  novoSalario = salario + salario * percent;

  console.log(`
  O salario antes do reajuste era de: R$ ${salario}
  Foi aplicado um reajuste de: ${percent * 100}%
  O Reajuste corresponde a: R$ ${salario * percent}
  O novo Salario será de: R$ ${novoSalario} 
  `);
} else if (salario <= 1500.0) {
  percent = 10 / 100;
  novoSalario = salario + salario * percent;

  console.log(`
  O salario antes do reajuste era de: R$ ${salario}
  Foi aplicado um reajuste de: ${percent * 100}%
  O Reajuste corresponde a: R$ ${salario * percent}
  O novo Salario será de: R$ ${novoSalario} 
  `);
} else if (salario > 1500.0) {
  percent = 5 / 100;
  novoSalario = salario + salario * percent;

  console.log(`
  O salario antes do reajuste era de: R$ ${salario}
  Foi aplicado um reajuste de: ${percent * 100}%
  O Reajuste corresponde a: R$ ${salario * percent}
  O novo Salario será de: R$ ${novoSalario} 
  `);
}
