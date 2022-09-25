import { PaymentDetail } from "../Model/PaymentDetail"

export interface IPaymentService {
    pay(paymentDetail: PaymentDetail): boolean
    reimburse(paymentDetail: PaymentDetail): boolean
}