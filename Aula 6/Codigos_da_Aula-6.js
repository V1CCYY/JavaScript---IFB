/*

function somar(a, b){
    return a + b;
};

valor1 = parseInt(prompt("Digite o número 1:"));
valor2 = parseInt(prompt("Digite o valor 2:"));

let resultado = somar(valor1, valor2);
console.log(resultado);

*/

/*

let multiplicar = function (x, y){
    return x * y;
};

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

console.log(multiplicar(valor1, valor2));

*/

/*
const dividir = (a, b) => a / b;

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

console.log(dividir(valor1, valor2));

*/

/*

const saudacao = nome =>{
    let mensagem = `Olá, ${nome}`;
    return mensagem;
};

const nomeAu = prompt("Digite o nome:");

console.log(saudacao(nomeAu));

*/

/*

const pessoa = {
    nome: "Victhor",
    idade: 19,
    casado: false,
    saudar: function(){
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.casado);


pessoa.saudar();

*/

/*
const exemplo = {
    texto: "Olá",
    numero: 10,
    ativo: true,
    lista: [1, 2, 3],
    objetoInterno: { x: 1 },

    funcao: function(){
        console.log("Executando função");
    }
};

console.log("texto: ", exemplo.texto);
console.log("número: ", exemplo.numero);
console.log("ativo: ", exemplo.ativo);
console.log("lista: ", exemplo.lista);
console.log("objetoInterno: ", exemplo.objetoInterno);
console.log("função: ", "função definida");

*/

/*

const usuario = {
    // propriedades básicas do usuário
    nome: "Victhor Gladistone",
    email: "victhor245@gmail.com",
    idade: 19,
    estaAtivo: true,

    //Objeto aninhado para o endereço

    endereco: {
        rua: "Rua dos Ypes",
        numero: "305",
        bairro: "Riacho Fundo 1",
        cidade: "Brasília",
        estado: "Destrito Federal",
        cep: "71888-901",
    },

    //Método do usuário
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    },

    //Método que usa o objeto aninhado
    obterEnderecoCompleto: function() {
        //Usamos o 'this.endereco' para acessar o objeto aninhado
        const end = this.endereco;
        return `${end.rua}, ${end.numero} - ${end.bairro}, ${end.cidade} - ${end.estado}, ${end.cep}`;
    }
};

// Acessando a situação criada
usuario.saudar();

// Acessando os objetos:

console.log(usuario.nome);
console.log(usuario.endereco.cidade);
console.log(usuario.endereco.cep);

// chamando o método que usa o endereço

console.log(usuario.obterEnderecoCompleto());

*/

/*

const pessoa = {
    nome: "Victhor",
    idade: 19,
    cidade: "Riacho Fundo 2",
    profissao: "Estudante de Engenharia"
};

console.log("--- Usando for...in ---");
for(let chave in pessoa) {
    //'chave' vai conhecer o nome da propriedade (ex: "nome", "idade")
    console.log(`chave: ${chave}, \nValor: ${pessoa[chave]}`);
};

*/

/*

const pessoaObjetoTradicional = {
    nome: "Victhor",
    idade: 19,
    casado: false,
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(pessoaObjetoTradicional.nome);
pessoaObjetoTradicional.saudar();

const pessoaNewObject = new Object();
pessoaNewObject.nome = "Júlio";
pessoaNewObject.idade = 20;
pessoaNewObject.casado = false;

console.log(pessoaNewObject.idade);

*/