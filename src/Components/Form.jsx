import React, { useState, useEffect, useRef } from 'react';

function Form({edit,submitUpdate,addTodo}) {
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='w-[40%] relative h-max overflow-hidden mb-5'>
      {edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='bg-blue-100 text-lg rounded-full outline-none border-color-white border-solid py-4 px-8 pr-16 w-full overflow-hidden  mb-5'
          />
          <button onClick={handleSubmit} className='h-4/5 aspect-square absolute right-1 top-[13%]'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='bg-blue-100 text-lg rounded-full outline-none border-color-white border-solid py-4 px-8 pr-16 w-full overflow-hidden  mb-5'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='h-4/5 aspect-square absolute right-1 top-[13%] overflow-hidden'>
          <i className="fa-solid fa-circle-plus text-4xl"></i>     
           </button>
        </>
      )}
    </form>
  );
}

export default Form;