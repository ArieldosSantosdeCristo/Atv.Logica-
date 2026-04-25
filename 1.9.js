const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota do aluno: ", (P1) => {

  const media = 5;
  const nota = (media * 3 - Number(P1)) / 2;

console.log("Você precisa tirar " + nota.toFixed(2) + " para ser aprovado.");
  
  rl.close();
});