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
 
    let numeros = [];
  
 for (let i=1; i<=20; i++){
    const valor = await perguntar(`Digite o número ${i}: `);
    numeros.push(Number(valor));
   }
   console.log("Os numeros digitados são:", numeros)

   //constante multiplicativa

   const multi =Number(await perguntar("Digite a constante multiplicativa:"));
   
   //multiplicar e armazenar no proprio vetor
   for(let i=0; i<numeros.length; i++){
    numeros[i]= numeros[i] * multi;
   }

   console.log("O vetor modificado", numeros);
rl.close();
}
main();
