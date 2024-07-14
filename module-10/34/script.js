"use strict";

window.addEventListener( "load", () => new Service() );

class Input {
    constructor(service, id, value) {
        this.service = service;
        this.element = window.document.getElementById(id);
        this.element.value = value;
        this.element.addEventListener( "input", () => this.service.update() );
    }
}

class Service {
    constructor() {
        this.units  = new Input(this, "input_units",  "1");
        this.amount = new Input(this, "input_amount", "1000");
        this.tips   = new Input(this, "input_tips",   "25");
        this.price  = new Input(this, "input_price",  "0");

        this.update();
    }

    update() {
        this.price.element.value = this.calc(
            this.units.element.value,
            this.amount.element.value,
            this.tips.element.value
        );
    }

    calc(unitsStr, amountStr, tipsStr) {
        // Проверка количества людей (val - целое число).
        // Оно должно быть конечным и положительным.
        function checkUnits(val) {
            return Number.isFinite(val) && val > 0;
        }

        // Проверка денежной суммы (val - вещественное число).
        // Она должна быть конечной и больше или равна нулю.
        function checkMoney(val) {
            return Number.isFinite(val) && val >= 0;
        }

        // Количество человек
        const units = Number.parseInt(unitsStr, 10);
        if ( !checkUnits(units) ) return "FATAL_ERROR";

        // Сумма чека
        const amount = Number.parseFloat(amountStr);
        if ( !checkMoney(amount) ) return "FATAL_ERROR";

        // Процент чаевых
        const tips = Number.parseFloat(tipsStr);
        if ( !checkMoney(tips) ) return "FATAL_ERROR";

        // Цена на человека
        const price = (amount + 0.01 * amount * tips) / units;
        return price.toString(10);
    }
}