function TodoInput({ inputValue, onInputChange, onAdd }){
  return (
    <div>
      <input 
          type="text"
          value={inputValue} 
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          placeholder="請輸入待辦事項..."
        />

      <button onClick={onAdd}>新增</button>
    </div>
  )
}

export default TodoInput