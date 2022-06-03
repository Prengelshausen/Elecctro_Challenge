import React from 'react'
import "./Todo.css"

function Todo({todo, checkTodo, delTodo, changesTodo, editTodo, editID, inpVal, setInpVal}) {

  function onChangeTodo() {
    checkTodo(todo.id)
  }

  function clickDelete() {
    delTodo(todo.id)
  }

  return (
    <>
        <li>
        {editID === todo.id ? (
          <input type="text" value={inpVal} onChange={(e) => setInpVal(e.target.value)}/>
        ) : (
          
        
          <label>
            <input type="checkbox" checked={todo.complete} onChange={onChangeTodo} />
              {todo.name}
          </label>)}
          <div>
          {editID === todo.id ? (
            <button onClick={() => editTodo(todo.id, inpVal)} className='btnEdit'>Edit</button>
          ) : (
            <>
            <button onClick={() => changesTodo(todo.id, todo.name)} className='btnEdit'>Edit</button>  
            <button onClick={clickDelete} className='btnDelete'> Delete</button>
            </>

          )}
          </div>
        </li>
    </>
  )
}

export default Todo