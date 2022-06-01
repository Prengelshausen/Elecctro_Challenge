import React from 'react'
import Todo from './Todo'


function TodoList({todos, checkTodo}) {

    return (
      todos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} checkTodo={checkTodo} />
        )        
      })
    ) 
  
}

export default TodoList