import { useState } from 'react';

const initialTodos = [
  { id: 1, text: '買牛奶', completed: false },
  { id: 2, text: '寫作業', completed: false },
  { id: 3, text: '運動', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  function handleAdd() {
    if (inputValue.trim() === '')
      return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    }

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
      })
    )
  }

  function handleDelete(id) {
    setTodos(                                // filter(): 把符合條件的留下來
      todos.filter((todo) => todo.id !== id) // 沒有被點擊的項目會被保留
    )                                        // 被點擊的項目會被過濾掉
  }

  return (
    <div>
      <h1>我的待辦清單</h1>

      <div>
        <input 
          type="text"
          value={inputValue} 
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="請輸入待辦事項..."
        />

        <button onClick={handleAdd}>新增</button>
      </div>

      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  handleToggle(todo.id)
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
                  handleDelete(todo.id)
                }>刪除
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
