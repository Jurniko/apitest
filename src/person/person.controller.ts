import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create_person.dto';
import { UpdatePersonDto } from './dto/update_person.dto';

@Controller('person')
export class PersonController {
    constructor(private personService:PersonService)
    {}

    @Get()
    async getAll(){
        return await this.personService.findAll()
    }
   
    @Post()
    async create(@Body() person:CreatePersonDto){
        return await this.personService.create(person)
    }
    
    @Get(':id')
    async getOne(@Param('id') id:number){
        return await this.personService.findOne(id)
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() person:UpdatePersonDto){
        return await this.personService.update(id,person)
    }

    @Delete(':id')
    async remove(@Param('id') id:number)
    {
        return await this.personService.remove(id)
    }
}
