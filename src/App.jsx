import { useState } from "react";

const initialTodos = [
  { id: 1, text: '買牛奶' },
  { id: 2, text: '寫作業'},
  { id: 3, text: '運動' },
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
    }

    setTodos([...todos, newTodo]);
    setInputValue('');
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
              {todo.text}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
