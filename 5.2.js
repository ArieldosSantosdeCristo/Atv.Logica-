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

const frase = await perguntar("Digite uma frase:\n");
//frase invertida
const fraseinvertida = frase.split("").reverse().join("");


 // Separar palavras
  const palavras = frase.trim().split(/\s+/);

  let contador =0;

for (let i = 0; i < palavras.length; i++) {

  if (
      palavras[i].startsWith("A") || palavras[i].startsWith("a")
    ) {
     
     
      contador++;
    }
  }

console.log("\n Resultado");
console.log("\n Frase:", frase);
console.log("\n Frase invertida:",fraseinvertida );
console.log("\n Quantidade de palavras com a letra A:",contador);

 rl.close();
}
main();