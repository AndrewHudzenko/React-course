import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodoList] = useState([])

  const addTodoHandler = (text) => {
    setTodoList([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodoList(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
