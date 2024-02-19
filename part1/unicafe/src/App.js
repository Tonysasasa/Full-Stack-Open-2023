import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return <tr><td>{text} {value} %</td></tr>
  }
  return <tr><td>{text} {value}</td></tr>
}

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  const average = (props.good - props.bad) / (props.good + props.bad + props.neutral)
  const positive = props.good / (props.good + props.bad + props.neutral) * 100
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const handleGoodClick = () => {setGood(good + 1)}
  // const handleNeutralClick = () => {setNeutral(neutral + 1)}
  // const handleBadClick = () => {setBad(bad + 1)}

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App

