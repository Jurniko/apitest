import { IsNotEmpty, IsNumber } from "class-validator"

export class CreatePenaltyDto{

    @IsNotEmpty({message:"Es requerido el ID de la tabla cost_price"})
    @IsNumber({},{message:"El ID de costPrice es de tipo int."})
    costPrice:number

    @IsNotEmpty({message:"Es requerido el ID de la persona"})
    @IsNumber({},{message:"El ID de person es de tipo int."})
    person:number

}