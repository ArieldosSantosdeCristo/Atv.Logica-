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

    let nome=[]

    for(let i = 1; i<=2;i++){
const pessoas = await perguntar(`Digite o nome${i}: `);
    nome.push(pessoas);

    }

    console.log("\n--------Nomes----------\n")
    console.log("\n", nome)
 console.log("\n------------------\n")

 //Ordem alfabetica 
     nome.sort((a,b) => a.localeCompare(b));
      console.log("", nome)
    rl.close();
}

main()