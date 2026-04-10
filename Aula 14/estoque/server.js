const http = require('http');
const fs = require('fs');
const path = require('path');
const Produto = require('./modelos/produto');

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('./public/index.html'));
    }
    else if (url === '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('./public/style.css'));
    }
    else if (url === '/api/produtos' && method === 'GET') {
        const lista = await Produto.listar();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(lista));
    }
    else if (url === '/api/produtos' && method === 'POST') {
        let corpo = '';
        req.on('data', chunk => { corpo += chunk.toString(); });
        req.on('end', async () => {
            const { nome, qtd, preco } = JSON.parse(corpo);
            await Produto.inserir(nome, qtd, preco);
            res.writeHead(201);
            res.end();
        });
    }
    else if (url.startsWith('/api/produtos') && method === 'DELETE') {
        const id = new URL(url, `http://${req.headers.host}`).searchParams.get('id');
        await Produto.excluir(id);
        res.writeHead(204);
        res.end();
    }
});

server.listen(3000, () => console.log("🚀 Servidor no ar: http:/localhost:3000"));