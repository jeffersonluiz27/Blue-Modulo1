const pessoa = {
  nome: 'Gabriel',
  idade: 20,
  cidade: 'Londrina',
  interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],
};

console.log(pessoa);
console.log(pessoa.interesses);
console.log(pessoa.nome);
console.log(pessoa.interesses[0]);

pessoa.empresa = 'Blue';
console.log(pessoa);

delete pessoa.empresa;
console.log(pessoa);
