const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor:", (V1) =>{
    rl.question("Digite o segundo valor:", (V2) =>{
        rl.question("Digite o terceiro valor", (V3) => {

      v1=Number(V1);  
       v2=Number(V2);
       v3=Number(V3);

if(v1>V2 && v1>v3){
    console.log("O maior numero é", v1);
}

else if(v2>v1 && v2>v3){
     console.log("O maior numero é", v2);

}else {
    console.log("O maior numero é", v3);
}
rl.close(2)
       })
    })
})