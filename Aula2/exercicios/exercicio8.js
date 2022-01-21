/**
 Qual o valor do troco? - Crie um programa que calcule o troco 
 de uma compra no valor de R$100,98 e que foi paga com R$150,00. 
 O valor do troco deve ser exibido no console.
 */

 const compra = 100.98;
 const pago = 150;

 const troco = pago - compra;

 console.log(`O valor do troco é de: R$ ${troco.toFixed(2)}`)