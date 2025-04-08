import { ContentProps } from "./Types"

const Total: React.FC<ContentProps> = ({items}: ContentProps) => {
  const sum = items.reduce((curr, acc) => curr + acc.exercise, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total