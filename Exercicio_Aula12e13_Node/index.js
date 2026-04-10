const listaFuncionario = require('./dados');
const calculosDosSalarios = require('./calculos');
const exportarSaidaTXT = require('./formatador');

const resultadoFinal = calculosDosSalarios(listaFuncionario);

exportarSaidaTXT(resultadoFinal);