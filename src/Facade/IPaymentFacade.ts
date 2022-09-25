import { PaymentDetail } from "../Model/PaymentDetail";

export interface IPaymentFacade {
    makePaymentWithPaypal(paymentDetail: PaymentDetail): boolean;
    makePaymentWithMercadoPago(paymentDetail: PaymentDetail): boolean;
    makeReimburseWithPaypal(paymentDetail: PaymentDetail): boolean;
    makeReimburseWithMercadoPago(paymentDetail: PaymentDetail): boolean;
    makePartialReimburseWithMercadoPago(paymentDetail: PaymentDetail): boolean;
}