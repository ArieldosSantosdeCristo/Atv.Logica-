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

async function main() {

    let pessoas=[]
//contador
for (let i = 1; i<=20; i++){
  
    console.log(`\nPessoa ${i}`);
    //perguta ao usuario 
    const nome = await perguntar(`Digite o nome: `);
    const sexo= (await perguntar(`Digite o sexo (F/M): `)).toUpperCase();;
    const idade = Number(await perguntar(`Digite a idade: `));
 
    //Armazenando no vetor pessoas
    pessoas.push({ nome, sexo, idade })
   console.log(`Dados salvos ${nome}, ${sexo}, ${idade}`)
}

  
console.log("\nPessoas cadastradas:");

//Ordem crescente da idade em array
pessoas.sort((a,b) =>a.idade - b.idade);
console.log(pessoas);
rl.close();
}
main()
