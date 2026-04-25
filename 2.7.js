const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite o peso do paciente:", (P) =>{
    rl.question("Digite a altura do paciente:", (A) =>{

const R= Number (P) / (A*A)

if (R < 20){
console.log("Abaixo do peso", R.toFixed(2));
}
else if(R>= 20 && R<25){
    console.log("Peso ideal", R.toFixed(2));
}else if (R>= 25){
    console.log("Acima do peso", R.toFixed(2));
}

rl.close();


    })       
})