import { PaymentDetail } from "../../Model/PaymentDetail";

export interface IPaymentPayPal {
    makePayment(paymentDetail: PaymentDetail): boolean;
    makeReimburse(paymentDetail: PaymentDetail): boolean;
}