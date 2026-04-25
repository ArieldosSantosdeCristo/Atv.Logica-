const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor:", (V1) =>{
    rl.question("Digite o segundo valor:", (V2) =>{

      v1=Number(V1);  
       v2=Number(V2);

       if(v1<v2){
        console.log("O menor valor é:", v1);
       }
       if(v2<v1){
        console.log("O menor valor é:", v2);
       }else{
        console.log("Os numeros são iguais favor colocar numeros diferentes para comaparação")
       }
rl.close();
       })
    })