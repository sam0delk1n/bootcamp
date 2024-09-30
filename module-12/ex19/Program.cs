const string correct = "Всё верно!";
const string wrong   = "Нужно подумать ещё...";

uint score = 0;

Console.InputEncoding  = System.Text.Encoding.Unicode;
Console.OutputEncoding = System.Text.Encoding.Unicode;

Console.Write( "Что означает слово 'cat'? [кошка, собака]: " );
Console.WriteLine( ( Console.ReadLine() ?? "null" ) == "кошка" ? (score += 10, correct) : wrong );

Console.Write( "Что означает слово 'dog'? [кошка, собака]: " );
Console.WriteLine( ( Console.ReadLine() ?? "null" ) == "собака" ? (score += 10, correct) : wrong );

Console.WriteLine( $"Счёт: {score}" );
