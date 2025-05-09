import { useState } from 'react'
import { Button } from './components/Button'
import { Statistics } from './components/Statistics'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let stats = good > 0 || neutral > 0 || bad > 0
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics</h1>
      {!stats && <p>No feedback given</p>}
      {stats && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

export default App
