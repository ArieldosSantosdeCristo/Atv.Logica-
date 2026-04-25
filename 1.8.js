const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

async function main () {
    let total=1;

    for(i=1; i <=5; i++){
const produtos = await perguntar(`Digite o valore do produto R$\n ${i}: `);
total = total + Number(produtos);    
}

const pagamento =Number (await perguntar ("Digite o valor do pagamento\n R$"));

console.log (`Total da compra: R$ ${total.toFixed(2)}`);
console.log (`Valor do pagamento: R$ ${pagamento.toFixed(2)}`);
console.log (`troco: R$ ${(pagamento-total).toFixed(2)}`);

rl.close;
}
main();