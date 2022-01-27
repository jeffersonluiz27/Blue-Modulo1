/**
Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 
Assim, a fórmula a seguir define a sequência: 
Fn = Fn - 1 + Fn - 2
 */

let fn = 1;
let j = 1;
let i = 0;

for (let k = 1; k < 11; k++) {
  console.log(fn);
  fn = i + j;
  i = j;
  j = fn;
}
