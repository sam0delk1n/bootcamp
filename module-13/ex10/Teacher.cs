class Teacher(string name, uint age, string subject)
    : Person(name, age)
{
    public string Subject { get; private set; } = subject;
}
