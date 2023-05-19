import { OmitType, PartialType } from "@nestjs/mapped-types"
import { CreatePersonDto } from "./create_person.dto";

export class UpdatePersonDto extends OmitType(CreatePersonDto,['dni']){}