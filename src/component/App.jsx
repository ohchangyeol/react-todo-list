import React from 'react'
import TodoStore from '../js/TodoStore.js';
import List from './List.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import '../css/App.css';

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form  />
      <List />
    </TodoStore>
  )
}

export default App
