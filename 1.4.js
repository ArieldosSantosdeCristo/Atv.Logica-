const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });
  rl.question("Digite um valor para conversão:\n", (conversor) =>{
 
    //uma milha marítima equivale a 
 // um mil, oitocentos e cinqüenta e dois metro
    
 const km= Number(conversor) * 1852;
    console.log("A conversão em Km é", km.toFixed(2) );
rl.close();
  })