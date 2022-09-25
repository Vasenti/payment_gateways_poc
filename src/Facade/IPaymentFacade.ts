import { PaymentDetail } from "../Model/PaymentDetail";

export interface IPaymentFacade {
    makePaymentWithPaypal(paymentDetail: PaymentDetail): void;
    makePaymentWithMercadoPago(paymentDetail: PaymentDetail): void;
    makeReimburseWithPaypal(paymentDetail: PaymentDetail): void;
    makeReimburseWithMercadoPago(paymentDetail: PaymentDetail): void;
    makePartialReimburseWithMercadoPago(paymentDetail: PaymentDetail): void;
}