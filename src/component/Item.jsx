import React, {useContext} from 'react'
import '../css/Item.css'
import { TodoContext } from '../js/TodoStore.js';


const Item = ({todo}) => {

  const {dispatch} = useContext(TodoContext);

  const toggleItem = (e) => {
      const id = Number(e.target.dataset.id);
      dispatch({type:'change_status', payload:id});
  }
  const itemClassName = todo.status === 'done' ? 'done' : '';
  
  const deleteItem = (e) => {
    const id = Number(e.target.dataset.id);
    dispatch({type:'delete-todo', payload:id});
}
  
  
  return ( 
    <li><span data-id={todo.id}className={itemClassName}onClick={toggleItem}>{todo.title}</span><button data-id ={todo.id} onClick= {deleteItem}>✖️</button></li>
  )
}

export default Item
