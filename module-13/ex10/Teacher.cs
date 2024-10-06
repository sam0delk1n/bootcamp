class Teacher : Person
{
    public string Subject { get; private set; }

    public Teacher(string name, uint age, string subject)
    : base(name, age)
    {
        Subject = subject;
    }

    public override string ToString()
    {
        return $$"""{ "Name": "{{Name}}", "Age": {{Age}}, "Subject": "{{Subject}}" }""";
    }
}
