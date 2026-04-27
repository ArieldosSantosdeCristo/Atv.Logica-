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
    
    let A = 1
    let B = 1

    console.log(A);
    console.log(B);

    //Verifica as posições e atutomaticamente faz a soma e passando para o proximo
    
    for(let i= 1; i<=30; i++){
        let proximo= A+B
        console.log(proximo);

        A=B;
        B=proximo;
    }
    rl.close();
}
main();