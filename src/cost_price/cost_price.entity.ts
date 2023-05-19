import { Cost } from 'src/cost/cost.entity';
import { Penalty } from 'src/penalty/penalty.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CostPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cost, (cost) => cost.id, { onDelete: 'CASCADE' })
  cost: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: false, length: 4 })
  fromYear: string;

  @Column({ nullable: false, length: 2 })
  fromMonth: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Penalty, (penalty) => penalty.costPrice)
  penalty?: Penalty[];
}
