const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contadorpalavras(contador) {
  return new Promise((resolve) => {
    rl.question(contador, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main () {

const frase = await contadorpalavras("Digite uma frase:\n");
const palavras = frase.trim().split(/\s+/);
 
   let quantidade;

   //Verificar de quantidade de palavras

   if(palavras.length ===1 && palavras[0] ===""){
  quantidade = 0;
}else{
    quantidade=palavras.length
}
 

console.log("Frase digitada:", frase);
  console.log("Quantidade de palavras:", quantidade);

  rl.close();
}

main();
