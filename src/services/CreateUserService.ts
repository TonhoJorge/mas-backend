import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../model/User'
import { response } from 'express';

interface UserData {
    name:string;
    email:string;
    password:string;
}

class CreatUserService {

    public async execute({name, email, password} : UserData){

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({email, password});

        if(checkUserExists){
            throw new Error('Email adrres alread exist');
            }
            
            const hashedPasswords = await hash(password, 8);

            const user = {
                name,
                email, 
                password: hashedPasswords
            }

            await usersRepository.save(user);

            return response.json(user);
    }

}

export {CreatUserService}