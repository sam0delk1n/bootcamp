IRepository<Person> repo = new Repository<Person>();

for (uint i = 0; i < 7; i++)
{
    repo.Append(new Employer("Игорь Р.", 10 + i, (uint)Random.Shared.Next(20, 40) * 1000));
}

repo.Append(
    new Student("Первый", 31, "№6009"),
    new Employer("Второй", 32, 100500),
    new Teacher("Третий", 33, "Питон")
);

Console.WriteLine(repo.GetById(8));

// Вывод в формате (похожем на) JSON.
Console.WriteLine(repo);

// Вывод в приятном для глаз формате.
Console.WriteLine(Format.Pretty(repo));
