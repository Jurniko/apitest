import { Module } from '@nestjs/common';
import { CostPriceController } from './cost_price.controller';
import { CostPriceService } from './cost_price.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostPrice } from './cost_price.entity';

@Module({
  controllers: [CostPriceController],
  imports: [TypeOrmModule.forFeature([CostPrice])],
  providers: [CostPriceService]
})
export class CostPriceModule {}
