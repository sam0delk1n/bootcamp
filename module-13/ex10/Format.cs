using System.Text;

static class Format
{
    public static string Pretty(IRepository<Person> repo)
    {
        StringBuilder sb = new();

        sb.AppendLine(" _______________________________________________________ ");
        sb.AppendLine("|              |         |         |                    |");
        sb.AppendLine("| Имя          | Возраст | Кто     | Дополнительно      |");
        sb.AppendLine("|______________|_________|_________|____________________|");
        sb.AppendLine("|              |         |         |                    |");

        repo.ForEach(person =>
        {
            sb.Append($"| {person.Name,-12} | {person.Age,-7} |");

            switch (person.GetType().ToString())
            {
                case "Student":
                    sb.Append($" {"Студент",-7} | Школа: {((Student)person).SchoolName,-11} |");
                    break;
                case "Employer":
                    sb.Append($" {"Рабочий",-7} | Зарплата: {((Employer)person).Salary,-8} |");
                    break;
                case "Teacher":
                    sb.Append($" {"Учитель",-7} | Предмет: {((Teacher)person).Subject,-9} |");
                    break;
                default:
                    sb.Append("         |                    |");
                    break;
            }

            sb.AppendLine();
        });

        sb.AppendLine("|______________|_________|_________|____________________|");

        return sb.ToString();
    }
}
