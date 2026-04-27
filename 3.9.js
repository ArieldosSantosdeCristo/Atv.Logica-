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

    let N 

    //loop onde verificar se o valor é menor que 100 e positivo

    do{
        const cal = await perguntar("Digite um valor que seja postivio e menor que 100:")

        N =Number(cal);

        if(N >100 || N <=0){
            console.log("Digite um valor positivo e menor que 100:\n")
        }
    }while(N >100 || N <=0)

        
        
        
        let soma = 0
        
        for (let i = 1; i<=N; i++){
           
      let termo= i*i+1
        soma +=termo;

      console.log(`Termo ${i}: ${termo} = Soma: ${soma}`);
        }


        rl.close();
}
main();