import { PaymentDetail } from "../Model/PaymentDetail";
import { IPaymentFacade } from "./IPaymentFacade";
import { IPaymentPayPal } from "../PaymentGateways/Paypal/IPaymentPayPal";
import { IPaymentMercadoPago } from "../PaymentGateways/MercadoPago/IPaymentMercadoPago";

export class PaymentFacade implements IPaymentFacade {
    private readonly _paymentPaypal: IPaymentPayPal;
    private readonly _paymentMercadoPago: IPaymentMercadoPago;

    constructor (
        paymentPaypal: IPaymentPayPal,
        paymentMercadoPago: IPaymentMercadoPago
    ){
        this._paymentPaypal = paymentPaypal;
        this._paymentMercadoPago = paymentMercadoPago;
    }
    makePaymentWithMercadoPago(paymentDetail: PaymentDetail): void {
        this._paymentMercadoPago.makePayment(paymentDetail);
    }
    makeReimburseWithMercadoPago(paymentDetail: PaymentDetail): void {
        this._paymentMercadoPago.makeReimburse(paymentDetail);
    }
    makePartialReimburseWithMercadoPago(paymentDetail: PaymentDetail): void {
        this._paymentMercadoPago.makeReimburse(paymentDetail);
    }
    makePaymentWithPaypal(paymentDetail: PaymentDetail): void {
        this._paymentPaypal.makePayment(paymentDetail);
    }
    makeReimburseWithPaypal(paymentDetail: PaymentDetail): void {
        this._paymentPaypal.makeReimburse(paymentDetail);
    }
}