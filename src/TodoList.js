import React from 'react'
import Todo from './Todo'



function TodoList({todos}) {

  if (todos.length === 0) {
    return (
      <div>This List is empty. Please create a new task.</div>
    )
  } else
      return (
        todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />        
        })
      ) 
  
}

export default TodoList