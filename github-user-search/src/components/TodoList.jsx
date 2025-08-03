function TodoList({ task }) {
  return (
    <div className="TodoList">
      <h3>{task}</h3>
      <button>delete</button>
    </div>
  );
}
export default TodoList;
