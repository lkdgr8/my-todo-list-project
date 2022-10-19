import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      props.onSubmit({
        id: Math.floor(Math.random() * 3000),
        text: input
      })
      setInput('');
    }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" 
          placeholder='your title' 
          value={input} 
          onChange={(e) => { setInput(e.target.value) }} 
          autoFocus
          />  
        <button type='submit' className='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;
