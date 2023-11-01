import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
   // console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className='mt-24 mb-12 text-7xl h-24 overflow-hidden  font-extrabold tracking-wide'>ToDo List</h1>
      <Form addTodo={addTodo} />
      <h1 className="text-3xl overflow-hidden  underline font-extrabold">
        Tasks:
      </h1>
      <div className=' overflow-y-scroll scrollbar-hide h-[40rem] w-full flex flex-col items-center   mb-[1rem] bg-red-300'>
          <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
      </div>
    </>
  );
}

export default List;