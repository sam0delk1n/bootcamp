class Student : Person
{
    public string SchoolName { get; private set; }

    public Student(string name, uint age, string schoolName)
    : base(name, age)
    {
        SchoolName = schoolName;
    }

    public override string ToString()
    {
        return $$"""{ "Name": "{{Name}}", "Age": {{Age}}, "SchoolName": "{{SchoolName}}" }""";
    }
}
