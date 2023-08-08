import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNumber'

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))

  const generate = () => {
    setRandomNum(generateRandomNum(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={generate}>Generate new number</button>
    </div>
  )
}

export default RandomNumber
