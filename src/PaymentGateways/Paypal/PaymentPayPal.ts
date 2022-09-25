import { injectable } from "inversify";
import { PaymentDetail } from "../../Model/PaymentDetail";
import { IPaymentPayPal } from "./IPaymentPayPal";

@injectable()
export class PaymentPayPal implements IPaymentPayPal {
    makePayment(paymentDetail: PaymentDetail): boolean {
        return true;
    }
    makeReimburse(paymentDetail: PaymentDetail): boolean {
        return true;
    }
}