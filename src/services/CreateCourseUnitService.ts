import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {CourseUnit} from '../model/CourseUnit'
import { response } from 'express';

interface CourseUnitData {
    name:string;
    description: string;
    createdAt: Date;
}

class CreatCourseUnitService {

    public async execute({name, description, createdAt} : CourseUnitData){

        const courseunitRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await courseunitRepository.findOne({name});

        if(checkCourseUnitExists){
            throw new Error('Course adrres alread exist');
            }
            
            const hashedCourseUnit = await hash(name, description);

            const courseunit = {
                name, description
            }

            await courseunitRepository.save(courseunit);

            return response.json(courseunit);
    }

}

export {CreatCourseUnitService}