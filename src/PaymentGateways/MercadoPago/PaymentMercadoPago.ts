import { PaymentDetail } from "../../Model/PaymentDetail";
import { IPaymentMercadoPago } from "./IPaymentMercadoPago";

export class PaymentMercadoPago implements IPaymentMercadoPago {
    makePayment(paymentDetail: PaymentDetail): void {
        throw new Error("Method not implemented.");
    }
    makeReimburse(paymentDetail: PaymentDetail): void {
        throw new Error("Method not implemented.");
    }
    makePartialReimburse(paymentDetail: PaymentDetail): void {
        throw new Error("Method not implemented.");
    }
}