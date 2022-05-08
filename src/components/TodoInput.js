import { React, useState } from 'react'


export default function TodoInput({addTodo}) {
  const [todoInput, setTodoInput] = useState('');
  const handleTodo = (event) => {
    event.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  }
  return (
    <form className='d-flex todo_input_form mb-4'>
      <input
        autoComplete='off'
        type="text"
        name="todo-input"
        className='form-control'
        id=""
        placeholder='Enter todo heading' 
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button type='submit' onClick={e => handleTodo(e)} className='btn btn-info px-3 fw-bold'>Submit</button>
    </form>
  )
}
