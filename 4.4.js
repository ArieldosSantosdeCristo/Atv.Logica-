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

/*Armazenar um máximo de 20 valores em um vetor. A quantidade de valores a serem
armazenados será escolhida pelo usuário. Enviar mensagem de erro, caso a quantidade de
valores escolhida esteja fora da faixa possível e solicitar a quantidade novamente. Após a
digitação dos valores, criar uma rotina de consulta, onde o usuário digita um número e o
programa exibe em qual posição do vetor este número está localizado. Se o número não for
encontrado, enviar mensagem “Valor não encontrado!”. Perguntar ao usuário se deseja ou não
fazer uma nova consulta, consistir a resposta e encerrar o programa em caso negativo */

async function main(){
let N

    //loop onde verificar se o valor é menor que 20 

    do{
        const cal = await perguntar("Digite um numero onde seja no maximo até 20:")

        N =Number(cal);

          if (N < 1 || N > 20){
            console.log("Digite um valor positivo de 1 a 20:\n")
        }
    }while(N < 1 || N > 20)

        
        let num=[];

        for(let i= 0; i<N; i++){
        const Valor= await perguntar(`Digite o número ${i+1}: `);
        num.push(Number(Valor));
        } 
     console.log("Os numeros digitados são:", num);

     //Consulta

     let cons
     
     do{
        const verificar = await perguntar("Escolha um valor para consultar no nosso vetor:");

        const pos= num.indexOf(Number(verificar));

        if(pos !== -1){
            console.log(`Valor encontrado com sucesso na posição: ${pos+1} = ${num[pos]} `)
        }else{
            console.log("Valor não encontrado")
        }

        cons= await perguntar("Deseja continuar verificando ? (s/n):");
     } while (cons.toLowerCase() === "s");
     
    rl.close();
     }




    
    
main();