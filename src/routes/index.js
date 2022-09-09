import express, { request } from 'express';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((request, response) => {
        response.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes;