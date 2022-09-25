'use strict'

import 'reflect-metadata'

import { Container } from "inversify";
import { TYPES } from "./DITypes";
import { PaymentFacade } from "./Facade/PaymentFacade";
import { PaymentMercadoPago } from "./PaymentGateways/MercadoPago/PaymentMercadoPago";
import { PaymentPayPal } from "./PaymentGateways/Paypal/PaymentPayPal";
import { PaymentService } from "./Service/PaymentService";

export default class PaymentApp {
    private instance: Container;

    static create(){
        return new PaymentApp();
    }

    private constructor(){
        this.instance = new Container();
        this.instance.bind(TYPES.PaymentPayPal).to(PaymentPayPal);
        this.instance.bind(TYPES.PaymentMercadoPago).to(PaymentMercadoPago);
        this.instance.bind(TYPES.PaymentFacade).to(PaymentFacade);
        this.instance.bind(TYPES.PaymentService).to(PaymentService);
    }

    resolvePaymentPaypal(){
        return this.instance.resolve<PaymentPayPal>(PaymentPayPal);
    }

    resolvePaymentMercadoPago(){
        return this.instance.resolve<PaymentMercadoPago>(PaymentMercadoPago);
    }

    resolvePaymentFacade(){
        return this.instance.resolve<PaymentFacade>(PaymentFacade);
    }

    resolvePaymentService(){
        return this.instance.resolve<PaymentService>(PaymentService);
    }
}