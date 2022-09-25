import { PaymentGateway } from "../Enum/EnumPaymentGateways";

export class PaymentDetail {
    constructor(
        idPaymentDetail: string,
        date: Date,
        creditCardNumber: string,
        totalPrice: number,
        paymentGateway: PaymentGateway
    ) {}

    public get idPaymentDetail(): string{
        return this.idPaymentDetail;
    }

    public set idPaymentDetail(idPaymentDetail: string) {
        this.idPaymentDetail = idPaymentDetail;
    }

    public get date(): Date {
        return this.date;
    }

    public set date(date: Date) {
        this.date = date;
    }

    public get creditCardNumber(): string {
        return this.creditCardNumber;
    }

    public set creditCardNumber(creditCardNumber: string) {
        this.creditCardNumber = creditCardNumber;
    }

    public get paymentGateway(): PaymentGateway {
        return this.paymentGateway;
    }

    public set paymentGateway(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }
}