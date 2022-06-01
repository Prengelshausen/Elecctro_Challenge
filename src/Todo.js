import React from 'react'
import "./Todo.css"

function Todo({todo, checkTodo}) {

  function onChangeTodo() {
    checkTodo(todo.id)
  }

  return (
    <>
        <li>
          <label>
            <input type="checkbox" checked={todo.complete} onChange={onChangeTodo} />
              {todo.name}
          </label>
          <div>
            <span>Edit</span> / 
            <span> Delete</span>
          </div>
        </li>
    </>
  )
}

export default Todo