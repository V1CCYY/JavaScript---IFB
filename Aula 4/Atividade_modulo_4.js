const alunos = [];

const qtdAlunos = parseInt(prompt("Digite a quantidade de alunos da turma:"));

for(let i = 0; i < qtdAlunos; i++){
    const nome = prompt(`Digite o nome do aluno: ${i = 1}:`);
    const nota1 = parseFloat(prompt(`Digite a nota do 1° Bimestre de ${nome}:`));
    const nota2 = parseFloat(prompt(`Digite a nota do 2° Bimestre de ${nome}:`));
    const nota3 = parseFloat(prompt(`Digite a nota do 3° Bimestre de ${nome}:`));
    const nota4 = parseFloat(prompt(`Digite a nota do 4° Bimestre de ${nome}:`));

    alunos.push({
        nome: nome,
        notas: [nota1, nota2, nota3, nota4]
    });
}

let aprovados = 0;
let reprovados = 0;
let somaMedias = 0;

alunos.forEach(aluno => {
    const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
    const media = somaNotas / aluno.notas.length;
    somaMedias += media;

    console.log(`Aluno: ${aluno.nome} - Média: ${media.toFixed(1)}`);

    if(media >= 6){
        aprovados++;
    } else {
        reprovados++;
    }
});

const mediaGeral = somaMedias / alunos.length;

console.log(`\nTotal de alunos: ${alunos.length}`);
console.log(`Aprovados: ${aprovados}`);
console.log(`Reprovados: ${reprovados}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);