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
    
   const N = await perguntar("Digite um numero para calcular: ");
    const num = Number(N);
    console.log("Número digitado:", num);

    let valorA;
    let valorB;
    


    do{
        const A= await perguntar("Digite o valor A sendo ele positivo:");
        
        valorA = Number(A);
        

        if(valorA <=0){
            console.log("Digite um valor maior que 0!:")
        }
    }while(valorA<=0);
    

     do{
        const B= await perguntar(`Digite o valor B sendo ele positivo e maior que ${valorA}:`);
        
        valorB = Number(B);
        

        if(valorB <=0){
            console.log("Digite um valor maior que 0!:")
        }else if(valorB<=valorA){
            console.log(`O valor de B dever ser maior que o valor ${valorA}!`)
        }
    }while(valorB<=0 || valorB<=valorA);


    console.log(`Tabuada de ${num} no intervalor de ${valorB} até ${valorA}: \n`);

    for (let i= valorB; i>= valorA; i--){

    console.log(`${num} x ${i} = ${num * i}`);
    }
    rl.close()
} 
main()
    
