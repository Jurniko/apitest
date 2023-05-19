import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './core/database/config.db';
import { PersonModule } from './person/person.module';
import { PaymentModule } from './payment/payment.module';
import { CostModule } from './cost/cost.module';
import { PenaltyModule } from './penalty/penalty.module';
import { CostPriceModule } from './cost_price/cost_price.module';

@Module({
  imports: [DatabaseConfig, PersonModule, PaymentModule, CostModule, PenaltyModule, CostPriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
