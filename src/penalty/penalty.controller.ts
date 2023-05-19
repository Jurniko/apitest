import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PenaltyService } from './penalty.service';
import { CreatePenaltyDto } from './dto/create_penalty.dto';
import { UpdatePenaltyDto } from './dto/update_penalty.dto';

@Controller('penalty')
export class PenaltyController {
    constructor(private penaltyService:PenaltyService)
    {}

    @Get()
    async getAll(){
        return await this.penaltyService.findAll()
    }
   
    @Post()
    async create(@Body() penalty:CreatePenaltyDto){
        return await this.penaltyService.create(penalty)
    }
    
    @Get(':id')
    async getOne(@Param('id') id:number){
        return await this.penaltyService.findOne(id)
    }

    @Delete(':id')
    async remove(@Param('id') id:number)
    {
        return await this.penaltyService.remove(id)
    }

}
