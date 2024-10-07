class Employer : Person
{
    public uint Salary { get; private set; }

    public Employer(string name, uint age, uint salary)
    : base(name, age)
    {
        Salary = salary;
    }
}
