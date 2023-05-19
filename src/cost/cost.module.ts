import { Module } from '@nestjs/common';
import { CostController } from './cost.controller';
import { CostService } from './cost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cost } from './cost.entity';

@Module({
  controllers: [CostController],
  imports: [TypeOrmModule.forFeature([Cost])],
  providers: [CostService]
})
export class CostModule {}
