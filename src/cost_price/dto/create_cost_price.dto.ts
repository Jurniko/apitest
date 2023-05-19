import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { Double } from "typeorm"

export class CreateCostPriceDto{

    @IsNotEmpty({message:"Se debe referenciar con el ID del costo."})
    @IsNumber({},{message:"El ID de cost es de tipo Int."})
    cost: number

    @IsNotEmpty({message:"Es necesario que tenga un Valor de costo."})
    @IsNumber({},{message:"EL valor del costo debe ser un número entero o decimal."})
    price: number

    @IsNotEmpty({message:"Es necesario indicar el desde que Año comenzará a ejecutarse el cobro."})
    @MinLength(4,{message:"El año debe tener 4 digitos."})
    @MaxLength(4,{message:"El año debe tener 4 digitos."})
    fromYear: string

    @IsNotEmpty({message:"Es necesario indicar el desde que Mes comenzará a ejecutarse el cobro."})
    @MinLength(2,{message:"El mes debe tener 2 digitos."})
    @MaxLength(2,{message:"El mes debe tener 2 digitos."})
    fromMonth: string

}