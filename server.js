const http = require("http")
const port = 3000;

const rotas = {
	'/': 'Curso de Node',
	'/livros': 'Entrei na pag de livros',
	'/autores': 'Listagem de autores',
	'/editora': 'Listagem de editoras'
};

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(rotas[request.url]);
});

server.listen(port, () => {
	console.log(`Servidor escutando em http://localhost:${port}`);
});
