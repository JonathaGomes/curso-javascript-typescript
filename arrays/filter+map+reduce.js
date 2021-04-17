// Filtrar os numeros pares
// Dobrar os valores dos numeros pares
// Somar todos os valores

const numeros = [5, 50, 80, 2, 4, 7, 11, 35, 23];
const pares = numeros.filter((valor) => {
  return valor % 2 == 0;
});
const dobroPares = pares.map((valor) => {
  return valor * 2;
});
const somaTudo = dobroPares.reduce((acumulador, valor) => {
  return acumulador + valor;
});

console.log(somaTudo);
