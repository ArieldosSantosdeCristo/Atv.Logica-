const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

  rl.question("Digite quanto esta atualmente a cotação do dólar (US):\n ", (US) =>{
    rl.question("Digite a quantidade de dolares:\n", (Q) =>{
const real = Number (US) * Number(Q);

console.log (`O valor em Real convertido é exatamente R$ ${real}`);
rl.close();
    });
  });