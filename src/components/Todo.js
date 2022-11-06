import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import './TodoForm.css'

function Todo({ todo, removetodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    if (!value.text) {
      alert("please enter the text to update")
    }
    else {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    }
  }

  return todo.map((todo1, index) => (
    <div className='display-flex' key={index}>
      <div className='background-coloring'>
        <p className='textWhite'>{edit.id === todo1.id ? <TodoForm edit={edit} onSubmit={submitUpdate} /> : todo1.text}</p>
      </div>
      <div className='icons'>
        <RiCloseCircleLine className='delete' onClick={() => { removetodo(todo1.id); }} />
        <TiEdit className='edit' onClick={() => setEdit({ id: todo1.id, value: todo1.text })} />
      </div>
    </div>
  ));
}

export default Todo;