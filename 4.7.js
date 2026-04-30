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
    let numeros1 = [];

    //Contador de numeros
    for (let i = 1; i<=20; i++){
const valor = await perguntar(`Digite o número ${i}: `);
    numeros1.push(Number(valor));
    }
    console.log("O numeros digitados são:", numeros1)

    //Ordena em ordem crescente
    numeros1.sort((a,b) =>a-b);

    console.log("Ordem crescente", numeros1)

    rl.close()
}

main();