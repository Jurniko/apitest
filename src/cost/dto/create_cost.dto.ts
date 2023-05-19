import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator"

export class CreateCostDto{

    @IsNotEmpty({message:"Es necesario que tenga una descripción."})
    description:string

    @IsOptional()
    @IsBoolean()
    isActive:boolean

    @IsOptional()
    @IsBoolean()
    isMain:boolean

}