/*
Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, 
um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
*/

const x = 20;

for (let i = 1; i <= x; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}