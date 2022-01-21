/**
 Calculadora de Dano - Escreva um programa que receba dois valores 
 digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) 
 e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores 
 digitados, exiba a quantidade de turnos que o jogador irá demorar para 
 conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).
 */

 const prompt = require("prompt-sync")();

 let entrada = 0;
 const erro = "O valor digitado não é válido!";

 entrada = +prompt("Digite a quatidade de vida do monstro (Entre 10 e 50): ");
 if(entrada < 10 || entrada > 50){
  console.log(erro);
 }else{
   var vidaMonstro = entrada;
 }

 entrada = +prompt("Digite a quatidade de ataque do jogador (Entre 5 e 10): ");
 if(entrada < 5 || entrada > 10){
   console.log(erro);
 }else{
  var ataqueJogador = entrada;
 }

 let turnos = vidaMonstro / ataqueJogador;

 console.log(`O jogador irá derrotar o monstro em ${turnos} turnos`);