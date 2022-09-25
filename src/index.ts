import { PaymentGateway } from "./Enum/EnumPaymentGateways";
import { PaymentDetail } from "./Model/PaymentDetail";
import PaymentApp from "./PaymentApp";

const app: PaymentApp = PaymentApp.create();

const paymentDetail = new PaymentDetail('123', new Date(), '345', 14, PaymentGateway.paypal);
const payment = app.resolvePaymentService().pay(paymentDetail);

console.info('PAYMENT PAYPAL: ', payment);

const reimburse = app.resolvePaymentService().reimburse(paymentDetail);

console.info('REIMBURSE PAYPAL', reimburse);