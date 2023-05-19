import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create_payment.dto';
import { UpdatePaymentDto } from './dto/update_payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService:PaymentService)
    {}

    @Get()
    async getAll(){
        return await this.paymentService.findAll()
    }
   
    @Post()
    async create(@Body() payment:CreatePaymentDto){
        return await this.paymentService.create(payment)
    }
    
    @Get(':id')
    async getOne(@Param('id') id:number){
        return await this.paymentService.findOne(id)
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() payment:UpdatePaymentDto){
        return await this.paymentService.update(id,payment)
    }

    @Delete(':id')
    async remove(@Param('id') id:number)
    {
        return await this.paymentService.remove(id)
    }
}
