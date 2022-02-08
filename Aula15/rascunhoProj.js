var prompt = require('prompt-sync')();
let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
  let escolhaVelho = 0;
  let escolhaPersonagem = 0;
  let faceMoeda = 0;

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

  console.log(
    `Placar: Velho: ${vitoriaVelho} Personagem: ${vitoriaPersonagem}`
  );
}

if (vitoriaPersonagem > vitoriaVelho) {
  console.log('\nParabens! \nVocê ganhou o duelo e recebeu uma rede de pesca!');
} else {
  console.log('\nQue pena! \nVocê perdeu o duelo!');
}
