/**
Localizar o maior valor dentro de um array de números.
 */
const array = [32, 50, 2, 81, 98, 20, 10];
let cont = 0;

for (const a of array) {
  if (a > cont) {
    cont = a;
  }
}
console.log(cont);
