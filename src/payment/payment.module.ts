import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';

@Module({
  controllers: [PaymentController],
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentService]
})
export class PaymentModule {}
