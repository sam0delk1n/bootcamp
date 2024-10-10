using System.Text;

class Repository<T> : IRepository<T>
{
    List<T> items;

    public Repository()
    {
        items = new();
    }

    public void Append(params T[] args)
    {
        foreach (var item in args ?? Enumerable.Empty<T>())
        {
            if (item != null) items.Add(item);
        }
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
        items.ForEach(item => sb.AppendLine(item?.ToString()));
        return sb.ToString();
    }
}
