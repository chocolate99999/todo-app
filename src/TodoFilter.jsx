function TodoFilter({ filter, onFilterChange}) {
  return (
    <div>
      <div>
        <button onClick={() => onFilterChange('all')}>全部</button>
        <button onClick={() => onFilterChange('active')}>未完成</button>
        <button onClick={() => onFilterChange('completed')}>已完成</button>
      </div>
    </div>
  )
}

export default TodoFilter