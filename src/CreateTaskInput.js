import {React, useRef} from 'react'
import "./CreateTaskInput.css"

function CreateTaskInput() {

  const nameRef = useRef()

  function AddTodo(e) {
    const todoname = nameRef.current.value
    if (todoname) {
      console.log(todoname);
    }
    nameRef.current.value = null;
}

  return (
    <div className='inp'>
      <input ref={nameRef} type="text" placeholder='Write new task here...'/>
      <button onClick={AddTodo}>Create</button>
    </div>
  )
}

export default CreateTaskInput