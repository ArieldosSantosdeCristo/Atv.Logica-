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
    
    let C

    //loop onde verifica se o valor é positivo e inteiro
  
do{
     const soma = await perguntar("Digite um valor que seja positivo:");

     valor=Number(soma);

     if(!Number.isInteger(valor) || valor<=0){
        console.log("Por favor digite um numero positivo que seja maior que 0:");
     }
    }while(!Number.isInteger(valor) || valor<=0);

    // soma de 1 até 100
     console.log(`Tabuada de soma do ${valor}:\n`)

    for(let i = 1; i<=100; i++){
    console.log(`${valor} + ${i} = ${valor+i}`);
}
rl.close();
   }

main();