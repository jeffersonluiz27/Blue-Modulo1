/**
Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
 */

const prompt = require('prompt-sync')();

const temp = +prompt('Digite a temperatura: ');
const tipo = prompt('Qual tipo de temperatura (F, K, C): ').toUpperCase();

function temperatura(temp, escala) {
  let celsius = 0;
  let kelvin = 0;
  let fahrenheit = 0;

  if (escala == 'C') {
    celsius = temp;
    fahrenheit = temp * 1.8 + 32;
    kelvin = temp + 273;
  } else if (escala == 'F') {
    celsius = (temp - 32) / 1.8;
    fahrenheit = temp;
    kelvin = (temp - 32) * (5 / 9) + 273;
  } else if (escala == 'K') {
    celsius = temp - 273;
    fahrenheit = (temp - 273) * 1.8 + 32;
    kelvin = temp;
  } else {
    console.log('Tipo errado! ');
  }

  console.log(`Temperatura em Celsius: ${celsius}°C`);
  console.log(`Temperatura em Fahrenheit: ${fahrenheit}°F`);
  console.log(`Temperatura em Kelvin: ${kelvin}K`);

  const retorno = prompt(
    'Qual temperatura deseja retornar (F, K, C): '
  ).toUpperCase();

  if (retorno == 'F') {
    return fahrenheit;
  } else if (retorno == 'K') {
    return kelvin;
  } else if (retorno == 'C') {
    return celsius;
  } else {
    console.log('Tipo errado! ');
  }
}

console.log(temperatura(temp, tipo));
