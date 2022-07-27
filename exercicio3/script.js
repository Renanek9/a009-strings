//Crie a const para a frase aqui

const frasePadrao = `Jorge tem uma casa verde e com portão azul, com os dizeres: 
"BOAS VINDAS, mas não deixe o gato sair"`

console.log(frasePadrao);

const novaFrase = frasePadrao.replace("verde","rosa").replace("azul","laranja")

console.log(novaFrase);

console.log(novaFrase.includes("verde"));
console.log(novaFrase.includes("laranja"));

const novaFrase2 = novaFrase.replaceAll("mas não deixe o gato sair", 
"MAS NÃO DEIXE O GATO SAIR")

console.log(novaFrase2);


// const novaFrase1 = frasePadrao.replace("verde", "rosa")
// const novaFrase2 = novaFrase1.replace("azul", "laranja")