import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

let maxValue = 0;
let target = 0;
const arrHelper = (arr, index) => {
  arr[index] += 1
  return [Math.max(...arr), arr.indexOf(Math.max(...arr))]
}

const points = new Uint8Array(anecdotes.length);
const copy = [...points]


const App = () => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const handleVoteClick = () => {
    setVote(vote + 1);
    [maxValue, target] = arrHelper(copy, selected);
    //console.log(copy); // for debug
  }

  const handleButtonClick = () => { setSelected(Math.floor(Math.random() * anecdotes.length)) }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>

      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleButtonClick} text="next anecdotes" />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[target]}</p>
      <p>has {maxValue} votes</p>
    </div>
  )
}

export default App