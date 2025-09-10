import { useState } from "react"
import PersonList from "./components/PersonList";
import type { Person } from "./components/PersonList";
import FormComponent from "./components/FormComponent";
import Filter from "./Filter";


const generateUUID = () => crypto.randomUUID();

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: generateUUID() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: generateUUID() },
    { name: 'Dan Abramov', number: '12-43-234345', id: generateUUID() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: generateUUID() }
  ])
  const [newName, setNewName] = useState<string>('');
  const [newNumber, setNewNumber] = useState<string>('');
  const [filter, setFilter] = useState<string>('');


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewName(event.target?.value);
  }

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewNumber(event.target?.value);
  }

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson = {name: newName, number: newNumber, id: generateUUID()};
    if (notUnique(newPerson)) {
      alert(`${newPerson.name} is already added to the phonebook.`)
      return;
    }
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const notUnique = ({name}: Person): boolean => {
    return persons.filter(person => person.name === name).length > 0;
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  }

  const peopleShown: Person[] = filter === '' ? persons
  : persons.filter(person => person.name.includes(filter));

  return (
    <div>
      <h2>Phonebook</h2>

      filter shown people 
      <Filter handleFilter={handleFilter}/>

      <h2>Add new person</h2>
      <h2>Numbers</h2>
      <FormComponent handleFormSubmit={handleFormSubmit}
      handleNameChange={handleNameChange}
      newName={newName}
      handleNumberChange={handleNumberChange}
      newNumber={newNumber}
      />
      <PersonList people={peopleShown}/> 
    </div>
  );

}

export default App
