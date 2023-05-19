import { OmitType } from "@nestjs/mapped-types";
import { CreateCostDto } from "./create_cost.dto";
export class UpdateCostDto extends OmitType(CreateCostDto,[]){

}