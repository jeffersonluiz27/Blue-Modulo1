const prompt = require('prompt-sync')();
var num = 0;

while (num < 1 || num > 100) {
  num = prompt('Digite um numeo entre 1 e 100: ');
  if (num < 1 || num > 100) {
    console.log('O numero digitado está fora do proposto!');
  }
}
console.log('Numero está dentro do proposto!');
