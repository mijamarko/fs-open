export type Person = {
  name: string;
  number: string;
  id: string;
}

type People = {
  people: Person[]
}

const PersonList = ({people}: People) => {
  return (
    people.map(person => (
      <div key={person.id}>
        <span>{person.name} {person.number}</span>
      </div>
    ))
  )
}

export default PersonList