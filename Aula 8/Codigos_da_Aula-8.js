/*

// Estrutura Básica
// Aqui estamos apenas criando a função, porém sem nenhuma instância dela.

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
};

const p1 = new Pessoa("Maria", 19);
const p2 = new Pessoa("Victhor", 19);

p1.saudar();
p2.saudar();

*/

/*

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
};

const p1 = new Pessoa("Arthur", 19);
const p2 = new Pessoa("Victhor", 19);
const p3 = new Pessoa("Iohanna", 21);
const p4 = new Pessoa("Julio", 18);
const p5 = new Pessoa("João", 18);
const p6 = new Pessoa("Luis", 20);
const p7 = new Pessoa("Thabita", 20);
const p8 = new Pessoa("Gabriel", 21);
const p9 = new Pessoa("Maria", 22);

p1.saudar();
p2.saudar();
p3.saudar();
p4.saudar();
p5.saudar();
p6.saudar();
p7.saudar();
p8.saudar();
p9.saudar();

*/

/*
function novoPessoa(nome, idade) {
    const obj = {};
    obj.nome = nome;
    obj.idade = idade;
    obj.saudar() = function() {
        console.log(`Olá, meu nome é ${obj.nome} e tenho ${obj.idade} anos.`);
    };
    return obj;
}

const p1 = new novoPessoa("Ana", 25);
const p2 = new novoPessoa("Guilherme", 34);

p1.saudar();
p2.saudar();

*/

/*

// 1. FUNÇÃO CONSTRUTORA (O Nosso Molde)

function Funcionario(cpf, nome, salario){
    this.cpf = cpf;
    this.nome = nome;
    this.salario = salario;

    //Método ajustado para calcular a parcela de 1/12 do 13°
    this.calcularDecimoTerceiro = function() {
        const parcela = this.salario / 12;
        return parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}); // Converte o valor para REAL
    };

    //Método para exibir os dados formatados
    this.gerarRelatorio = function(){
        console.log(`Funcionário: ${this.nome} | CPF: ${this.cpf} | Parcela 13°: ${this.calcularDecimoTerceiro()}`);
    };
}

// 2. SIMULAÇÃO DE DADOS DO BANCO (Array de Objetos Literais)

const dadosDoBanco = [
    { id: 1, cpf: "111.111.111-11", nome: "Ana Silva", sal: 3500 },
    { id: 2, cpf: "222.222.222-22", nome: "Bruno Costa", sal: 4200 },
    { id: 3, cpf: "333.333.333-33", nome: "Carla Souza", sal: 2800 },
    { id: 4, cpf: "444.444.444-44", nome: "Diego Lima", sal: 5000 },
    { id: 5, cpf: "555.555.555-55", nome: "Elena Rocha", sal: 3100 },
    { id: 6, cpf: "666.666.666-66", nome: "Fabio Mello", sal: 4500 },
    { id: 7, cpf: "777.777.777-77", nome: "Gisele Reis", sal: 3900 },
    { id: 8, cpf: "888.888.888-88", nome: "Heitor Vaz", sal: 6000 },
    { id: 9, cpf: "999.999.999-99", nome: "Iara Luz", sal: 2700 },
    { id: 10, cpf: "101.101.101-10", nome: "João Neto", sal: 3300 },
];

// 3. PROCESSAMENTO (Transformando dados crus em Objetos da Construtora)
const funcionarioProcessados = dadosDoBanco.map(registro => {
    // Para cada registro do banco, criamos uma NOVA instância de Funcionário
    return new Funcionario(registro.cpf, registro.nome, registro.sal);
});

// 4. EXIBIÇÃO DOS RESULTADOS
console.log("--- RELATÓRIO DE PAGAMENTO ---");
funcionarioProcessados.forEach(f => f.gerarRelatorio());

*/