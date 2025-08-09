import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Clean my computer', completed: false },
    { id: 2, text: 'Buy a keyboard', completed: false }
  ])
  
  const [completedTodos, setCompletedTodos] = useState([
    { id: 3, text: 'Write an article about @xstate/test', completed: true }
  ])
  
  const [showAddForm, setShowAddForm] = useState(false)
  const [newTodoText, setNewTodoText] = useState('')

  const handleTodoToggle = (id) => {
    const todo = todos.find(t => t.id === id)
    if (todo) {
      setTodos(todos.filter(t => t.id !== id))
      setCompletedTodos([...completedTodos, { ...todo, completed: true }])
    }
  }

  const handleCompletedToggle = (id) => {
    const todo = completedTodos.find(t => t.id === id)
    if (todo) {
      setCompletedTodos(completedTodos.filter(t => t.id !== id))
      setTodos([...todos, { ...todo, completed: false }])
    }
  }

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
      setNewTodoText('')
      setShowAddForm(false)
    }
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="todo-app">
      <div className="header">
        <h1 className="app-title">XTodo</h1>
        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
      </div>

      <h2 className="section-title">Things to get done</h2>
      
      <div className="todo-section">
        <h3 style={{ fontSize: '18px', color: '#666', marginBottom: '15px' }}>Things to do</h3>
        
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => handleTodoToggle(todo.id)}
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>

        {!showAddForm && (
          <button 
            className="add-todo-btn"
            onClick={() => setShowAddForm(true)}
          >
            <span>+</span> Add a todo
          </button>
        )}

        {showAddForm && (
          <form className="add-todo-form" onSubmit={handleAddTodo}>
            <input
              type="text"
              className="add-todo-input"
              placeholder="Enter a new todo..."
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              autoFocus
            />
            <button type="submit" className="submit-btn">
              Add
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setShowAddForm(false)
                setNewTodoText('')
              }}
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="completed-section">
        <h3 style={{ fontSize: '18px', color: '#666', marginBottom: '15px' }}>Things done</h3>
        
        {completedTodos.map(todo => (
          <div key={todo.id} className="completed-item">
            <input
              type="checkbox"
              className="completed-checkbox"
              checked={todo.completed}
              onChange={() => handleCompletedToggle(todo.id)}
            />
            <span className="completed-text">
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

