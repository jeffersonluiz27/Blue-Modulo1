/**
 Faça um programa de cadastro de clientes que mostre um menu de 
 opções e permita com que a pessoa escolha umas das opções, 
 exibindo qual foi a opção escolhida.
 */

 const prompt = require("prompt-sync")();

const opcao1 = "Arroz com Feijão";
const opcao2 = "Massas";
const opcao3 = "Sushi";

console.log(`
Escolha uma opção: 
1 - ${opcao1}
2 - ${opcao2}
3 - ${opcao3}
`);

let escolha = +prompt("Digite uma opção: ");

if(escolha==1){
  console.log(`Voce escolheu: ${opcao1}`)
}else if(escolha==2){
  console.log(`Voce escolheu: ${opcao2}`)
}else if(escolha==3){
  console.log(`Voce escolheu: ${opcao3}`)
}else{
  console.log(`Opção inválida!`)
}

