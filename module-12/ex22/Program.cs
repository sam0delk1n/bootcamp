const string correct = "Всё верно!";
const string wrong   = "Нужно подумать ещё...";

uint   score = 0;
string answer;

Console.InputEncoding  = System.Text.Encoding.Unicode;
Console.OutputEncoding = System.Text.Encoding.Unicode;

Console.Write( "Что означает слово 'cat'? [кошка, собака]: " );

answer = Console.ReadLine() ?? "null";
answer = answer.Trim().ToLower();

if (answer == "кошка") {
    score += 10;
    Console.WriteLine(correct);
} else {
    Console.WriteLine(wrong);
}

Console.Write( "Что означает слово 'dog'? [кошка, собака]: " );

answer = Console.ReadLine() ?? "null";
answer = answer.Trim().ToLower();

if (answer == "собака") {
    score += 10;
    Console.WriteLine(correct);
} else {
    Console.WriteLine(wrong);
}

Console.WriteLine( $"Счёт: {score}" );
