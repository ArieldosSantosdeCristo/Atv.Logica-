const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main() {
const q=Number (await perguntar("Quantos numeros deseja digitar?"));
  let numeros = [];

 //vetor onde pecorre a posição dos valores

  for (let i = 1; i <q; i++) {
    const valor = await perguntar(`Digite o número ${i}: `);
    numeros.push(Number(valor));
  }
//mostrando os numeros guardados do teclado
  console.log("Valores digitados:", numeros);

//função de onder inversa
  const inverso=[...numeros].reverse();

console.log("Os valores na ordem inversa", inverso)
  rl.close();
}

main();

