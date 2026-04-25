
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Digite o valor do lado do quadrado:\n ", (lado) =>{
const area = Number(lado)** 2;
console.log ("Area do quadrado",  area);
rl.close()
})








