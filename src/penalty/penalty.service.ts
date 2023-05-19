import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Penalty } from './penalty.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePenaltyDto } from './dto/create_penalty.dto';
import { UpdatePenaltyDto } from './dto/update_penalty.dto';

@Injectable()
export class PenaltyService {
    constructor(
        @InjectRepository(Penalty)
        private penaltyRepository: Repository<Penalty>
    ) { }

    findAll(): Promise<Penalty[]> {
        return this.penaltyRepository.find({relations:['person','costPrice']})
    }

    findOne(id: number): Promise<Penalty> {
        return this.penaltyRepository.findOne({ where: {id}})
    }

    create(Penalty:CreatePenaltyDto)
    :Promise<Penalty>{
        return this.penaltyRepository.save(Penalty)
    }
    
    remove(id: number)
        : any {
        try{
            this.penaltyRepository.delete({ id })
            return { "status": 'ok' }
        }
        catch{
            throw new HttpException("No se pudo eliminar el registro",HttpStatus.BAD_REQUEST)
        }
    }
}
