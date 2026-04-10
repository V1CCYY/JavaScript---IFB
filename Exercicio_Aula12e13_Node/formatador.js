const fs = require('fs');

function exportarParaTXT(funcionariosFormatados){
    let conteudo = "RELATÓRIO DE PRÉVIA SALARIAL\n";
    conteudo += "==========================\n\n";

    funcionariosFormatados.forEach(a => {
        conteudo += `\nFuncionario: ${a.funcionario} 
        \nSalário Bruto: ${a.salarioBruto} 
        \n(-) INSS (11%): ${a.inss} 
        \n(+) FGTS (8%): ${a.fgts}
        \n(i) 1ª Parcela 13°: R$ ${a.decimoTerceiro} 
        \n(=) Salário Líquido: R$ ${a.salarioLiquido}
        \n==========================\n`;
    });

    fs.writeFileSync('folha_pagamento.txt', conteudo);
    console.log("✅ Arquivo 'folha_pagamento.txt' gerado com sucesso!");
};

module.exports = exportarParaTXT;