import { OmitType } from "@nestjs/mapped-types";
import { CreatePenaltyDto } from "./create_penalty.dto";

export class UpdatePenaltyDto extends OmitType(CreatePenaltyDto,[]){}