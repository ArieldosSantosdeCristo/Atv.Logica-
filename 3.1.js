const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirValor() {
rl.question("Digite um valor que seja positivo", (V) =>{

    let valor = Number(V)
    
    if(V>0){
        console.log("Valor valido", V)
    }else{
        console.log("Digite novamente, valor inválido");
        pedirValor();
    }
});
}
pedirValor();
