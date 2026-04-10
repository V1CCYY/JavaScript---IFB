const funcionarios = require("./dados");

function calculoINSS(salarioBruto){
    const calcINSS = ((salarioBruto * 11) / 100);
    return calcINSS;
};

function calculoFGTS(salarioBruto){
    const calcFGTS = ((salarioBruto * 8) / 100);
    return calcFGTS;
};

function calculoDecimoTerceiroSalario(salarioBruto){
    const calcDecimoTerceiroSalario = ((salarioBruto * 50) / 100);
    return calcDecimoTerceiroSalario;
};

function salarioLiquido(salarioBruto){
    const resultadoSalarioLiquido = salarioBruto - calculoINSS(salarioBruto);
    return resultadoSalarioLiquido;
};

function processar(funcionarios) {
    return funcionarios.map(f => ({
        funcionario: f.nome,
        salarioBruto: f.salarioBruto,
        inss: calculoINSS(f.salarioBruto),
        fgts: calculoFGTS(f.salarioBruto),
        decimoTerceiro: calculoDecimoTerceiroSalario(f.salarioBruto),
        salarioLiquido: salarioLiquido(f.salarioBruto)
    }));
};

module.exports = processar;