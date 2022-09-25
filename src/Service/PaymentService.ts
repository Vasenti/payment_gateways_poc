import { inject, injectable } from "inversify";
import { TYPES } from "../DITypes";
import { PaymentGateway } from "../Enum/EnumPaymentGateways";
import { IPaymentFacade } from "../Facade/IPaymentFacade";
import { PaymentDetail } from "../Model/PaymentDetail";
import { IPaymentService } from "./IPaymentService";

@injectable()
export class PaymentService implements IPaymentService{

    constructor(@inject(TYPES.PaymentFacade) private readonly _paymentFacade: IPaymentFacade){}

    pay(paymentDetail: PaymentDetail): boolean {
        const paymentGateway = paymentDetail.paymentGateway;

        switch(paymentGateway){
            case PaymentGateway.mercadopago:
                return this._paymentFacade.makePaymentWithMercadoPago(paymentDetail);
            case PaymentGateway.paypal: 
                return this._paymentFacade.makePaymentWithPaypal(paymentDetail);
        }
    }
    reimburse(paymentDetail: PaymentDetail): boolean {
        const paymentGateway = paymentDetail.paymentGateway;

        switch(paymentGateway){
            case PaymentGateway.mercadopago:
                return this._paymentFacade.makePartialReimburseWithMercadoPago(paymentDetail);
            case PaymentGateway.paypal:
                return this._paymentFacade.makeReimburseWithPaypal(paymentDetail);
        }
    }

}