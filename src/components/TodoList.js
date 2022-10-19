import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todo, setTodo] = useState([]);
  const addTodo = id => {
    if (!id.text) {
      alert('please enter the title of your todos list');
    }
    else {
      console.log([id, ...todo])
      const newTodos = [id, ...todo];
      setTodo(newTodos);
    }
    }
  const updateTodo = (todoId, newValue) => {
    setTodo(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const removetodo = id1 => {
    const a = [...todo].filter(todo2 => todo2.id !== id1);
    setTodo(a);
  }  
  return (
    <>
    <div className='tc'>
      <h1>what's the plan today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todo={todo} removetodo={removetodo} updateTodo={updateTodo}/>
    </div>
    </>
  )
}

export default TodoList
