// Filter retorna um array <= do que o array original
const numeros = [5, 50, 80, 2, 4, 7, 11, 35, 23];
const maioresque10 = numeros.filter((num) => num > 10);
// console.log(maioresque10);

const pessoas = [
  { nome: "Jonatha", idade: 16 },
  { nome: "Daniel", idade: 21 },
  { nome: "Ednardo", idade: 17 },
  { nome: "José", idade: 27 },
  { nome: "Zé", idade: 34 },
  { nome: "Gomes", idade: 32 },
  { nome: "João", idade: 10 },
];

const pessoasNome5Letras = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
console.log(pessoasNome5Letras);

const pessoasMaisVelhas = pessoas.filter((pessoa) => pessoa.idade > 20);
console.log(pessoasMaisVelhas);

const pessoasQueTerminamComA = pessoas.filter((pessoa) =>
  pessoa.nome.endsWith("a")
);
console.log(pessoasQueTerminamComA);
