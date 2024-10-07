using System.Text.Encodings.Web;
using System.Text.Json;

abstract class Person
{
    public string Name { get; private set; }
    public uint Age { get; private set; }

    public Person(string name, uint age)
    {
        Name = name;
        Age = age;
    }

    public override string ToString()
    {
        JsonSerializerOptions options = new()
        {
            WriteIndented = true,
            Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
        };

        return JsonSerializer.Serialize<object>(this, options);
    }
}
