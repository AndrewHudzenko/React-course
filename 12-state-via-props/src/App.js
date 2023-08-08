import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const [currentCount, setCurrentCount] = useState(0)

  const increaseCounter = () => {
    setCurrentCount(currentCount + 1)
  }

  return (
    <div className="App">
      <Counter count={currentCount} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
    </div>
  )
}

export default App
