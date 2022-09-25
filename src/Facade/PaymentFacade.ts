import { PaymentDetail } from "../Model/PaymentDetail";
import { IPaymentFacade } from "./IPaymentFacade";
import { IPaymentPayPal } from "../PaymentGateways/Paypal/IPaymentPayPal";
import { IPaymentMercadoPago } from "../PaymentGateways/MercadoPago/IPaymentMercadoPago";
import { inject, injectable } from "inversify";
import { TYPES } from "../DITypes";

@injectable()
export class PaymentFacade implements IPaymentFacade {

    constructor (
        @inject(TYPES.PaymentPayPal) private readonly paymentPaypal: IPaymentPayPal,
        @inject(TYPES.PaymentMercadoPago) private readonly paymentMercadoPago: IPaymentMercadoPago){}
    makePaymentWithMercadoPago(paymentDetail: PaymentDetail): boolean {
        return this.paymentPaypal.makePayment(paymentDetail);
    }
    makeReimburseWithMercadoPago(paymentDetail: PaymentDetail): boolean {
        return this.paymentMercadoPago.makeReimburse(paymentDetail);
    }
    makePartialReimburseWithMercadoPago(paymentDetail: PaymentDetail): boolean {
        return this.paymentMercadoPago.makeReimburse(paymentDetail);
    }
    makePaymentWithPaypal(paymentDetail: PaymentDetail): boolean {
        return this.paymentPaypal.makePayment(paymentDetail);
    }
    makeReimburseWithPaypal(paymentDetail: PaymentDetail): boolean {
        return this.paymentPaypal.makeReimburse(paymentDetail);
    }
}