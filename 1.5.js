const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

  rl.question("Digite o valor da temperatura em (°C):\n", (celsius) =>{
    const fahrenheit = ( celsius * 9/5) + 32;

    console.log ("A temperatura em fahrenheit:",fahrenheit );
    rl.close();
  });