/*
// Questão 1

const nome = prompt("Digite seu nome:");
let salarioAtual = parseFloat(prompt("Digite seu salario:"));
let porcentagemDeAumento = parseFloat(prompt("Digite a porcentagem do aumento:"));

function calcDeReajusteSalarialTradicional(salario, porcentagemAumento){
    return salario + (salario * (porcentagemAumento /100));
};

let calcDeReajusteSalarialAnonima = function (salario, porcentagemAumento){
    return salario + (salario * (porcentagemAumento /100));
};

const calcDeReajusteSalarialArrow = (salario, porcentagemAumento) => salario + (salario * (porcentagemAumento /100));

console.log(`(Tradicional)\n ${nome}, seu novo salario é: R$${calcDeReajusteSalarialTradicional(salarioAtual, porcentagemDeAumento).toFixed(2)}`);
console.log(`(Anônima)\n ${nome}, seu novo salario é: R$${calcDeReajusteSalarialAnonima(salarioAtual, porcentagemDeAumento).toFixed(2)}`);
console.log(`(Arrow)\n ${nome}, seu novo salario é: R$${calcDeReajusteSalarialArrow(salarioAtual, porcentagemDeAumento).toFixed(2)}`);

*/

/*
// Questão 2

let velocidade = parseFloat(prompt("Digite a velocidade em Km/h:"));

function conversorDeVelocidadeTradicional(velocidade){
    return velocidade / 3.6;
};

let conversorDeVelocidadeAnonima = function(velociade){
    return velociade / 3.6;
};

let conversorDeVelocidadeArrow = velociade => velociade / 3.6;

console.log(`(Tradicional)\n A conversão da velociade ${velocidade}Km/h para m/s é: ${conversorDeVelocidadeTradicional(velocidade).toFixed(2)}`);
console.log(`(Anônima)\n A conversão da velociade ${velocidade}Km/h para m/s é: ${conversorDeVelocidadeAnonima(velocidade).toFixed(2)}`);
console.log(`(Arrow)\n A conversão da velociade ${velocidade}Km/h para m/s é: ${conversorDeVelocidadeTradicional(velocidade).toFixed(2)}`);

*/

/*
// Questão 3

const nome = prompt("Digite seu nome:");
let idade = parseFloat(prompt("Digite sua idade:"));

function classificadorDeFaixaEtariaTradicional(idade){
    if(idade <= 17){
        return "Jovem";
    } else {
        if((idade > 17) && (idade <= 59)){
            return "Adulto";
        } else if(idade >= 60){
            return "Idoso";
        }
    }
};

let classificadorDeFaixaEtariaAnonima = function(idade){
    if(idade <= 17){
        return "Jovem";
    } else {
        if((idade > 17) && (idade <= 59)){
            return "Adulto";
        } else if(idade >= 60){
            return "Idoso";
        }
    }
};

let classificadorDeFaixaEtariaArrow = idade => {
    if(idade <= 17){
        return "Jovem";
    } else {
        if((idade > 17) && (idade <= 59)){
            return "Adulto";
        } else if(idade >= 60){
            return "Idoso";
        }
    }
};

console.log(`(Tradicional)\n ${nome}, você está classificado como: ${classificadorDeFaixaEtariaTradicional(idade)}`);
console.log(`(Anônima)\n ${nome}, você está classificado como: ${classificadorDeFaixaEtariaAnonima(idade)}`);
console.log(`(Arrow)\n ${nome}, você está classificado como: ${classificadorDeFaixaEtariaArrow(idade)}`);

*/

/*
// Questão 4

const nome = prompt("Digite seu nome:");

function validadorDeLoginAcademicoTradicional(nome){
    if(nome === "admin"){
        return true;
    } else {
        return false;
    }
};

const validadorDeLoginAcademicoAnonima = function (nome){
    if(nome === "admin"){
        return true;
    } else {
        return false;
    }
};

const validadorDeLoginAcademicoArrow = nome => {
    if(nome === "admin"){
        return true;
    } else {
        return false;
    }
};

console.log("O seu acesso foi:");
if(validadorDeLoginAcademicoTradicional(nome) == true){
    console.log("(Tradicional) \nAcesso Permitido!");
} else {
    console.log("(Tradicional) \nAcesso Negativo!");
}
if(validadorDeLoginAcademicoAnonima(nome) == true){
        console.log("(Anônima) \nAcesso Permitido!");
} else {
    console.log("(Anônima) \nAcesso Negativo!");
}

if(validadorDeLoginAcademicoArrow(nome) == true){
    console.log("(Arrow) \nAcesso Permitido!");
} else {
    console.log("(Arrow) \nAcesso Negativo!");
}

*/

/*
// Questão 5

const largura = parseFloat(prompt("Digite a largura do terreno:"));
const comprimento = parseFloat(prompt("Digite a comprimento do terreno:"));

function calcAreaTerrenoTradiconal(x, y){
    return x * y;
}

const calcAreaTerrenoAnonima = function(x, y){
    return x * y;
}

const calcAreaTerrenoArrow = (x, y) => x * y;

console.log(`(Tradicional) \nA área total do terreno é de ${calcAreaTerrenoTradiconal(largura, comprimento)}`);
console.log(`(Anônima) \nA área total do terreno é de ${calcAreaTerrenoAnonima(largura, comprimento)}`);
console.log(`(Arrow) \nA área total do terreno é de ${calcAreaTerrenoArrow(largura, comprimento)}`);
*/

/*
// Questão 6

let frase = prompt("Digita qualquer frase:");

function tranformarTextoTradicional(frase){
    return frase.toUpperCase(frase) + "!!!";
};

let tranformarTextoAnonima = function (frase){
    return frase.toUpperCase(frase) + "!!!";
};

let tranformarTextoArrow = frase => frase.toUpperCase(frase) + "!!!";

console.log(`(Tradicional)\n${tranformarTextoTradicional(frase)}`);
console.log(`(Anônima)\n${tranformarTextoAnonima(frase)}`);
console.log(`(Arrow)\n${tranformarTextoArrow(frase)}`);

*/

/*
// Questão 7

let num = parseInt(prompt("Digite um número:"));

function verificarMultiploCincoTradicional(num){
    if((num % 5) == 0){
        return true;
    } else {
        return false;
    }
};

let verificarMultiploCincoAnonima = function (num){
    if((num % 5) == 0){
        return true;
    } else {
        return false;
    }
};

let verificarMultiploCincoArrow = num =>{
    if((num % 5) == 0){
        return true;
    } else {
        return false;
    }
};

console.log(`O número digitado ${num} é:`);
if(verificarMultiploCincoTradicional(num) == true){
    console.log("(Tradicional) \nO número é múltiplo de 5!");
} else {
    console.log("(Tradicional) \nO número NÃO é múltiplo de 5!");
}
if(verificarMultiploCincoAnonima(num) == true){
        console.log("(Anônima) \nO número é múltiplo de 5!");
} else {
    console.log("(Anônima) \nO número NÃO é múltiplo de 5!");
}

if(verificarMultiploCincoArrow(num) == true){
    console.log("(Arrow) \nO número é múltiplo de 5!");
} else {
    console.log("(Arrow) \nO número NÃO é múltiplo de 5!");
}

*/

/*
// Questão 8

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

function mediaPonderadaSimplesTradicional(n1, n2){
    return ((n1 * 4) + (n2 * 6)) / 10;
};

let mediaPonderadaSimplesAnonima = function (n1, n2){
    return ((n1 * 4) + (n2 * 6)) / 10;
};

let mediaPonderadaSimplesArrow = (n1, n2) => ((n1 * 4) + (n2 * 6)) / 10;

console.log(`(Tradicional)\nA média pondera entre os números digitados é: ${mediaPonderadaSimplesTradicional(nota1, nota2)}`);
console.log(`(Anônima)\nA média pondera entre os números digitados é: ${mediaPonderadaSimplesAnonima(nota1, nota2)}`);
console.log(`(Arrow)\nA média pondera entre os números digitados é: ${mediaPonderadaSimplesArrow(nota1, nota2)}`);

*/

/*
//Questão 9

let nomeProduto = prompt("Digite o nome do produto:");
let precoCustoProduto = parseFloat(prompt(`Digite o preço de custo do produto ${nomeProduto}`));

function calcDePrecoVendaTradicional(custo){
    return custo + (custo * 0.35);
};

let calcDePrecoVendaAnonima = function (custo){
    return custo + (custo * 0.35);
};

let calcDePrecoVendaArrow = custo => custo + (custo * 0.35);

console.log(`(Tradicional)\nO preço da venda final do produto ${nomeProduto} é: ${calcDePrecoVendaTradicional(precoCustoProduto).toFixed(2)}`);
console.log(`(Anônima)\nO preço da venda final do produto ${nomeProduto} é: ${calcDePrecoVendaAnonima(precoCustoProduto).toFixed(2)}`);
console.log(`(Arrow)\nO preço da venda final do produto ${nomeProduto} é: ${calcDePrecoVendaArrow(precoCustoProduto).toFixed(2)}`);

*/

/*
//Questão 10
let qtdDias = parseInt(prompt("Digite a quantidade de dias que quer transformar em horas:"));

function tranformarDiasEmHorasTradicional(dias){
    return dias * 24;
};

let tranformarDiasEmHorasAnonima = function (dias){
    return dias * 24;
};

let tranformarDiasEmHorasArrow = dias => dias * 24;

console.log(`(Tradicional)\n${qtdDias} dias equivalem a ${tranformarDiasEmHorasTradicional(qtdDias)}`);
console.log(`(Anônima)\n${qtdDias} dias equivalem a ${tranformarDiasEmHorasAnonima(qtdDias)}`);
console.log(`(Arrow)\n${qtdDias} dias equivalem a ${tranformarDiasEmHorasArrow(qtdDias)}`);

*/