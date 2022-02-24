/**
Projeto extra - Simulador de votação
Esse projeto não é para ser entregue, é apenas um exercício

A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
O programa deve:
Receber votos até que o usuário diga que não tem mais ninguém para votar;
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
Contabilizar os votos de acordo com os significados:
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar:
O total de votos para cada candidato
O total de votos nulos
O total de votos em branco
Qual candidato venceu a votação
 */

//Chamada do prompt
const prompt = require('prompt-sync')();

//Variaveis Globais
let opcao = 0;
const anoAtual = new Date().getFullYear();

//Objeto dos candidatos
candidatos = [
	{nome: 'Candidato 1', votos: 0,},
	{nome: 'Candidato 2', votos: 0,},
	{nome: 'Candidato 3', votos: 0,},
	{nome: 'Nulos', votos: 0,},
	{nome: 'Branco', votos: 0,}
]

//Estrutura principal do programa
while (opcao != 2){
	console.clear();
	console.log(`Seja bem vindo as eleições ${anoAtual}\n`);
	prompt('Pressione ENTER para começar!');
	
	
	console.clear();
	let anoN = parseInt(prompt('Informe sua data de nascimento: '));
	if( isNaN(anoN) || anoN < 1920 || anoN > anoAtual){
		errMensagem('Ano inválido!');
		continue;
	}
	
	let voto = pedeVoto();
	votacao(autorizaVoto(anoN),voto);
	
	//Pergunta usuario se quer repetir ou encerrar
	do {
		console.clear();
		console.log('Deseja encerrar a votação?');
		console.log('1 - Novo eleitor \n2 - Encerrar e apurar os votos');
		opcao = prompt('Escolha uma opção: ');
		if (opcao != 1 && opcao != 2) {
			errMensagem('Opção inválida!');
			continue;
		}
	} while (opcao != 1 && opcao != 2);
	
	exibirResultados();
}


//------------------ FUNÇÕES ------------------//


// Função que exibe mensagem de Erro
function errMensagem (msg){
	console.clear();
	console.log(msg);
	prompt('Pressione ENTER para voltar!');
}

// Função que verifica se eleitor pode votar
function autorizaVoto(anoNascimento) {
	let idade = anoAtual - anoNascimento;
	if (idade < 16) {
		return 'Negado';
	} else if (idade >= 18 && idade < 65) {
		return 'Obrigatorio';
	} else {
		return 'Opcional';
	}
}

//Função que solicita opcao de voto
function pedeVoto(){
	let voto;
	do{
		console.clear();
		console.log(`Escolha uma das opções abaixo:

  1 = ${candidatos[0].nome}
  2 = ${candidatos[1].nome}
  3 = ${candidatos[2].nome}
  4 = Voto ${candidatos[3].nome}
  5 = Voto em ${candidatos[4].nome}
	`);
	voto = parseInt(prompt('Informe seu voto: '));

	if(isNaN(voto) || voto < 1 || voto > 5){
		errMensagem('Opção inválida!');
	}

	}while(isNaN(voto) || voto < 1 || voto > 5);
	
	return voto;
}

// Confirmação do voto
function comprovanteVoto(nomeVoto){
	console.clear();
	console.log('Comprovante de voto: ',nomeVoto);
	prompt('(ENTER)');
}

// Função que valida e contabiliza os votos
function votacao(autorizacao, voto) {

	if(autorizacao == 'Negado'){
		voto = 0;
	}

	switch(voto){
		case 1:
			comprovanteVoto(candidatos[0].nome);
			candidatos[0].votos++;
			break;
		case 2:
			comprovanteVoto(candidatos[1].nome);
			candidatos[1].votos++;
			break;
		case 3:
			comprovanteVoto(candidatos[2].nome);
			candidatos[2].votos++;
			break;
		case 4:
			comprovanteVoto(candidatos[3].nome);
			candidatos[3].votos++;
			break;
		case 5:
			comprovanteVoto(candidatos[4].nome);
			candidatos[4].votos++;
			break;
		default:
			errMensagem('Desculpe! Você tem menos de 16 anos \nVocê não pode votar!');
	}
}

function exibirResultados() {
	/*   
	O total de votos para cada candidato
  O total de votos nulos
  O total de votos em branco
  Qual candidato venceu a votação */
}