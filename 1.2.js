
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite o volume da esfera:\n ", (diametro) =>{
const raio= Number(diametro) / 2 ;
const volume = (4/3) * Math.PI * raio**3;
console.log("O volume da esfera", volume.toFixed(2));
});