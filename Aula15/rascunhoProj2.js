const prompt = require('prompt-sync')();

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