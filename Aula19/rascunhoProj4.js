var prompt = require('prompt-sync')();
let r = false;
let vida = 50;
let dano;

do {
  dano = +prompt(`Digite o Dano do herói (5 a 10): `);

  if (dano < 5 || dano > 10) {
    console.log(`Digite um valor entre 5 e 10.`);
    r = false;
  } else if (dano >= 5 && dano <= 10) {
    r = true;
  }
} while (r == false);

let calculo;

if (vida % dano == 0) {
  calculo = vida / dano;
} else if (vida % dano != 0) {
  calculo = vida / dano + 1;
}

console.log(`A vida do Troll é de ${vida}Hp`);
console.log(`O dano do Herói causa -${dano}Hp`);
console.log(`Calculo: ${calculo}`);
