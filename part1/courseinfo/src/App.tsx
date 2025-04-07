const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contentProps: ContentProps = {
    items: [
      {
        part: part1, exercise: exercises1
      },
      {
        part: part2, exercise: exercises2
      },
      {
        part: part3, exercise: exercises3
      }
  ]}

  const sum = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course}/>
      <Content content={contentProps}/>
      <Total total={sum}/>
    </div>
  )
}
type HeaderProps = {
  course: string
}
const Header = (props: HeaderProps) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  ) 
}

type ContentProps = {
  items: {
    part: string
    exercise: number
  }[]
}
const Content = ({content}: {content: ContentProps}) => {
  return (
    <div>
      {content.items.map(item => <p key={item.part}>{item.part} {item.exercise}</p>)}
    </div>
  )
}

type TotalProps = {
  total: number
}
const Total = (props: TotalProps) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

export default App
