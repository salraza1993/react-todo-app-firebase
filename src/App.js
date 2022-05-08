import {Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import TodoApp from './components/TodoApp';
import Login from './views/Login';
import Register from './views/Register';

import './App.scss'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<TodoApp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
