import {Request, Response} from 'express';
import { CreatUserService } from '../services/CreateUserService';

class UserController {
    async create(request: Request, response: Response) {
        const userData = request.body

        const createUser = new CreatUserService()

        const user = await createUser.execute(userData);

        return response.json(user);

    }
}

export {UserController};