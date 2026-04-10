const saudacao = "Bem-vindos à aula de Node.js do projeto Guilherme!";

function formatarTexto(texto) {
    return `[LOG]: ${texto.toUpperCase()}`;
};

module.exports = { saudacao, formatarTexto };