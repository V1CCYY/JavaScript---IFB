const listaOriginal = require('./dados');
const processar = require('./processador');
const exportar = require('./mensagem');

const resultadoFinal = processar(listaOriginal);

exportar(resultadoFinal);