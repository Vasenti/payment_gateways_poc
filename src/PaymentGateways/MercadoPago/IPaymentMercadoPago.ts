import { PaymentDetail } from "../../Model/PaymentDetail";

export interface IPaymentMercadoPago {
    makePayment(paymentDetail: PaymentDetail): boolean; 
    makeReimburse(paymentDetail: PaymentDetail): boolean;
    makePartialReimburse(paymentDetail: PaymentDetail): boolean;
}