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

    let Pessoas=[]
    let contador = 0;
//vetor de repetição onde vai rodar 20 vezes
    for(let i = 1; i<=20; i++){
        console.log(`\n Pessoas: ${i}`)
       contador++

//loop perguntando qual o nome da pessoa
        let nome
do{
    nome= await perguntar("Nome:");
    if(nome ===""){
        console.log("Nome não pode ser vazio")
    }
}while (nome ==="")

//loop perguntando qual o sexo da pessoa
    let sexo

  
        do {
      sexo = (await perguntar("Sexo (M/F): ")).toUpperCase();
      
      if (sexo !== "M" && sexo !== "F") {
      
        console.log("Digite apenas M ou F!");
    }
  } while (sexo !== "M" && sexo !== "F");

//loop perguntando qual a idade da pessoa
    let idade

    do{
        idade= Number(await perguntar("Idade:"))

        if(isNaN(idade) || idade <= 0){
            console.log("Digite sua idade")
        }
    }while(isNaN(idade) || idade <= 0)

        Pessoas.push({ nome, sexo, idade })
        
        console.log(`Dados salvos ${nome}, ${sexo}, ${idade}`)

     

    }
    console.log("\nPessoas cadastradas:\n")
        

    const idades=Pessoas.filter(p=>p. idade>18);

    let porcentagem = (contador/Pessoas.length)* 100

    console.log("Pessoas coma idades maior que 18", idades);

 console.log("Porcentagem:", porcentagem.toFixed(2) + "%");
    rl.close();
}
main()