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

    let chave;


    //validar chave entre 1 e 10

    do{
        chave= Number(await perguntar("Digite a senha entre 1 a 10:"));

        if(chave < 1 || chave >10){
            console.log("Digite a chave entre 1 e 10");
        }
    }while(chave < 1 || chave >10);


    let criptografada=""


    for (let letra of frase){
         
        if (letra >= "a" && letra <= "z") {

      let codigo = letra.charCodeAt(0);

      let novoCodigo = ((codigo - 97 + chave) % 26) + 97;

      criptografada += String.fromCharCode(novoCodigo);

    }

        // letras maiúsculas
    else if (letra >= "A" && letra <= "Z") {

      let codigo = letra.charCodeAt(0);

      let novoCodigo = ((codigo - 65 + chave) % 26) + 65;

      criptografada += String.fromCharCode(novoCodigo);

    }
 else {
      criptografada += letra;
    }

    

    }


     console.log("\nFrase Lida:", frase);
  console.log("Chave da Criptografia:", chave);
  console.log("Frase Criptografada:", criptografada);

  rl.close();
}

main()