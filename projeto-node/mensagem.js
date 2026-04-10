const fs = require('fs');

function exportarParaTXT(alunosProcessados){
    let conteudo = "RELATÓRIO DE NOTAS - IFB\n";
    conteudo += "==========================\n\n";

    alunosProcessados.forEach(a => {
        conteudo += `Aluno: ${a.nome} | Média: ${a.media} | Status: ${a.status}\n`;
    });

    fs.writeFileSync('resultado.txt', conteudo);
    console.log("✅ Arquivo 'resultado.txt' gerado com sucesso!");
}

module.exports = exportarParaTXT;