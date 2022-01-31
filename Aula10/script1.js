const prompt = require('prompt-sync')();

var n = 0;

while (n < 5) {
  console.log(n);
  n++;
}
console.log();

let resposta = '';

while (resposta != 's') {
  resposta = prompt('Você quer sair do loop?');
}
console.log();

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log();

var numeros = [1, 2, 3, 4, 5];

for (let i of numeros) {
  console.log(i);
}
console.log();

var nomes = ['Gabriel', 'Thiago', 'Marcio', 'Marcus', 'Eduarda'];

for (let i in nomes) {
  console.log(i);
}
