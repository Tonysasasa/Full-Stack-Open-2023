const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1name} exercises1={props.part1num} />
      <Part part2={props.part2name} exercises2={props.part2num} />
      <Part part3={props.part3name} exercises3={props.part3num} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content part1name={part1} part1num={exercises1} part2name={part2} part2num={exercises2} part3name={part3} part3num={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App