import { PaymentGateway } from "../src/Enum/EnumPaymentGateways";
import { PaymentDetail } from "../src/Model/PaymentDetail";
import PaymentApp from "../src/PaymentApp";

let app: PaymentApp;
let paymentDetail: PaymentDetail;

beforeEach(() => {
    app = PaymentApp.create();
    paymentDetail = new PaymentDetail('123', new Date(), '345', 14, PaymentGateway.paypal);
});

describe('Payment service', () => {
    it('should be and instance of PaymentApp', () => {
        expect(app).toBeDefined;
        expect(app).toBeInstanceOf(PaymentApp);
    });

    it('should be an instance of PaymentDetail', () => {
        expect(paymentDetail).toBeDefined;
        expect(paymentDetail).toBeInstanceOf(PaymentDetail);
    })

    it('Should return true', () => {
        const payment = app.resolvePaymentService().pay(paymentDetail);
        expect(payment).toBeDefined;
        expect(payment).toEqual(true);
    });

    it('Should return true', () => {
        const reimburse = app.resolvePaymentService().reimburse(paymentDetail);
        expect(reimburse).toBeDefined;
        expect(reimburse).toEqual(true);
    });
})