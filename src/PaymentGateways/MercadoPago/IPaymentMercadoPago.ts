import { PaymentDetail } from "../../Model/PaymentDetail";

export interface IPaymentMercadoPago {
    makePayment(paymentDetail: PaymentDetail): void; 
    makeReimburse(paymentDetail: PaymentDetail): void;
    makePartialReimburse(paymentDetail: PaymentDetail): void;
}