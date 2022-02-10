//Chamada do Prompt
var prompt = require('prompt-sync')();

//limpa o console na inicialização
console.clear();

//Inicio -> inserir nome do personagem
console.log('Bem-vindo ao OuterWorld!');
const nome = 'Jefferson';
// prompt('Qual o nome do seu guerreiro? ');

//Apresenta a introdução ao jogador
// console.log(`Introdução ${nome} `);
// console.log(`
// Ah Nobre Guerreiro ${nome}!! Eu já lhe aguardava! A Princesa Astrid já havia
// me dito de sua chegada. Seu nome por essas bandas já é famoso e sei que você
// veio para provar as aventuras de nosso Vale. Ele não é brincadeira não, muitos
// aventureiros já ficaram pelo caminho. Mas, você, eu sei que você é de uma
// graduação diferente!

// Como você viajou o dia todo, peço que você se junte ao nosso salão principal,
// hoje é dia de Cordeiro e do vinho das Montanhas de Ziu! Um espetáculo, embalará
// o seu sono...

// Amanha você partirá, após nosso café Imperial. Uma dosede carboidrato e proteínas
// lhe deixarão pronto para desfiladeiros e Dragões!
// `);

//Controi o personagem e seus atributos
const sujeitoPersonagem = {
  nome: nome,
  vida: 100,
  stamina: 100, //Energia
  ataque: 100,
  defesa: 100,
  itens: [],
};

//Teste para conferir objeto
// console.log(sujeitoPersonagem);

//Teste adiciona nova skill
// sujeitoPersonagem.skill = { nome: 'Bola de Fogo', ataque: 10 };

console.log(sujeitoPersonagem);

//Reino de Gelo
// O personagem se depara com um velho misterioso que lhe oferece uma rede de pesca para
// pegar peixes e se alimentar recuperando um pouco de vida/energia
// Mas para conseguir rede o personagem deve jogar cara ou coroa com o velho
// O jogo tem 3 rodas

let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
  let escolhaVelho;
  let escolhaPersonagem;
  let faceMoeda;

  do {
    console.log(`\nRodada ${i + 1}\n`);
    escolhaPersonagem = parseInt(
      prompt('Escolha uma opção: 1 - Cara | 2 - Coroa: ')
    );
    if (escolhaPersonagem == 1) {
      escolhaVelho = 2;
    } else if (escolhaPersonagem == 2) {
      escolhaVelho = 1;
    } else {
      console.log('Opção inválida!! \n');
    }
    faceMoeda = Math.floor(2 * Math.random() + 1);
  } while (escolhaPersonagem != 1 && escolhaPersonagem != 2);

  if (escolhaPersonagem == faceMoeda) {
    vitoriaPersonagem++;
  } else {
    vitoriaVelho++;
  }

  console.log(`Placar: Velho: ${vitoriaVelho} | ${nome}: ${vitoriaPersonagem}`);
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log('\nParabens! \nVocê ganhou o duelo e recebeu uma rede de pesca!');
  sujeitoPersonagem.itens.push({ nome: 'RedePesca', atrib: 50 });
} else {
  console.log('\nQue pena! \nVocê perdeu o duelo!');
}

// Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 50% a 70%
// da vida/energia. Se não tiver a rede de pescar ele usa outro item e pesca so um peixe que restaura até 20%

// console.log(sujeitoPersonagem);
let item = sujeitoPersonagem.itens.find((x) => x.nome === 'RedePesca');
// console.log(item);
if (item != undefined) {
  // console.log(item.nome); // Funciona
  // console.log(item.atrib);
  console.log('Voce tem Rede de Pesca e pegou muitos paixes. Ganha 50 de vida');
  sujeitoPersonagem.vida += item.atrib;
} else {
  console.log(
    'Como voce não tem uma rede de pesca, voce tentou pegar um peixe com a mão. Voce conseguiu pegar mas foi um peixe muito pequeno e ainda congelou a mão, você recupera apenas 10 de vida mas gastou 50 de stamina'
  );
}

console.log(sujeitoPersonagem);

// Luta chefão Dragão de gelo - vida - dinheiro/itens

//Implementar aqui a mesma logica dos outros chefões

/*

//Começa a jornada
while (caminho != 'bosque' && caminho != 'ferreiro' && caminho != 'exercito') {
  console.log('Que caminho você gostaria de iniciar? ');
  var caminho = prompt('Para escolher digite: BOSQUE, FERREIRO ou EXERCITO. ');

  switch (caminho.toLowerCase()) {
    case 'bosque':
      console.log('Voce optou pelo BOSQUE. Daqui vc tem duas opcoes de itens.');
      let itembosque = prompt('Escolha um item: POCÃO ou DINHEIRO? ');
      if (itembosque.toLowerCase() == 'pocao') {
        console.log('voce pegou o item POÇÃO');
        sujeitoPersonagem.itens.push({nome: 'pocao', atrib:10});
      } else {
        console.log('voce pegou o dinheiro de item');
        sujeitoPersonagem.itens.push({nome: 'dinheiro', atrib:1000});
      }
      break;
    case 'ferreiro':
      console.log(
        'Voce optou pelo Ferreiro. Não é uma caminhada longa, ele faz muitos adornos as elites e não pode se distanciar muito do palácio do Rei. Daqui vc tem duas opcoes..'
      );
      let itemferreiro = prompt(
        `Quer qual das duas opcoes, Armadura ou Escudo?`
      );
      if (itemferreiro.toLowerCase == 'armadura') {
        console.log('voce pegou a armadura de item');
        sujeitoPersonagem.itens.push({nome: 'armadura', atrib:10});
      } else {
        console.log('voce pegou o escudo de item');
        sujeitoPersonagem.itens.push({nome: 'escudo', atrib:10});
      }
      break;
    case 'exercito':
      console.log(
        'Voce optou ir visitar a artilharia pesada. Você considera que é bom estar armado para sua jornada. Bem pensado, afinal, quais desafios você pode encontrar pelo caminho!? E como transpo-los sem nada na mão!?'
      );
      var itemexercito = prompt(
        `Você chega e é recepcionado pelo Sargeto Orveu, ele é o responsável pelas armas de combate e já aguardava a sua chegada. Orveu tem uma presença dominante e não é de muitas palavras. Pergunta rapidamente qual será a sua jornada, o que possivelmente você irá enfrentar e pega dos itens a mão. Uma espada e uma foice. Quer qual das duas opcoes, digite foice ou espada: `
      );
      if (itemexercito.toLowerCase == 'espada') {
        console.log('voce pegou a espada de item');
        sujeitoPersonagem.itens.push({nome: 'espada', atrib:10});
      } else {
        console.log('voce pegou a foice de item');
        sujeitoPersonagem.itens.push({nome: 'foice', atrib:10});
      }
      break;
    default:
      console.log('Desculpe, estamos sem nenhuma ${}.');
  }
}

//----------------------------------------------------------------//

// * Colheita com o Elfo Armador 
// switch com 3 cases, cada um com mais duas opcoes por case que levam a itens
// armadura 3 /escudo 2
// foice 2 / espada 3
// dinheiro/xxxxx

//Reino 1 : Floresta Tropical / Condado
console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);

console.log(`Você chegou na Adega do Gnomo! Aqui muitos guerreiros vem para descansar e tomar uns drinks.
Papo vai, Papo vem e você foi desafiado para uma roleta russa com os drinks de um mago poderoso do local. 
São 3 rodadas de shots e duas das três bebidas não fazem bem para sua saude. Uma tirará meio ponto de vida
e a outra tirará um ponto. Espero que você escolha a certa todas as vezes, grande Guerreiro!`);


for (let i = 0; i < 3; ) {
  var opcao = prompt(
    'Qual é a sua opcao pra essa rodada? Digite Azul, Vermelha, ou Verde: '
  );
  var resposta = Math.floor(Math.random() * 3 + 1);
  console.log(resposta);

  if (opcao.trim().toLowerCase() == 'azul') {
    bebidaEscolhida(opcao, resposta);
  } else if (opcao.trim().toLowerCase() == 'vermelha') {
    bebidaEscolhida(opcao, resposta);
  } else if (opcao.trim().toLowerCase() == 'verde') {
    bebidaEscolhida(opcao, resposta);
  } else {
    console.log('Opção inválida! Digite a palavra!\n');
    continue;
  }
  i++;
}

function bebidaEscolhida(opcao, resposta) {
  console.log(`\nVocê escolheu a bebida ${opcao}. `);
  if (resposta == 1) {
    console.log('Você perdeu uma vida.\n');
  } else if (resposta == 2) {
    console.log('Você perdeu meia vida.\n');
  } else {
    console.log('Escapou! Não perdeu vida.\n');
  }
}

//Ataque turno/rodadas / vida gigante 50
//Gigante é lento ataca a cada tres rodadas - tirando 1 de vida


let r = false
let vida = 50
let dano

while (r == false);

do{
    dano = +prompt(`Digite o Dano do herói (5 a 10): `);
    
    if (dano < 5|| dano > 10 ){;
        console.log(`Digite um valor entre 5 e 10.`);
        r = false;
    }
    
    else if (dano >= 5 && dano <= 10){;
        r = true;
    }}while (r == false);

let calculo

if(vida%dano == 0){
    calculo = vida / dano
}
else if (vida%dano != 0 ){
    calculo = (vida/dano) + 1
}

console.log(`A vida do Troll é de ${vida}Hp`)
console.log(`O dano do Herói causa -${dano}Hp`)


//----------------------------------------------------------------//

console.log(`Bem vindo à Montanha da Perdição.

Você avista inscrições na entrada.
"Abandone toda a esperança, você que entra por esses portões."

Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)!`);
console.log(`Você precisa responder ao seguinte questionário. Será que você conhece o inferno?!?!?
Para todos os efeitos, irei lhe chamar do mesmo nome do último visitante, Dante.`);

var p1r2= prompt('Quantos níveis tem nessa montanha?');
var p2r2= prompt('Qual o crime mais grave desta região?');
var p3r2= prompt('Quem sou eu?');

console.log(`Você deve ter conhecido Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".
`)



- Dentro Vulcão/montanha
* Labirinto - pasagem de tempo
*
* Luta chefão minotauro - vida - dinheiro/itens



//----------------------------------------------------------------//


- Reino Gelo
* Velho Misterioso - Jogar cara ou coroa para ganhar uma rede de pesca
* Pescar pela sobrevivencia - Se tiver a rede de pesca pega peixes que restauram de 60% a 80%
se não tiver a rede de pescar ele pesca so um peixe que restaura até 20%
* Luta chefão Dragão de gelo - vida - dinheiro/itens








*/
