import React, {useContext} from 'react'
import Item from './Item.jsx'
import { TodoContext } from '../js/TodoStore.js';
import "../css/list.css"

const List = () => {

  const {localList,dispatch} = useContext(TodoContext);

  let todoList =()=>{
    if(localList !== null){
      return localList.map( (todo) =>
        <Item key={todo.id} todo={todo} />)
    }
  }
  const clearAll = ()=>{
    dispatch({type: "clear"})
  }
  const HeaderTodo = () => {
    if(localList !== null){
        return<div className="item-number"><span>{localList.filter(v => v.status ==="todo").length} Items</span><button className="clear-all"onClick={clearAll}>Claer All</button></div> 
    }
  }
  return (
    <div className ="todo-list-box">
      <ul>
        {todoList()}
      </ul>
      {HeaderTodo()}
    </div>
  )
}
export default List