/*

// Aqui estamos solicitando para que o úsuario digite nome dele e armazenamos na variável nome

const nome = prompt("Digite seu nome:");

//Aqui apresentamos a mensagem concatenada com a variável

console.log("O nome digitado foi: ", nome);

*/

/*

const idade = parseInt(prompt("Digite sua idade:"));

console.log("Idade + 10: ", idade + 10);

*/

/*

const nome = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a nota do 1° bimestre:"));
const nota2 = parseFloat(prompt("Digite a nota do 2° bimestre:"));
const nota3 = parseFloat(prompt("Digite a nota do 3° bimestre:"));
const nota4 = parseFloat(prompt("Digite a nota do 4° bimestre:"));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Aluno: ${nome}`);
console.log(`Média final: ${media.toFixed(1)}`);

if (media >= 6){
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Reprovado");
}

*/

/*
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

const numeros = new Array(1, 2, 3, 4, 5);

console.log(numeros);


const cores = ["azul", "vermelho", "verde"];

console.log(cores[0]);
console.log(cores[1]);
console.log(`${cores[2]} \n${cores[1]} \n${cores[0]}`);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores[0]);
console.log(cores[1]);
console.log(cores[2]);

cores[1] = "amarelo";

console.log(cores);

*/

/*

const misto =[42, "texto", true, null, {nome: "Ana"}, [1,2,3]];

console.log(misto);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

cores.push("Roxo");
console.log(cores);

cores.push(prompt("Digite uma cor:"));
console.log(cores);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor:"));
console.log(cores);

cores.pop();
console.log(cores);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

*/

/*
const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

console.log("Verifica se um elemento existe no Array: " + cores.includes("Verde"));

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

console.log("Verifica se um elemento existe no Array: " + cores.includes("Verde"));

//Remove 1 elemento a partir do índice 1
cores.splice(1, 1);
console.log(cores);

//Adiciona um elemento no índice 1
cores.splice(1, 0, prompt("Digite uma cor:"));
console.log(cores);

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

console.log("Verifica se um elemento existe no Array: " + cores.includes("Verde"));

//Remove 1 elemento a partir do índice 1
cores.splice(1, 1);
console.log(cores);

//Adiciona um elemento no índice 1
cores.splice(1, 0, prompt("Digite uma cor:"));
console.log(cores);

const subCores = cores.slice(0, 2);
console.log(subCores);

*/

/*
const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

console.log("Verifica se um elemento existe no Array: " + cores.includes("Verde"));

//Remove 1 elemento a partir do índice 1
cores.splice(1, 1);
console.log(cores);

//Adiciona um elemento no índice 1
cores.splice(1, 0, prompt("Digite uma cor:"));
console.log(cores);

const subCores = cores.slice(0, 2);
console.log(subCores);

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

*/

/*

const cores = ["Azul", "Vermelho", "Verde"];

console.log(cores);

cores.push(prompt("Digite uma cor para o final:"));
console.log(cores);

cores.pop();
console.log(cores);

cores.shift();
console.log(cores);

cores.unshift(prompt("Digite uma cor para o começo:"));
console.log(cores);

console.log("Index: "+ cores.indexOf("Verde"));

console.log("Verifica se um elemento existe no Array: " + cores.includes("Verde"));

//Remove 1 elemento a partir do índice 1
cores.splice(1, 1);
console.log(cores);

//Adiciona um elemento no índice 1
cores.splice(1, 0, prompt("Digite uma cor:"));
console.log(cores);

const subCores = cores.slice(0, 2);
console.log(subCores);

for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

cores.forEach(function(cor, index){
    console.log(index, cor);
});

*/

/*
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(function(numero){
    return numero % 2 === 0;
});

const impares = numeros.filter(function(numero){
    return numero % 2 === 1;
});

console.log(numeros);
console.log(pares);
console.log(impares);

*/