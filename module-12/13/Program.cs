Console.Write("Количество человек (1): ");
uint units = uint.TryParse( Console.ReadLine(), out units ) ? units : 1;
if (units < 1) {
    Console.WriteLine("FATAL ERROR");
    return;
}

Console.Write("Сумма чека (1000): ");
double amount = double.TryParse( Console.ReadLine(), out amount ) ? amount : 1000;
if (amount < 0) {
    Console.WriteLine("FATAL ERROR");
    return;
}

Console.Write("Процент чаевых (25): ");
double tips = double.TryParse( Console.ReadLine(), out tips ) ? tips : 25;
if (tips < 0) {
    Console.WriteLine("FATAL ERROR");
    return;
}

Console.WriteLine(
    "----\n" +
    $"Общий счёт:     {amount + 0.01 * amount * tips}\n" +
    $"Процент чаевых: {tips}%\n" +
    $"С каждого:      { (amount + 0.01 * amount * tips) / units }"
);
