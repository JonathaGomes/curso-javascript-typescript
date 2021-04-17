const numeros = [5, 50, 80, 2, 4, 7, 11, 35, 23];
const total = numeros.reduce((acumulador, valor, indice) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

console.log(total);

const pessoas = [
  { nome: "Jonatha", idade: 16 },
  { nome: "Daniel", idade: 21 },
  { nome: "Ednardo", idade: 17 },
  { nome: "José", idade: 27 },
  { nome: "Zé", idade: 34 },
  { nome: "Gomes", idade: 32 },
  { nome: "João", idade: 10 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
