import { PaymentGateway } from "../Enum/EnumPaymentGateways";

export class PaymentDetail {

    public _idPaymentDetail: string;
    public _date: Date;
    public _creditCardNumber: string;
    public _totalPrice: number;
    public _paymentGateway: PaymentGateway;

    constructor(
        idPaymentDetail: string,
        date: Date,
        creditCardNumber: string,
        totalPrice: number,
        paymentGateway: PaymentGateway
    ) {
        this._idPaymentDetail = idPaymentDetail;
        this._date = date;
        this._creditCardNumber = creditCardNumber;
        this._totalPrice = totalPrice;
        this._paymentGateway = paymentGateway;
    }

    public get idPaymentDetail(): string{
        return this._idPaymentDetail;
    }

    public set idPaymentDetail(idPaymentDetail: string) {
        this._idPaymentDetail = idPaymentDetail;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(date: Date) {
        this._date = date;
    }

    public get creditCardNumber(): string {
        return this._creditCardNumber;
    }

    public set creditCardNumber(creditCardNumber: string) {
        this._creditCardNumber = creditCardNumber;
    }

    public get paymentGateway(): PaymentGateway {
        return this._paymentGateway;
    }

    public set paymentGateway(paymentGateway: PaymentGateway) {
        this._paymentGateway = paymentGateway
    }
}