import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {Activy} from '../model/Activy'
import { response } from 'express';

interface ActivyData {
    name:string;
    activy_date: string;
    course_unit_id: string;
    createdAt: Date;
}

class CreatActivyService {

    public async execute({name, activy_date} : ActivyData){

        const activyRepository = getRepository(Activy);

        const checkActivyExists = await activyRepository.findOne({name});

        if(checkActivyExists){
            throw new Error('Activy adrres alread exist');
            }
            
            const hashedActivy = await hash(name, activy_date);

            const courseunit = {
                name, activy_date
            }

            await activyRepository.save(courseunit);

            return response.json(courseunit);
    }

}

export {CreatActivyService}