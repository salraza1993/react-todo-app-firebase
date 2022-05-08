import React from 'react'

export default function TodoList({ todoItem, updateProgress, deleteTodoItem, editTodo }) {
  
  // const udpateTodoItem = (e) => console.log(e.target.id);  
  
  return (
    <div className= {
      todoItem.progress ? 'disabled todo_list_items text-white d-flex justify-content-between align-items-start' :
        'todo_list_items text-white d-flex justify-content-between align-items-start'
    }>
      <div className='list-content text-start pe-3'>
        <h6 className='content'>{todoItem.todo}</h6>
        <button className={todoItem.progress ? "btn-success btn btn-sm py-0" : "btn-warning btn btn-sm py-0"} id={todoItem.id} onClick={e => updateProgress(e)}>
          {todoItem.progress ? 'Completed' : 'In-progress'}
        </button>
        <br />
        <small className="text-sedonary timing d-block">
          <span>
            Created: <span>{todoItem.createdAt}</span>,
          </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Edited: <span>{todoItem.updatedAt}</span>
          </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Completed on: <span>{todoItem.updatedAt}</span>
          </span>
        </small>
      </div>
      <div className="actions d-flex gap-2 mt-1">
        <button type='button' id={todoItem.id} onClick={e => editTodo(e)} className="btn border-0 btn-outline-info">
          <i className="fas fa-pencil pe-none"></i>
        </button>
        <button type='button' id={todoItem.id} onClick={e => deleteTodoItem(e)} className="btn btn-outline-danger border-0">
          <i className="fas fa-trash-alt pe-none"></i>
        </button>
      </div>
    </div>
  )
}
