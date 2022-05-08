import React, { useEffect, useState } from 'react';

import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firebase_config';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './TodoApp.scss'
import ReactLogoAnimation from './ReactLogoAnimation';


export default function TodoApp() {
  const [todoListData, setTodoListData] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  
  const updateProgress = async (e) => {
    const docId = e.target.id;
    const index = todoListData.findIndex(todo => todo.id === docId);
    updateDoc(doc(db, "todos", docId), {
      progress: !todoListData[index].progress
    }).then(res => {
      console.log(res);
      const updatedData = todoListData;
      updatedData[index].progress = !todoListData[index].progress;
      setTodoListData(JSON.parse(JSON.stringify(updatedData)));
    }).catch(err => alert(err.message));
  }

  const deleteTodoItem = async (e) => {
    console.log(e.target.id);
    const docId = e.target.id;
    const res = await deleteDoc(doc(db, "todos", docId));
    console.log(res);
    const updatedData = todoListData;
    setTodoListData(JSON.parse(JSON.stringify(todoListData)))
  }

  const editTodo = (e) => {
    const docId = e.target.id;
    const ItemValue = todoListData.find(todo => todo.id === docId).todo;
    setInputValue(ItemValue)
  }

  const addTodo = (value) => {
    if (value === '') {
      alert('Todo cannot be empty!');
      return;
    } else if (value.length < 5) {
      alert('Todo must be at least 5 characters');
      return;
    }
    const valueToBeInserted = {
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      progress: false,
      todo: value
    }
    addDoc(collection(db, "todos"), valueToBeInserted).then(res => {
      setTodoListData([valueToBeInserted, ...todoListData])
    }).catch(error => alert(error.message));
}
  


useEffect(() => {
    const getTodoListData = async () => {
      try {
        const todos = [];
        const todoDataFromServer = await getDocs(collection(db, "todos"));
        todoDataFromServer.forEach((doc) => {
          todos.push({
            id: doc.id,
            createdAt: doc.data().createdAt,
            updatedAt: doc.data().updatedAt,
            progress: doc.data().progress,
            todo: doc.data().todo,
          });
        });
        setTodoListData(todos);
      } catch (e) {
        console.log(e.message);
      }
    }
    return getTodoListData;
  }, []);
  
  return (
    <div className='todo_app_main_container'>
      <ReactLogoAnimation />
      <div className="sub_container">
        <h1 className='fw-bold text-info mb-4'>Todo Application</h1>
        <small className='sb-heading text-white text-uppercase mb-5 d-block'>React + Firebase</small>
        <TodoInput addTodo={addTodo}/>
        <div className="todo_list_items_container">
          {
            todoListData.map((todoItem, index) => {
              return <TodoList
                key={index}
                todoItem={todoItem} 
                updateProgress={updateProgress}  
                deleteTodoItem={deleteTodoItem}
                editTodo={editTodo}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}
