const fs = require('fs');
const { saudacao, formatarTexto } = require('./mensagem');

const resultado = formatarTexto(saudacao);
console.log(resultado);

fs.writeFileSync('aula.txt', resultado);
console.log("Arquivo 'aula.txt' criado com sucesso!");