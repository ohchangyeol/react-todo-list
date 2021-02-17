import React, { useContext, useRef } from 'react';
import {TodoContext} from "../js/TodoStore.js"
import "../css/form.css"


const Form = () =>{
  const inputRef = useRef(false);
  const {dispatch} = useContext(TodoContext);
  
  const addTodoData = (e) => {
    e.preventDefault();
    dispatch({type:"add_todo",payload:inputRef.current.value});
    inputRef.current.value = '';
  }
    return(
        <form action="" onSubmit={addTodoData}>
          <input type="text" ref = {inputRef}placeholder="What s needs to be done?" className="form-input"/>
        </form>
    )
}

export default Form;