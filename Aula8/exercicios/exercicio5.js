/**
Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 
Assim, a fórmula a seguir define a sequência: 
Fn = Fn - 1 + Fn - 2
 */

let fn = 0;
let j = 0;
let i = 1;

for (let k = 0; k < 10; k++) {
  console.log(fn);
  fn = i + j;
  i = j;
  j = fn;
}
