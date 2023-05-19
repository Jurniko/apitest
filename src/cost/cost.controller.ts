import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CostService } from './cost.service';
import { UpdateCostDto } from './dto/update_cost.dto';
import { CreateCostDto } from './dto/create_cost.dto';

@Controller('cost')
export class CostController {
    constructor(private costService:CostService)
    {}

    @Get()
    async getAll(){
        return await this.costService.findAllNotMain()
    }

    @Get('main')
    async getOnlyMain(){
        return await this.costService.findOnlyMain()
    }

    @Get(':id')
    async getOne(@Param('id') id:number){
        return await this.costService.findOne(id)
    }

    @Post()
    async create(@Body() cost:CreateCostDto){
        return await this.costService.create(cost)
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() cost:UpdateCostDto){
        return await this.costService.update(id,cost)
    }

    @Delete(':id')
    async remove(@Param('id') id:number)
    {
        return await this.costService.remove(id)
    }

}
