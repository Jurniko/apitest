import { MinLength, MaxLength, IsNotEmpty, IsOptional, IsNumber, Max, Min, IsEmail} from "class-validator"

export class CreatePersonDto{

    @IsNotEmpty({message:"No debe estar vacío el DNI de la persona."})
    @MinLength(8, {message: 'El DNI debe tener minimo 8 digitos.'})
    @MaxLength(8, {message: 'EL DNI debe tener máximo 8 digitos.'})
    dni: string

    @IsNotEmpty({message:"No debe estar vacío el Nombre de la persona."})
    firstName: string

    @IsNotEmpty({message:"No debe estar vacío el Apellido de la persona."})
    lastName: string
    
    @IsOptional()
    @IsEmail({},{message:"Lo ingresado no es un email."})
    email: string

    @IsOptional()
    address: string

    @IsOptional()
    isActive: boolean

    @IsOptional()
    @IsNotEmpty({message:"No debe estar vacío el DNI de la persona."})
    @MinLength(9, {message: 'El N°Cel. debe tener minimo 9 digitos.'})
    @MaxLength(9, {message: 'EL N°Cel. debe tener máximo 9 digitos.'})
    phoneNumber: string
    
}