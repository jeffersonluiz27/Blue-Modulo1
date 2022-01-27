/**
Faça um programa que carregue uma lista com os modelos de cinco carros. 
Carregue uma outra lista com o consumo desses carros, isto é, quantos 
quilômetros cada um desses carros faz com um litro de combustível. 
Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome 
para percorrer uma distância de 1000 quilômetros e quanto isto custará, 
considerando um que a gasolina custe R$ 5,50 o litro.
 */

const carros = ['Punto', 'Onix', 'Palio', 'HB20', 'Picanto'];
const consumo = ['12', '14', '15', '13', '11'];
const gasolina = 5.5;
const consumoMil = [];
const custo = [];

let econômico = 0;
let carroEco = '';
console.log();
for (const conCarro of consumo) {
  if (conCarro > econômico) {
    econômico = conCarro;
  }
  consumoMil.push(1000 / conCarro);
  custo.push((1000 / conCarro) * gasolina);
}
carroEco = carros[consumo.indexOf(econômico)];
console.log(`O carro mais econômico é o ${carroEco} fazendo ${econômico}Km/L`);
console.log();

for (let i = 0; i < consumoMil.length; i++) {
  console.log(
    `O Carro ${carros[i]} percorre 1000Km com ${consumoMil[i].toFixed(
      2
    )} Litros e gasta R$${custo[i].toFixed(2)} ao custo de R$${gasolina} reais`
  );
}
console.log();
