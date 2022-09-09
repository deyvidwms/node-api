import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (request, response) => {
        livros.find()
            .populate('autor')
            .exec((error, livros)=>{
                response.status(200).json(livros);
            });
    }

    static listarLivroPorId = (request, response) => {
        const id = request.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((error, livros) => {
                if (error) {
                    response.status(400).send({message: `${error.message} - Id do livro não localizado.`})
                } else {
                    response.status(200).send(livros);
                }
            });
    }

    static cadastrarLivro = (request, response) => {
        let livro = new livros(request.body);

        livro.save((error) => {
            if (error) {
                response.status(500).send({
                    message: `${error.message} - Falha ao cadastrar o livro.`
                });
            } else {
                response.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (request, response) => {
        const id = request.params.id;

        livros.findByIdAndUpdate(id, {$set: request.body}, (error) => {
            if (!error){
                response.status(200).send({message: 'Livro atualizado com sucesso!'});
            } else {
                response.status(500).send({message: error.message});
            }
        });
    }

    static excluirLivro = (request, response) => {
        const id = request.params.id;

        livros.findByIdAndDelete(id, (error) => {
            if (!error) {
                response.status(200).send({message: "Livro removido com sucesso!"})
            } else {
                response.status(500).send({message: error.message});
            }
        });
    }

    static listarLivroPorEditora = (request, response) => {
        const editora = req.query.editora;

        livro.find({'editora': editora}, {}, (error, livros) => {
            response.status(200).send(livros);
        });
    }

}

export default LivroController;