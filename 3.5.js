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
   
    let x 

    do{
        const C = await perguntar("Digite um valor positivo:");

        valor = Number(C);

        if(valor <=0){
            console.log("Digite um valor maior que 0!:")
        }
    }while(valor<=0);

    console.log(`Tabuada do ${valor}:`)
   
    for(let i = 1; i<=10; i++ ){
       console.log(` ${valor} x ${i} = ${valor * i} ` );

}
   for(let i = 1; i<=10; i++ ){
       console.log(` \n ${valor} + ${i} = ${valor +i} ` );

}
          rl.close();

}
   main(); 
