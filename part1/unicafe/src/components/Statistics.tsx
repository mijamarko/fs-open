type StatProps = {
    good: number
    neutral: number
    bad: number
}


export const Statistics: React.FC<StatProps> = ({good, neutral, bad}: StatProps) => {
  const total = good + neutral + bad
  return (
    <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good - bad) / total || "N/A"}</p>
        <p>positive {(good * 100) / total || "N/A"}</p>
    </div>
  )
}
