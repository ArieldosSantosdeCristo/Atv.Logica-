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
    const frase = await perguntar("Digite uma frase:\n");

    let maiusculas= 0
    let minusculs= 0
    let fraseTrocada = "";



for (let i = 0; i < frase.length; i++) {

  let letra= frase[i];
 
  // verifica maiúscula
        if (letra[i] >= "A" &&letra[i] <= "Z") {
    maiusculas++;

    //troca para maiúsculas
   
fraseTrocada+=letra.toUpperCase()
  
//verifica minusclas
}else if (letra >= "a" && letra <= "z") {
      minusculas++;
  
  }else{
   
    fraseTrocada += letra;
  }
}


  console.log("\n----RESULTADO ------");
  console.log("Frase Lida:", frase);
  console.log("Quantidade de Maiúsculas:", maiusculas);
  console.log("Quantidade de Minúsculas:", minusculas);
  console.log("Frase Lida Trocada:", fraseTrocada);

  rl.close();
}

main();

