/**
Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
 */

function temperatura(temp, escala) {
  if (escala == 'c') {
    console.log(`Temperatura em Celsius: ${temp}°C`);
    console.log(`Temperatura em Fahrenheit: ${temp * 32}°F`);
    console.log(`Temperatura em Kelvin: ${temp * 273}K`);
  }
}

temperatura(30, 'c');
