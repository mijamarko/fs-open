import { PartProps } from "./Types"

const Part: React.FC<PartProps> = ({name: part, exercise}: PartProps) => {
  return (
    <p>{part} {exercise}</p>
  )
}

export default Part