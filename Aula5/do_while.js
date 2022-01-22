const prompt = require('prompt-sync')();

do {
  if (
    (senha = prompt('Digite a senha de acesso: ')) != 'Blue' &&
    senha != 'blue'
  ) {
    console.log('Tente de novo!');
  }
} while (senha != 'Blue' && senha != 'blue');
