type StatLineProps = {
    text: string
    value: number | string
}

export const StatisticLine: React.FC<StatLineProps> = ({text, value}: StatLineProps) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{text == 'positive' ? '%' : ''}</td>
        </tr>
)
}
