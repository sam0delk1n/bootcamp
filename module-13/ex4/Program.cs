Repository repo = new(10);

try
{
    for (uint i = 0; i < 12; i++)
    {
        repo.Append(new Person("Игорь Р.", 10 + i));
    }
}
catch (Exception ex)
{
    Console.WriteLine($"FATAL ERROR: {ex.Message}");
}

Console.WriteLine(repo);
