interface IRepository<T> {
    void Append(params T[] args);
    T GetById(int id);
    void ForEach(Action<T> action);
}
