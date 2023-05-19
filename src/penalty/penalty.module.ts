import { Module } from '@nestjs/common';
import { PenaltyController } from './penalty.controller';
import { PenaltyService } from './penalty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Penalty } from './penalty.entity';

@Module({
  controllers: [PenaltyController],
  imports: [TypeOrmModule.forFeature([Penalty])],
  providers: [PenaltyService]
})
export class PenaltyModule {}
