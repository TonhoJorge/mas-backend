import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from  'typeorm'
import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid()
        }

    }

    @PrimaryColumn()
    readonly id: string

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    course_unit: CourseUnit

    @Column()
    name: string;

    @Column()
    activy_date: string;

    @Column()
    course_unit_id: string; 

    @CreateDateColumn()
    created_at: Date;
}

export {Activy}