const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function pedirSexo() {

rl.question("Digite o sexo da Pessoa (M) Masculino ou (F) Feminino: ", (SEXO) =>{

  const s = SEXO.trim().toUpperCase();
switch (s){
  case "F":
   console.log("Sexo feminino");
   
    break;
  
    case "M":

    console.log("Sexo Masculino");
    
    break;

 default:
  console.log("Identificação errada");
  pedirSexo();


}
})
}

  pedirSexo();
