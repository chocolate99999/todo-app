function TodoFilter({ filter, onFilterChange}) {
  return (
    <div className="filter-row">
      <button 
        className={filter === 'all' ? 'filter-button active' : 'filter-button'}
        onClick={() => onFilterChange('all')}>
        全部
      </button>

      <button 
        className={filter === 'active' ? 'filter-button active' : 'filter-button'}
        onClick={() => onFilterChange('active')}>
        未完成
      </button>


      <button 
        className={filter === 'completed' ? 'filter-button active' : 'filter-button'}
        onClick={() => onFilterChange('completed')}>
        已完成
      </button>
    </div>
  )
}

export default TodoFilter