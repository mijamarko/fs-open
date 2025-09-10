type FilterProps = {
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({handleFilter}: FilterProps) => {
    return (
        <input onChange={handleFilter} />
    )
}

export default Filter