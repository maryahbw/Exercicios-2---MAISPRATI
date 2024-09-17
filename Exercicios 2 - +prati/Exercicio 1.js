/*
- Acessando Propriedades de Objetos
Crie um objeto carro com propriedades como marca, modelo, ano, e cor. 
se for in para iterar sobre as propriedades e exibir seus valores no console.
*/

const carro = {
    marca: "Fiat",
    modelo: "Argo",
    ano: 2024,
    cor: "Branco",
  };
  for (let prop in carro) {
    console.log(prop, carro[prop]);
  }