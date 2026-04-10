//Aluno: Victhor Gladistone de Lucena Borges
//Matricula: 251014190018

/*

let idade = 18;

if(idade >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

*/

/*

let nota = 5;

if(nota >= 9){
    console.log("Execelente!");
} else if(nota >= 6){
    console.log("Aprovado");
} else{
    console.log("Reprovado!")
}

*/

/*
let dia = "terça";

switch (dia) {
    case "segunda":
        console.log("Segundou!");
        break;
    case "terça":
        console.log("Ainda estamos no começo!");
        break;
    case "quarta":
        console.log("Meio da Semana!");
        break;
    case "quinta":
        console.log("Tá quase!");
        break;
    case "sexta":
        console.log("Sextou!");
        break;
    default:
        console.log("Final de semana finalmente!")
}

*/


/*
let i;

console.log("Repetição de número:");

for (i = 0; i < 1000; i++){
    console.log("", i);
}
*/

/*
let cont1 = 0;

while (cont1 < 3){
    console.log("Valor: ", cont1);
    cont1++;
}

*/

/*

let cont = 0;
let cont2 = 2;

while(cont < cont2){
    console.log("Valor: ", cont);
    cont++;
}

*/

/*
let i = 0;

do {
    console.log("Executa pelo menos uma vez: ", i);
    i++;
}while(i < 1);

*/

/*

for (let i = 0; i < 10; i++){
    if(i === 5) break; // quando ("5" === 5) a resposta é FALSE e quando ("5" == 5) a resposta é TRUE
    console.log(i);
}

*/

/*
for (let i = 0; i < 5; i++){
    if(i === 2) continue; // O coninue ele somente interrompe a execução uma vez, depois ele volta a executar o loop (Interrompe apenas a iteração atual e continua o loop)
    console.log(i);
}

*/

/*

let num = 7;

if((num % 2) === 0){
    console.log("O número "+ num +" é PAR!");
} else {
    console.log("O número "+ num +" é IMPAR");
}

*/

/* //Tabuada
let num = 2;

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

*/

let senhaUsuario;
let nome;
let senha;

alert("Bem-vindo ao Sistema de verificar senha!");

nome = prompt("Digite seu nome:\n");
senhaUsuario = prompt("Crie uma senha:\n");

alert("Criado o Úsuario e a senha!");

do{
    alert("Entre com seus dados:\n");
        
    nome = prompt("Digite seu nome:\n");
    senha = prompt("Digite a sua senha:\n");
    if(senha === senhaUsuario){
        alert("Parabéns, acesso liberado!");
    } else {
        alert("Acesso Negado, digite a senha correta!!")
    }
}while(senha != senhaUsuario);