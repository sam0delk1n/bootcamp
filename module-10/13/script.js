function service() {
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
    const units = Number.parseInt(
        window.prompt("Количество человек", "1"),
        10
    );

    if ( !checkUnits(units) ) return "FATAL_ERROR";

    // Сумма чека
    const amount = Number.parseFloat(
        window.prompt("Сумма чека", "1000")
    );

    if ( !checkMoney(amount) ) return "FATAL_ERROR";

    // Процент чаевых
    const tips = Number.parseFloat(
        window.prompt("Процент чаевых", "25")
    );

    if ( !checkMoney(tips) ) return "FATAL_ERROR";

    // Цена на человека
    const price = (amount + 0.01 * amount * tips) / units;
    window.alert( `Цена на человека: ${price}` );

    return "OK";
}

if ( "OK" !== service() ) {
    window.alert("Ошибка! Давай до свидания!");
}