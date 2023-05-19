import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePersonDto } from './dto/create_person.dto';
import { UpdatePersonDto } from './dto/update_person.dto';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>
    ) { }

    findAll(): Promise<Person[]> {
        return this.personRepository.find({order:{id:'DESC'}})
    }

    findOne(id: number): Promise<Person> {
        return this.personRepository.findOneBy({ id })
    }

    create(person:CreatePersonDto)
    :Promise<Person>{
        return this.personRepository.save(person)
    }

    update(id: number, person: UpdatePersonDto)
        : Promise<UpdateResult> {
        return this.personRepository.update({ id }, person)
    }

    remove(id: number)
        : Promise<UpdateResult> {
        return this.personRepository.update({ id }, { isActive: false });
    }


}
