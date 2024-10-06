using System.Text;

class Repository
{
    readonly int maxCount;
    List<Person> data;

    public Repository(int maxCount)
    {
        this.maxCount = maxCount;
        data = new();
    }

    public void Append(params Person[] people)
    {
        foreach (var person in people)
        {
            if (data.Count < maxCount)
            {
                data.Add(person);
            }
            else
            {
                throw new Exception("Достигнут максимальный размер репозитория!");
            }
        }
    }

    public Person GetPersonById(int id)
    {
        try
        {
            return data[id];
        }
        catch (ArgumentOutOfRangeException)
        {
            throw new Exception("Плохой id!");
        }
    }

    public override string ToString()
    {
        StringBuilder sb = new();

        sb.AppendLine("{");

        foreach (var person in data)
        {
            sb.AppendLine($"    {person},");
        }

        sb.Append("}");

        return sb.ToString();
    }

    public void ForEach(Action<Person> action)
    {
        data.ForEach(action);
    }
}
