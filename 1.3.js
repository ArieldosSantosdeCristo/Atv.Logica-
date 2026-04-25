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

async function main () {
    let soma = 0;

    for(let i = 0 ; i<= 3; i++){
        const valor = await perguntar(`Digite o valor ${i}:  `  );
    soma= soma + Number(valor);
}
const media = soma/4;
console.log ("Meida:\n", media.toFixed(2));
rl.close();
}
main();