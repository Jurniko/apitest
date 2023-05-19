import { OmitType } from "@nestjs/mapped-types";
import { CreatePaymentDto } from "./create_payment.dto";


export class UpdatePaymentDto extends OmitType(CreatePaymentDto,[]){}