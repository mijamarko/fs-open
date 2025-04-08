import { ContentProps } from "./Types"
import Part from "./Part"

const Content: React.FC<ContentProps> = ({items}: ContentProps) => {
  return (
    <div>
      {items.map(item => <Part key={item.name} name={item.name} exercise={item.exercise}/>)}
    </div>
  )
}

export default Content