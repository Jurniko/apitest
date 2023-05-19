import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CostPrice } from './cost_price.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateCostPriceDto } from './dto/create_cost_price.dto';
import { UpdateCostPriceDto } from './dto/update_cost_price_dto.dto';

@Injectable()
export class CostPriceService {
  constructor(
    @InjectRepository(CostPrice)
    private costPriceRepository: Repository<CostPrice>,
  ) {}

  findAll(): Promise<CostPrice[]> {
    return this.costPriceRepository.find({ relations: ['cost'] });
  }

  findOne(id: number): Promise<CostPrice> {
    return this.costPriceRepository.findOneBy({ id });
  }

  create(CostPrice: CreateCostPriceDto): Promise<CostPrice> {
    return this.costPriceRepository.save(CostPrice);
  }

  update(id: number, CostPrice: UpdateCostPriceDto): Promise<UpdateResult> {
    return this.costPriceRepository.update({ id }, CostPrice);
  }

  remove(id: number): Promise<any> {
    return this.costPriceRepository
      .delete({ id })
      .then((e) => {
        return { status: true };
      })

      .catch((e) => {
        return { status: false };
      });
  }
}
