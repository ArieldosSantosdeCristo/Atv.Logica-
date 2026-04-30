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
async function main(){
     let numeros1 = [];
     let numeros2 = []
  
 for (let i=1; i<=20; i++){
    const valor = await perguntar(`Digite o número ${i}: `);
    numeros1.push(Number(valor));
   }

   console.log("Os numeros digitados são:", numeros1)

   //constante multiplicativa

   const multi =Number(await perguntar("Digite a constante multiplicativa:"));
   
   //multiplicar e armazenar em outro vetor
   for(let i=0; i<numeros1.length; i++){
    numeros2[i]= numeros1[i] * multi;
   }
   console.log("O proximo vetor", numeros2);
rl.close();
}
main();
