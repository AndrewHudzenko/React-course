import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Press me',
  'Click me again',
  'Press me again!!!',
]

function App() {
  const [currentCount, setCurrentCount] = useState(0)

  const increaseCounter = () => {
    setCurrentCount(currentCount + 1)
  }

  return (
    <div className="App">
      <Counter count={currentCount} />
      {texts.map((text, index) => {
        return <Button onClick={increaseCounter} text={text} key={index} />
      })}
    </div>
  )
}

export default App
