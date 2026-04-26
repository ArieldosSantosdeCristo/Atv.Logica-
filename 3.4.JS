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
    let x = 1;

    for(let i =1; i<=10; i++){
        console.log(`5 x ${i} = ${5 * i}` );
    
    }

    rl.close;
}
main();