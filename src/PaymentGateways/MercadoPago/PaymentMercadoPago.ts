import { injectable } from "inversify";
import { PaymentDetail } from "../../Model/PaymentDetail";
import { IPaymentMercadoPago } from "./IPaymentMercadoPago";

@injectable()
export class PaymentMercadoPago implements IPaymentMercadoPago {
    makePayment(paymentDetail: PaymentDetail): boolean {
        return true;
    }
    makeReimburse(paymentDetail: PaymentDetail): boolean {
        return true;
    }
    makePartialReimburse(paymentDetail: PaymentDetail): boolean {
        return true;
    }
}