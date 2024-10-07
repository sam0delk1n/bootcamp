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

        foreach (var item in items)
        {
            if (item != null) sb.AppendLine(item.ToString());
        }

        return sb.ToString();
    }
}
