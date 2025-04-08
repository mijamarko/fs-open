type ButtonProps = {
    text: string
    onClick: () => void
}


export const Button: React.FC<ButtonProps> = ({text, onClick}: ButtonProps) => {
  return (
    <button style={{margin: 3}} onClick={onClick}>{text}</button>
  )
}
