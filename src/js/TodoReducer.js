export const todoReducer = (todos, {type, payload}) => {
  switch (type) {
    case "add_todo":
      const addTodo = [...todos,{'title': payload, 'id' :todos.length, 'status' : 'todo', "delete":"no" }];
      localStorage.setItem("todoList",JSON.stringify(addTodo)); 
      return addTodo

      case "init":
        return payload;

      case "clear":
        localStorage.clear();
        return []

      case "change_status":
        todos.map(todo => {
          if(todo.id === payload) {
            if(todo.status === "done") todo.status = "todo";
            else todo.status = "done";
          }
          return todo;
        });
        localStorage.setItem("todoList",JSON.stringify(todos));
        return JSON.parse(window.localStorage.getItem("todoList"));
        
        case "delete-todo":
          todos.map(todo => {
            console.log(payload)
            if(todo.id === payload) {
              todo.delete = "yes";
            }
            return todo;
          });
          // console.log(todos.filter(v=> v.delete === "no"));
          localStorage.setItem("todoList",JSON.stringify(todos.filter(v=> v.delete === "no")));
          
        return JSON.parse(window.localStorage.getItem("todoList"));

        
      default:
        break;
    }
    
  }
  