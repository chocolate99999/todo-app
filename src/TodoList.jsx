function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
    {
      todos.map((todo) => (
        <li key={todo.id}>
          <input 
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              onToggle(todo.id)
            }
          />

          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black',
            }}
          >
            {todo.text}
          </span>

          <button 
            onClick={() => 
              onDelete(todo.id)
            }>刪除
          </button>
        </li>
      ))
    }
  </ul>
  );
}

export default TodoList