import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodoList] = useState([])

  const addTodoHandler = (text) => {
    setTodoList([...todos, text])
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 ? <TodoList todos={todos} /> : <h4>Empty list</h4>}
    </div>
  )
}

export default App
