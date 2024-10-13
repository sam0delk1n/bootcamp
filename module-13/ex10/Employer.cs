class Employer(string name, uint age, uint salary)
    : Person(name, age)
{
    public uint Salary { get; private set; } = salary;
}
