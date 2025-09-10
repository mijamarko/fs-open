type FormProps = {
    handleFormSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    newName: string;
    handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    newNumber: string;
}

const FormComponent = ({handleFormSubmit,
    handleNameChange,
    newName,
    handleNumberChange,
    newNumber}: FormProps) => {
  return (
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleNameChange}
          value={newName}/><br/>
          number: <input onChange={handleNumberChange} value={newNumber}/>
        </div>
        <button type="submit">add</button>
      </form>
  )
}

export default FormComponent