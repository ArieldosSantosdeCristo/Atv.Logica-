const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite o sexo do paciente (F) Feminino e (M) Masculino:", (S) =>{
rl.question("Digite o peso do paciente:", (P) =>{
    rl.question("Digite a altura do paciente:", (A) =>{
const peso = Number(P);
const altura = Number(A);
const sexo = S.toUpperCase();

const R = P / (A*A);

switch (sexo){
  case "F":
  if(R < 19 ){
    console.log("Abaixo do Peso");

  }else if(R >=19 && R<24 ){
    console.log("Peso Ideal");
  }else if (R> 24){
    console.log("Acima do peso")
  }
  break;

  case "M":

  if(R< 20){
    console.log("Acima do peso");
  }
  else if(R>= 20 && R<25){
    console.log("Peso ideal");
  }
  else{
    console.log("Abaixo do peso")

  }
 break;

 default:
  console.log("Sexo inválido")
}
rl.close();
    })
})
})