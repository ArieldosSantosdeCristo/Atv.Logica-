
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirSegundo(valor1) {
  rl.question("Digite o segundo valor (maior que o primeiro): ", (V2) => {
    const valor2 = Number(V2);

  if (valor2 > valor1) {
      console.log("Valores válidos:", valor1, valor2);
      //rl.close();
    } else {
      console.log("Valor inválido! Digite novamente.");
      pedirSegundo(valor1); 
    }
  });
}

rl.question("Digite o primeiro valor: ", (V1) => {
  const valor1 = Number(V1);
  pedirSegundo(valor1);
});