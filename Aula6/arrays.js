const filmes = ['Jurassic Park', 'O Senhor dos Aneis', 'Harry Potter'];

console.log(filmes);
console.log(filmes[0]);

filmes[0] = 'Mad Max'; // Edita o indice 0
console.log(filmes);
console.log(filmes[0]);
console.log(filmes.length);

filmes.push('Forrest Gump', 'Jurassic Park'); // No final
console.log(filmes);
console.log(filmes.length);

filmes.unshift('Matrix'); // No inicio
console.log(filmes[0]);
console.log(filmes);

let filmeRemovido = filmes.pop(); // Remove ultimo
console.log(filmes);
console.log(filmeRemovido);

filmeRemovido = filmes.shift(); // remove primeiro
console.log(filmes);

filmeRemovido = filmes.splice(1, 1); // remove no meio
console.log(filmes);

filmesRemovidos = filmes.splice(1, 1, 'Titanic'); // Remove e substitui
console.log(filmes);

filmes.fill('Matrix', 1, 4);
console.log(filmes);

const filmes2 = [
  'Jurassic Park',
  'O Senhor dos Aneis',
  'Harry Potter',
  'Forrest Gump',
  'Matrix',
];
console.log(filmes2);
filmes2.sort(); // ordena a lista
console.log(filmes2);
filmes2.reverse(); // inverte a lista
console.log(filmes2);
