import { PaymentDetail } from "../Model/PaymentDetail"

export interface IPaymentService {
    pay(paymentDetail: PaymentDetail): void
    reimburse(paymentDetail: PaymentDetail): void
}