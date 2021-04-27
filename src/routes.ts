import {Request, Response, Router} from 'express';


const routes = Router();

routes.get('/user/:id/', (request: Request, response: Response) => {
    const {id} = request.params;
    response.json({
    userId:id
    })
})

routes.get('/user/', (request: Request, response: Response) => {

    const {nome, idade} = request.query

    response.json({
        nome: nome,
        idade: idade
    })
})

routes.post('/user', (request: Request, response: Response) => {

    const {name, email, password} = request.body

    const user = {
    name,
    email,
    password
    }

    return response.json(user);
    })

export default routes;