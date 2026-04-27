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

    //loop onde verificar se o valor é menor que 20 e positivo

    do{
        const cal = await perguntar("Digite um valor que seja postivio e menor que 20:")

        N =Number(cal);

        if(N >=20|| N <=0){
            console.log("Digite um valor positivo de 1 a 19:\n")
        }
    }while(N >=20 || N <=0)
  
  //variaveis
   let maior = -Infinity;
  let menor = Infinity;
  let soma = 0;
  let positivos = 0;
  let negativos = 0;

   for (let i=1; i<=N; i++){
    const valor= await perguntar(`Digite um valor ${i}:`);
    const nu = Number(valor);
//maior valor
if(nu>maior){
  maior = nu
}
//menor valor
if (nu<menor){
  menor = nu
}

//soma

soma = nu+soma;

if(nu>=0){
  positivos++
}else{
  negativos++
}
   }

   //calculos
const media= soma / N;
   const porcP= (positivos/N) *100;
   const porcN= (negativos/N) *100;
    

   console.log("-----------------Resultados----------------\n")
   console.log("O maior valor:", maior);
    console.log("O menor valor:", menor);
        console.log("A soma dos valores:", soma);
          console.log("A média aritmétrica :", media);
           console.log("A porcentagem dos valores positivos", porcP.toFixed(2)+ "%")
             console.log("A porcentagem dos valores negativos", porcN.toFixed(2)+ "%");

        console.log("\n\nPrograma finalizado com sucesso!!!!");
          
    }

    


main();

