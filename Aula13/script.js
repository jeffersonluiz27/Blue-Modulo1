const pessoa = {
  nome: 'Gabriel',
  idade: 20,
  cidade: 'Londrina',
  interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],
  envelhecer: function () {
    this.idade++;
  },
};

console.log(pessoa.idade);
pessoa.envelhecer();
console.log(pessoa.idade);
