import autores from "../models/Autor.js";

class AutoresController {
    static listarAutores = (request, response) => {
        autores.find((error, autores)=>{
            response.status(200).json(autores);
        });
    }

    static listarAutorPorId = (request, response) => {
        const id = request.params.id;

        autores.findById(id, (error, autores) => {
            if (error) {
                response.status(400).send({message: `${error.message} - Id do autor não localizado.`})
            } else {
                response.status(200).send(autores);
            }
        });
    }

    static cadastrarAutor = (request, response) => {
        let autor = new autores(request.body);

        autor.save((error) => {
            if (error) {
                response.status(500).send({
                    message: `${error.message} - Falha ao cadastrar o autor.`
                });
            } else {
                response.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (request, response) => {
        const id = request.params.id;

        autores.findByIdAndUpdate(id, {$set: request.body}, (error) => {
            if (!error){
                response.status(200).send({message: 'Autor atualizado com sucesso!'});
            } else {
                response.status(500).send({message: error.message});
            }
        });
    }

    static excluirAutor = (request, response) => {
        const id = request.params.id;

        autores.findByIdAndDelete(id, (error) => {
            if (!error) {
                response.status(200).send({message: "Autor removido com sucesso!"})
            } else {
                response.status(500).send({message: error.message});
            }
        });
    }
}

export default AutoresController;