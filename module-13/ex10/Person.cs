class Person
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
        return $$"""{ "Name": "{{Name}}", "Age": {{Age}} }""";
    }
}
