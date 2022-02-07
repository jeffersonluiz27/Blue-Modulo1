const prompt = require('prompt-sync')();

for (let i = 0; i < 3; i++) {
  var opcao = prompt(
    'Qual é a sua opcao pra essa rodada? Digite Azul, Vermelha, ou Verde: '
  );
  var resposta = Math.floor(Math.random() * 3 + 1);
  console.log(resposta);
  if (opcao.trim().toLowerCase() == 'azul') {
    console.log('Você escolheu a bebida azul.');
    if (resposta == 1) {
      console.log('Você perdeu uma vida.');
    } else if (resposta == 2) {
      console.log('Você perdeu meia vida.');
    } else {
      console.log('Escapou! Não perdeu vida.');
    }
  } else if (opcao.trim().toLowerCase() == 'vermelha') {
    console.log('Você escolheu a bebida vermelha. ');
    if (resposta == 1) {
      console.log('Você perdeu uma vida.');
    } else if (resposta == 2) {
      console.log('Você perdeu meia vida.');
    } else {
      console.log('Escapou! Não perdeu vida.');
    }
  } else if (opcao.trim().toLowerCase() == 'verde') {
    console.log('Você escolheu a bebida verde.');
    if (resposta == 1) {
      console.log('Você perdeu uma vida.');
    } else if (resposta == 2) {
      console.log('Você perdeu meia vida.');
    } else {
      console.log('Escapou! Não perdeu vida.');
    }
  }
}
