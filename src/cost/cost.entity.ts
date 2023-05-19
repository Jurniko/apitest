import { CostPrice } from "src/cost_price/cost_price.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cost{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar', nullable:false, length:120})
    description:string

    @Column({type:'bool', default:true})
    isActive:boolean

    @Column({type:'bool', default:false})
    isMain:boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt?: Date

    @OneToMany(()=>CostPrice,(costPrice)=>costPrice.cost)
    costPrice?: CostPrice[]

}