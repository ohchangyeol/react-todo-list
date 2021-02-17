import React, { useEffect, useReducer } from 'react';
import {todoReducer}  from './TodoReducer.js';

export const TodoContext = React.createContext();


const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer,[]);
  const localList = JSON.parse(window.localStorage.getItem("todoList"));


useEffect(()=>{
  if(localList !== null && localList !== [] ){
    dispatch({type:"init",payload:localList});
    console.log("todos를 localList로 변경되었습니다.")
  }
},[]);
 
  return (
    <TodoContext.Provider value={ {todos,dispatch,localList} }>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;


// localStorage 에 todos 가 들어간다 
// list 가 localStorage를 읽어 그에 맞는 개수를 만든다
// list에서 읽어온 localStorage로 list를 만든다.
//  
