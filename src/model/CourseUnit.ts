import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from  'typeorm'
import {v4 as uuid} from 'uuid';
import { Activy} from './Activy';


class CourseUnit {

    @PrimaryColumn()
    readonly id: string

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[]

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;

}

export {CourseUnit}