import { PaymentDetail } from "../../Model/PaymentDetail";
import { IPaymentPayPal } from "./IPaymentPayPal";

export class PaymentPayPal implements IPaymentPayPal {
    makePayment(paymentDetail: PaymentDetail): boolean {
        return true;
    }
    makeReimburse(paymentDetail: PaymentDetail): boolean {
        return true;
    }
}