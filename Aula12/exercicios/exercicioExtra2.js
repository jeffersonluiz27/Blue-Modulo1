/**
Criar uma função que junte dois arrays e retorno o resultado como um novo array
 */

const array = [];
function juntarArrays(array1, array2) {
  for (let a of array1) {
    array.push(a);
  }
  for (let a of array2) {
    array.push(a);
  }
  return array;
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

console.log(juntarArrays(array1, array2));