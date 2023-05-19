import { Person } from "src/person/person.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Payment{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Person,(person)=>person.payment)
    person:number

    @Column({nullable:false, length:4})
    year:string

    @Column({nullable:false, length:2})
    month:string

    @Column({default: true})
    isPaid: boolean

    @Column()
    paymentDate:Date
    
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt?: Date
}