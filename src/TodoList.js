import React from 'react'
import Todo from './Todo'


function TodoList({todos, checkTodo, delTodo, changesTodo, editTodo, editID, inpVal, setInpVal}) {

    return (
      todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} checkTodo={checkTodo} delTodo={delTodo} changesTodo={changesTodo} editTodo={editTodo} editID={editID} inpVal={inpVal} setInpVal={setInpVal}/>
        )        
      })
    ) 
  
}

export default TodoList