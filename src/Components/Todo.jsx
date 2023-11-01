import React, { useState } from 'react';
import Form from './Form';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Form edit={edit} submitUpdate={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'scrollbar-hide mt-4 bg-blue-100 w-[38%] h-[3.5rem] items-center flex justify-between  rounded-md px-4  '}
      key={index}
    >
      <div className='h-fit' key={todo.id} onClick={() => completeTodo(todo.id)}>
        <li>{todo.text}</li>
      </div>
      <div>
              <button onClick={() => setEdit({ id: todo.id, value: todo.text })} title="Edit">
                <i className="fa-solid fa-pen-to-square me-5 "></i>
              </button>
              <button onClick={() => removeTodo(todo.id)} title="Delete">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
    
    </div>
  ));
};

export default Todo;