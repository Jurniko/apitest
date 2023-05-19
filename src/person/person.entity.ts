import { Payment } from "src/payment/payment.entity";
import { Penalty } from "src/penalty/penalty.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length:8, unique: true})
    dni: string

    @Column({type:'varchar'})
    firstName: string

    @Column({type: 'varchar'})
    lastName: string

    @Column({type: 'varchar', nullable:true})
    email: string

    @Column({type: 'varchar', nullable: true})
    address: string

    @Column({type: 'varchar', length:9, nullable: true})
    phoneNumber: string

    @Column({type: 'bool', default:true})
    isActive: boolean

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @OneToMany(()=>Penalty, (penalty)=>penalty.person)
    penalty?:Penalty[]

    @OneToMany(()=>Payment, (payment)=>payment.person)
    payment?:Payment[]

}