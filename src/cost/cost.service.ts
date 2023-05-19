import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cost } from './cost.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateCostDto } from './dto/create_cost.dto';
import { UpdateCostDto } from './dto/update_cost.dto';

@Injectable()
export class CostService {
    constructor(@InjectRepository(Cost) private costRepository: Repository<Cost>) { }

    findAllNotMain(): Promise<Cost[]> {
        return this.costRepository.find({ where: { isMain: false } , order: {description: 'ASC'}})
    }
    
    findOnlyMain(): Promise<Cost> {
        return this.costRepository.findOne({ where: { isMain: true } })
    }

    findOne(id:number)
    :Promise<Cost>{
        return this.costRepository.findOneBy({id})
    }

    create(cost:CreateCostDto): Promise<Cost>{
        return this.costRepository.save(cost)
    }

    update(id:number, cost:UpdateCostDto):Promise<UpdateResult>{
        return this.costRepository.update({id},cost)
    }

    remove(id:number)
    :Promise<UpdateResult>{
        return this.costRepository.update({id},{isActive:false})
    }


}
