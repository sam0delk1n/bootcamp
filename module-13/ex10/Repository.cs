using System.Text;

class Repository<T> : IRepository<T> where T : class
{
    readonly List<T> items;

    public Repository()
    {
        items = [];
    }

    public void Append(params T[] args)
    {
        if (args == default || args.Length == 0 || args.Contains(default))
        {
            throw new Exception("Invalid args");
        }

        items.AddRange(args);
    }

    public T GetById(int id)
    {
        return items[id];
    }

    public void ForEach(Action<T> action)
    {
        items.ForEach(action);
    }

    public override string ToString()
    {
        StringBuilder sb = new();
        items.ForEach(item => sb.AppendLine(item.ToString()));
        return sb.ToString();
    }
}
