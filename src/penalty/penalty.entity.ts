import { CostPrice } from "src/cost_price/cost_price.entity";
import { Person } from "src/person/person.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Penalty{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>CostPrice,(costPrice)=>costPrice.penalty)
    costPrice:number

    @ManyToOne(()=>Person, (person)=>person.penalty)
    person:number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt?: Date
}