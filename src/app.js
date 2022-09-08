import express from 'express';

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Aneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get('/', (request, response) => {
    response.status(200).send('Curso de Node');
})

app.get('/livros', (request, response) => {
    response.status(200).json(livros);
})

app.get('/livros/:id', (request, response) => {
    let index = buscaLivro(request.params.id);
    response.json(livros[index]);
});

app.post('/livros', (request, response) => {
    livros.push(request.body);
    response.status(201).send('Livro cadastrado com sucesso!');
})

app.put('/livros/:id', (request, response) => {
    let index = buscaLivro(request.params.id);
    livros[index].titulo = request.body.titulo;
    response.json(livros);
});

app.delete('/livros/:id', (request, response) => {
    let {id} = request.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    response.send(`Livro ${id} removido com sucesso!`);
});


function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id );
}

export default app