/**
Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.
 */

const pessoa = {
  nome: 'Jefferson',
  idade: 15,
  peso: 60,
  altura: 1.52,
  envelhecer: (x) => {
    for (let i = 0; i < x; i++) {
      pessoa.idade++;
      if (pessoa.idade < 22) {
        pessoa.crescer(0.05);
      }
    }
  },
  engordar: (x) => (pessoa.peso += x),
  emagrecer: (x) => (pessoa.peso -= x),
  crescer: (x) => (pessoa.altura += x),
  bio: () => {
    return `${pessoa.nome}, ${pessoa.idade} anos, ${
      pessoa.peso
    } Kg, ${pessoa.altura.toFixed(2)} cm`;
  },
};

pessoa.envelhecer(6);
console.log(pessoa.bio());