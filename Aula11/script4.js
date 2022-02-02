function somar(a, b, c) {
  console.log('A soma é: ', a + b + c);
}

const numeros = [10, 15, 20];

somar(...numeros);

const copiaDosNumeros = [...numeros]; // [10, 15, 20]

console.log(numeros);
console.log(copiaDosNumeros);
