import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ResetButton from './components/ResetButton'

function App() {
  const [currentCount, setCurrentCount] = useState(0)

  const increaseCounter = () => {
    setCurrentCount(currentCount + 1)
  }

  const resetCount = () => {
    setCurrentCount(0)
  }

  return (
    <div className="App">
      <Counter count={currentCount} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
      <Button fun={increaseCounter} />
      {currentCount > 0 && (
        <ResetButton counter={currentCount} onClick={resetCount} />
      )}
    </div>
  )
}

export default App
