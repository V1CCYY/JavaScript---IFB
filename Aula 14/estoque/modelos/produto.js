const db = require('../database');

const ProdutoModulo = {
    listar: async () => {
        const [linhas] = await db.query('SELECT * FROM produtos');
        return linhas;
    },

    inserir: async (nome, qtd, preco) => {
        await db.query('INSERT INTO produtos (nome, qtd, preco) VALUE (?, ?, ?)', [nome, qtd, preco]);
    },

    excluir: async (id) => {
        await db.query('DELETE FROM produtos WHERE id = ?', [id]);
    }
};

module.exports = ProdutoModulo;