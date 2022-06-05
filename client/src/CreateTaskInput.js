import {React, useRef} from 'react'
import "./CreateTaskInput.css"
import {v4 as uuidv4} from 'uuid';

function CreateTaskInput({setTodo}) {

  const nameRef = useRef()

  function AddTodo(e) {
    const todoname = nameRef.current.value
    if (todoname) {
      setTodo(origTodos => {
        let updatedTodos = [...origTodos, {id: uuidv4() ,name: todoname, complete: false, timestamp: new Date()}];
        return updatedTodos;
      })
    }
    nameRef.current.value = null;
}

  return (
    <div className='addtodo'>
      <input className='inp' ref={nameRef} type="text" placeholder='Write new task here...'/>
      <button onClick={AddTodo}>Create</button>
    </div>
  )
}

export default CreateTaskInput