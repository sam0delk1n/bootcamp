class Student(string name, uint age, string schoolName)
    : Person(name, age)
{
    public string SchoolName { get; private set; } = schoolName;
}
