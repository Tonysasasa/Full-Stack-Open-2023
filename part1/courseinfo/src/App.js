const Header = (props) => {
  console.log(props)
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1name={part1.name} part1num={part1.exercises} part2name={part2.name} part2num={part2.exercises} part3name={part3.name} part3num={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App