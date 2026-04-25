const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

  rl.question("Digite o velocidade inicial em (m/s):\n", (vi) =>{
rl.question("Digite a aceleração (m/s2):\n", (a) => {
   rl.question("Digite o tempo de percurso en  (s):\n", (s) =>{

    const VF = (Number (vi) + Number (a) * Number (s)) * 3.6;

    console.log("A velocidade final em Km/h:", VF.toFixed(2) );

    rl.close();
   })

     })
  })