import { OmitType } from "@nestjs/mapped-types";
import { CreateCostDto } from "src/cost/dto/create_cost.dto";
import { CreateCostPriceDto } from "./create_cost_price.dto";


export class UpdateCostPriceDto extends OmitType(CreateCostPriceDto,[]){}