using System.Text.Encodings.Web;
using System.Text.Json;

abstract class Person(string name, uint age)
{
    public string Name { get; private set; } = name;
    public uint Age { get; private set; } = age;

    private static readonly JsonSerializerOptions options = new()
    {
        WriteIndented = true,
        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
    };

    public override string ToString()
    {
        return JsonSerializer.Serialize<object>(this, options);
    }
}
