const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite a base do triangulo: ", (B) =>{
    rl.question("Digite a altura do triangulo: ", (H) =>{

        const area = B*H;

        if(area >100){
            console.log("Terreno grande",  area.toFixed(2), "de área");
        }
        rl.close;
    })
})