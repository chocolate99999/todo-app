function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
    {
      todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <input 
            className="todo-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              onToggle(todo.id)
            }
          />

          <span
            // style={{
            //   textDecoration: todo.completed ? 'line-through' : 'none',
            //   color: todo.completed ? 'gray' : 'black',
            // }}
            className={todo.completed ? 'todo-text completed' : 'todo-text'}
          >
            {todo.text}
          </span>

          <button 
            className="delete-button"
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