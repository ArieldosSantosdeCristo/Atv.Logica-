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
//vetor de repetição onde vai rodar 20 vezes
    for(let i = 1; i<=20; i++){
        console.log(`\n Pessoas: ${i}`)

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

        if(Number(idade) ===""){
            console.log("Digite sua idade")
        }
    }while(Number(idade) ==="")

         
        //função onde puxa os nomes cadastrados para dentro do vetor pessoas
        Pessoas.push({ nome, sexo, idade })
        
        console.log(`Dados salvos ${nome}, ${sexo}, ${idade}`)


    }

  console.log("\nPessoas cadastradas:\n");
  //Filtrando nome das pessoas do sexo feminino
  const feminino=Pessoas.filter(p=>p.sexo==="F")
  console.log("Pessoas cadastradas do sexo feminino", feminino);
    rl.close();
}

main()