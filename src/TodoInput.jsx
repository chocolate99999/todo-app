function TodoInput({ inputValue, onInputChange, onAdd }){
  return (
    <div className="input-row">
      <input 
          className="todo-input"
          type="text"
          value={inputValue} 
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          placeholder="請輸入待辦事項..."
        />

      <button className="add-button" onClick={onAdd}>新增</button>
    </div>
  )
}

export default TodoInput