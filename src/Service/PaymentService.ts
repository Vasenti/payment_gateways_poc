import { PaymentGateway } from "../Enum/EnumPaymentGateways";
import { IPaymentFacade } from "../Facade/IPaymentFacade";
import { PaymentDetail } from "../Model/PaymentDetail";
import { IPaymentService } from "./IPaymentService";

export class PaymentService implements IPaymentService{

    private readonly _paymentFacade: IPaymentFacade;

    constructor(paymentFacade: IPaymentFacade){ 
        this._paymentFacade = paymentFacade;
    }

    pay(paymentDetail: PaymentDetail): void {
        const paymentGateway = paymentDetail.paymentGateway;

        switch(paymentGateway){
            case PaymentGateway.mercadopago:
                this._paymentFacade.makePaymentWithMercadoPago(paymentDetail);
                break;
            case PaymentGateway.paypal: 
                this._paymentFacade.makePaymentWithPaypal(paymentDetail);
                break;
        }
    }
    reimburse(paymentDetail: PaymentDetail): void {
        const paymentGateway = paymentDetail.paymentGateway;

        switch(paymentGateway){
            case PaymentGateway.mercadopago:
                this._paymentFacade.makePartialReimburseWithMercadoPago(paymentDetail);
                break;
            case PaymentGateway.paypal:
                this._paymentFacade.makeReimburseWithPaypal(paymentDetail);
                break;
        }
    }

}