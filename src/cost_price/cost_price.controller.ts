import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CostPriceService } from './cost_price.service';
import { CreateCostPriceDto } from './dto/create_cost_price.dto';
import { UpdateCostPriceDto } from './dto/update_cost_price_dto.dto';

@Controller('cost-price')
export class CostPriceController {
  constructor(private costPriceService: CostPriceService) {}

  @Get()
  async getAll() {
    return await this.costPriceService.findAll();
  }

  @Post()
  async create(@Body() costPrice: CreateCostPriceDto) {
    return await this.costPriceService.create(costPrice);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.costPriceService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() costPrice: UpdateCostPriceDto) {
    return await this.costPriceService.update(id, costPrice);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.costPriceService.remove(id);
  }
}
