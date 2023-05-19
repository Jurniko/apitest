import { IsNotEmpty, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator"

export class CreatePaymentDto{

    @IsNotEmpty({message:"Se debe referenciar con el ID de la persona."})
    @IsNumber({},{message:"el ID de person es de tipo int."})
    person:number

    @IsNotEmpty({message:"Es necesario indicar el Año que realizó el cobro."})
    @MinLength(4,{message:"El año debe tener 4 digitos."})
    @MaxLength(4,{message:"El año debe tener 4 digitos."})
    year:string

    @IsNotEmpty({message:"Es necesario indicar el Mes que realizó el cobro."})
    @MinLength(2,{message:"El mes debe tener 2 digitos."})
    @MaxLength(2,{message:"El mes debe tener 2 digitos."})
    month:string

    @IsOptional()
    isPaid: boolean

    @IsNotEmpty({message:"Es necesario indicar la fecha que se realizó el cobro."})
    paymentDate:Date
}