import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  console.log(props.good);
  const average = (props.good - props.bad) / (props.good + props.bad + props.neutral)
  const positive = props.good / (props.good + props.bad + props.neutral) * 100
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App

