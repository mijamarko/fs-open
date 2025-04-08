import { HeaderProps } from "./Types"

const Header: React.FC<HeaderProps> = ({course}: HeaderProps) => {
  return (
    <h1>{course}</h1>
  ) 
}

export default Header