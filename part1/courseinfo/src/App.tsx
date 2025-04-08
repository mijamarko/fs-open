const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component', 
        exercise: 14
      }
    ]

  }

  return (
    <div>
      <Header course={course.name}/>
      <Content items={course.parts}/>
      <Total items={course.parts}/>
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
      {items.map(item => <Part key={item.name} name={item.name} exercise={item.exercise}/>)}
    </div>
  )
}

type PartProps = {
  name: string
  exercise: number
}
const Part: React.FC<PartProps> = ({name: part, exercise}: PartProps) => {
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
