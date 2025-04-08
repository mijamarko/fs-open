import { StatisticLine } from "./StatisticLine"

type StatProps = {
    good: number
    neutral: number
    bad: number
}


export const Statistics: React.FC<StatProps> = ({good, neutral, bad}: StatProps) => {
  const total = good + neutral + bad
  return (
    <table>
        <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='total' value={total}/>
            <StatisticLine text='average' value={(good - bad) / total || "N/A"}/>
            <StatisticLine text='positive' value={(good * 100) / total || "N/A"}/>
        </tbody>
    </table>
  )
}
