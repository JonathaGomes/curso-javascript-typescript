// Map retorna um array do tamanho do array original
const numeros = [5, 50, 80, 2, 4, 7, 11, 35, 23];
const dobro = numeros.map((num) => num * 2);
// console.log(dobro);

const pessoas = [
  { nome: "Jonatha", idade: 16 },
  { nome: "Daniel", idade: 21 },
  { nome: "Ednardo", idade: 17 },
  { nome: "José", idade: 27 },
  { nome: "Zé", idade: 34 },
  { nome: "Gomes", idade: 32 },
  { nome: "João", idade: 10 },
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);
const ids = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(ids);
console.log(pessoas);
