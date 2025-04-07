const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const partArr = [{part: part1, exercise: exercises1},
      {part: part2, exercise: exercises2},
      {part: part3, exercise: exercises3}]

  const sum = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content items={partArr}/>
      <Total total={sum}/>
    </div>
  )
}
type HeaderProps = {
  course: string
}
const Header: React.FC<HeaderProps> = ({course}: HeaderProps) => {
  return (
    <h1>{course}</h1>
  ) 
}

type ContentProps = {
  items: PartProps[]
}
const Content: React.FC<ContentProps> = ({items}: ContentProps) => {
  return (
    <div>
      {items.map(item => <Part key={item.part} part={item.part} exercise={item.exercise}/>)}
    </div>
  )
}

type PartProps = {
  part: string
  exercise: number
}
const Part: React.FC<PartProps> = ({part, exercise}: PartProps) => {
  return (
    <p>{part} {exercise}</p>
  )
}

type TotalProps = {
  total: number
}
const Total: React.FC<TotalProps> = ({total}: TotalProps) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

export default App
