const alunos = require("./dados");

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function processarAlunos(listaAlunos) {
    return listaAlunos.map(aluno => {
        const media = calcularMedia(aluno.notas);
        return {
            nome: aluno.nome,
            media: media.toFixed(1),
            status: media >= 6 ? "APROVADO" : "REPROVADO"
        };
    });
}

module.exports = processarAlunos;