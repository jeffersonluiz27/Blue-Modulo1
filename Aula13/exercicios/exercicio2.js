/**
Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
 */

const prompt = require('prompt-sync')();
let resp = '';
const lista = [];

function Funcionario(nome, cargo, salario) {
  (this.nome = nome), (this.cargo = cargo), (this.salario = salario);
}

let funcionario;
console.log('Cadastro de funcionarios:');
do {
  funcionario = new Funcionario(
    prompt('Digite o nome: '),
    prompt('Digite o cargo: '),
    +prompt('Digite o salario: ')
  );
  lista.push(funcionario);
  resp = prompt('Deseja continuar cadastrando? S ou N: ');
} while (resp.toUpperCase() != 'N');

console.log(lista);