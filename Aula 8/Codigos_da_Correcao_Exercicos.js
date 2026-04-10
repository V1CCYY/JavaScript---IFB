// ==================================================
// 1. Calculadora de Reajuste Salarial
// ==================================================

/*

let salBase = parseFloat(prompt("1. Salário atual: "));
let porc = parseFloat(prompt("1. Porcentagem de aumento: "));

// Tradiconal
function reajusteTradicional(s, p){
    return s + (s * p / 100);
};

// Anônima
const reajusteAnonima = function (s, p){
    return s + (s * p / 100);
};

// Arrow
const reajusteArrow = (s, p) => s (s + (s * p / 100));

alert(`Novo salário: R$ ${reajusteTradicional(salBase, porc).toFixed(2)}`);

*/

// ==================================================
// 2. Conversor de Velocidade (Km/h para m/s)
// ==================================================

/*

let vKmh = parseFloat(prompt("2. Velocidade em Km/h: "));

function converterTradicional(v){
    return v / 3.6;
};

const converterAnonima = function (v){
    return v / 3.6;
};

const converterArrow = v => v / 3.6;

alert(`Resultado: ${converterArrow(vKmh).toFixed(2)} m/s`);

*/

/*

// ==================================================
// 3. Classificador de Faixa Etária
// ==================================================

let idadeF = parseInt(prompt("3. Digite a idade: "));

function classificarTradicional(i){
    if(i <= 17) return "Jovem";
    else if (i <= 59) return "Adulto";
    else return "Idoso";
};

const classificarAnonima = function (i){
    if(i <= 17) return "Jovem";
    else if (i <= 59) return "Adulto";
    else return "Idoso";
};

const classificarArrow = i => i <= 17 ? "Jovem" : i <= 59 ? "Adulto" : "Idoso";

alert(`Classificação: ${classificarAnonima(idadeF)}`);

*/

/*
// ==================================================
// 4. Validador de Login Acadêmico
// ==================================================

let userLogin = prompt("4. Nome de usuário:");

function validarTradicional(u){
    return u === "admin";
}

const validarAnonima = function (u){
    return u === "admin";
}

const validarArrow = u => u === "admin";

alert(validarAnonima(userLogin) ? "Acesso Permitido" : "Acesso Negado");

*/

/*
// ==================================================
// 5. Cálculo de Área de Terreno
// ==================================================

let largura = parseFloat(prompt("5. Largura do Terreno:"));
let comprimento = parseFloat(prompt("5. Comprimento do Terreno:"));

function areaTradicional(l, c){
    return l * c;
}

const areaAnonima = function (l, c){
    return l * c;
}

const areaArrow = (l, c) => l * c;

alert(`A área total do terreno é de ${areaArrow(largura, comprimento)} metros quadrados`);

*/

/*
// ==================================================
// 6. Transformador de Texto (GRITO)
// ==================================================

let fraseOriginal = prompt("6. Digite uma frase:");

function gritarTradicional(t){
    return t.toUpperCase() + "!!!";
}

const gritarAnonima = function (t){
    return t.toUpperCase() + "!!!";
}

const gritarArrow = t => t.toUpperCase() + "!!!";

alert(gritarTradicional(fraseOriginal));

*/

/*

// ==================================================
// 7. Verificador de Múltiplo de 5
// ==================================================

let numM = parseInt(prompt("7. Digite um número inteiro:"));

function isMultiploTradicional(n) {
    return n % 5 === 0;
}

const isMultiploAnonima = function (n) {
    return n % 5 === 0;
}

const isMultiploArrow = n => n % 5 === 0;

alert(`É múltiplo de 5? ${isMultiploTradicional(numM)}`);

*/

/*
// ==================================================
// 8. Média Ponderada Simples
// ==================================================

let notaA = parseFloat(prompt("8. Nota 1 (Peso 4): "));
let notaB = parseFloat(prompt("8. Nota 2 (Peso 6): "));

function mediaTradicional(n1, n2) {
    return ((n1 * 4) + (n2 * 6)) / 10;
}

const mediaAnonima = function (n1, n2) {
    return ((n1 * 4) + (n2 * 6)) / 10;
}

const mediaArrow = (n1, n2) => ((n1 * 4) + (n2 * 6)) / 10;

alert(`Média Final: ${mediaAnonima(notaA, notaB)}`);

*/

/*

// ==================================================
// 9. Gerador de Preço de Venda
// ==================================================

let precoCusto = parseFloat(prompt("9. Preço de custo:"));

function vendaTradicional(c) {
    return c * 1.35;
}

const vendaAnonima = function (c) {
    return c * 1.35;
}

const vendaArrow = c => c * 1.35;

alert(`Preço de venda final: R$ ${vendaArrow(precoCusto).toFixed(2)}`);

*/

/*
// ==================================================
// 10. Verificador de Dias em Horas
// ==================================================

let numDias = parseInt(prompt("10. Quantidade de dias: "));

function diasEmHorasTradicional (d) {
    return d * 24;
};

const diasEmHorasAnonima = function (d) {
    return d * 24;
};

const diasEmHorasArrow = d => d * 24;

alert(`${numDias} dias equivalem a ${diasEmHorasAnonima(numDias)}`);

*/