using System.Text;

class Repository
{
    uint count;
    List<Person> people;

    public Repository(uint count)
    {
        this.count = count;
        people = new();
    }

    public void Append(Person person)
    {
        if (people.Count < count)
        {
            people.Add(person);
        }
        else
        {
            throw new Exception("Достигнут максимальный размер репозитория!");
        }
    }

    public override string ToString()
    {
        StringBuilder result = new();

        foreach (var person in people)
        {
            result.Append($"Имя: {person.Name}, возраст: {person.Age};\n");
        }

        return result.ToString();
    }
}
