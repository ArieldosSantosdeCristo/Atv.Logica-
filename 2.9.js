const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  });

  rl.question("Digite o velocidade inicial em (m/s):\n", (vi) =>{
rl.question("Digite a aceleração (m/s2):\n", (a) => {
   rl.question("Digite o tempo de percurso en  (s):\n", (s) =>{

    const VF = (Number (vi) + Number (a) * Number (s)) * 3.6;

    if(VF <=40){
        console.log("Veiculo muito lento", VF.toFixed(2))
    }
    else if(VF>40 && VF <=60){
        console.log("Velocidade permitida", VF.toFixed(2));
    }else if(VF >60 && VF <=80){
       console.log("Velocidade de cruzeiro", VF.toFixed(2));
    }
    else if(VF >80 && VF <= 120){
        console.log("Veiculo rapido", VF.toFixed(2));
  
    }else{
        console.log("Velocidade muito rapido", VF.toFixed(2));
    }
rl.close();
   })
})
  })