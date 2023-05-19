import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePaymentDto } from './dto/create_payment.dto';
import { UpdatePaymentDto } from './dto/update_payment.dto';

@Injectable()
export class PaymentService {
     constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>
    ) { }

    findAll(): Promise<Payment[]> {
        return this.paymentRepository.find()
    }

    findOne(id: number): Promise<Payment> {
        return this.paymentRepository.findOneBy({ id })
    }

    create(Payment:CreatePaymentDto)
    :Promise<Payment>{
        return this.paymentRepository.save(Payment)
    }

    update(id: number, Payment: UpdatePaymentDto)
        : Promise<UpdateResult> {
        return this.paymentRepository.update({ id }, Payment)
    }

    remove(id: number)
        : any {
        try{
            this.paymentRepository.delete({ id })
            return { "status": 'ok' }
        }
        catch{
            throw new HttpException("No se pudo eliminar el registro",HttpStatus.BAD_REQUEST)
        }
    }

}
