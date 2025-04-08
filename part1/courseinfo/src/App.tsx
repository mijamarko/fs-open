const App = () => {
  const course: string = 'Half Stack application development'

  const parts: PartProps[] = [
    {
      part: 'Fundamentals of React',
      exercise: 10
    },
    {
      part: 'Using props to pass data',
      exercise: 7
    },
    {
      part: 'State of a component', 
      exercise: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content items={parts}/>
      <Total items={parts}/>
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

const Total: React.FC<ContentProps> = ({items}: ContentProps) => {
  const sum = items.reduce((curr, acc) => curr + acc.exercise, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default App
