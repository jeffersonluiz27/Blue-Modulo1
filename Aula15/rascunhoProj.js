var prompt = require('prompt-sync')();
let vitoriaPersonagem = 0;
let vitoriaVelho = 0;

for (let i = 0; i < 3; i++) {
  let velho = 0;
  let personagem = 0;
  let moeda = 0;

  do {
    console.log(`\nRodada ${i + 1}\n`);
    personagem = parseInt(prompt('Escolha uma opção: 1 - Cara | 2 - Coroa: '));
    if (personagem == 1) {
      velho = 2;
    } else if (personagem == 2) {
      velho = 1;
    } else {
      console.log('Opção inválida!! \n');
    }
    moeda = Math.floor(2 * Math.random() + 1);
  } while (personagem != 1 && personagem != 2);

  if (personagem == moeda) {
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
