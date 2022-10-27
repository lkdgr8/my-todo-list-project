import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import './TodoForm.css'


function Todo({todo, removetodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    console.log(value)
    setEdit({
       id: null,
       value: ''
    });
  }
  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  return todo.map((todo1, index) => (
    <div>
        <div className='border' key={index}>
          <div className='display-flex'>
            <div className='background-coloring'>
            <p style={{color: "white"}}>{todo1.text}</p>
            </div>
            <div className='icons'>
              <RiCloseCircleLine className='delete' onClick={() => {removetodo(todo1.id);}}/>
              <TiEdit className='edit' onClick={() => setEdit({ id: todo1.id, value: todo1.text })}/>  
            </div>
          </div>
        </div>
    </div>
  ));
}

export default Todo;