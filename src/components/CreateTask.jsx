import { useState } from "react"

export const CreateTask = ({handleSetList}) => {

  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSetList(value);
    event.target.value = '';
  }

  const handleChange = ({target}) => {
    setValue(target.value);
     
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input
          name="task"
          type="text"
          value={value}
          onChange={ handleChange }
        />
        <button type="submit">
        Agregar
        </button>
    </form>
  )
}
