import { useState } from 'react'

function Input() {
  const [name, setName] = useState('')

  function valueChange(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <label htmlFor="name">Cual es tu nombre:</label>
      <input type="text" name="name" onChange={valueChange} />
      <p >{name}</p>
    </div>
  )
}

export default Input