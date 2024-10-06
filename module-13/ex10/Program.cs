try
{
    Repository repo = new(10);

    // Можно проверить переполнение репозитория.
    //for (uint i = 0; i < 12; i++)
    for (uint i = 0; i < 7; i++)
    {
        repo.Append(new Person("Игорь Р.", 10 + i));
    }

    repo.Append(
        new Student("Первый", 31, "№6009"),
        new Employer("Второй", 32, 100500),
        new Teacher("Третий", 33, "Питон")
    );

    // Можно проверить обращение по неправильному Id.
    //repo.GetPersonById(12);
    Console.WriteLine(repo.GetPersonById(8));

    // Вывод в формате (похожем на) JSON.
    Console.WriteLine(repo);

    // Вывод в приятном для глаз формате.
    Console.WriteLine(Format.Pretty(repo));
}
catch (Exception ex)
{
    Console.WriteLine($"FATAL ERROR: {ex.Message}");
    return;
}
