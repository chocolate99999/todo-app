
const todos = [
  { id: 1, text: '買牛奶' },
  { id: 2, text: '寫作業'},
  { id: 3, text: '運動' },
]

function App() {

  return (
    <div>
      <h1>我的待辦清單</h1>

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
