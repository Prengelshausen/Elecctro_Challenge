import {React, useState, useEffect} from "react";
import CreateTaskInput from "./CreateTaskInput";
import TodoList from "./TodoList";
import "./App.css";


function App() {
  const [todos, setTodo] = useState([]);
  const [editID, setEdit] = useState(false);
  const [inpVal, setInpVal] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todolist'))
    if (storedTodoList) {
      setTodo(storedTodoList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos))
  }, [todos])

  function checkTodo(id) {
    let todolist = [...todos];
    let todo = todolist.find(todo => todo.id === id);
    todo.complete =! todo.complete;
    setTodo(todolist);
  }

  function delTodo(id) {
    let todolist = [...todos];
    let filtered = todolist.filter(todo => todo.id !== id)
    setTodo(filtered);
  }

  function changesTodo(id, name) {
    setEdit(id);
    setInpVal(name);
  }

  function editTodo(id, name) {
    let editTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.name = name;
      }
      return todo;
    })
    setTodo(editTodos);
    setEdit(false);
  }

  function filterCompleted(e) {
    let origTodos = todos;
    if (e.target.checked) {
      let filtered = todos.filter(todo => !todo.complete)
      setTodo(filtered)
    } else
        setTodo(origTodos);
  }

  function sortTodos() {
    let todolistAZ = [...todos];
    let todolistZA = [...todos];
    let todolistDate = [...todos];

    if (counter === 0) {
      todolistDate.sort((a,b) => a.timestamp - b.timestamp);
      setTodo(todolistDate)
      setCounter(count => count +1);
    }
    if (counter === 1) { 
      todolistAZ.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      setTodo(todolistAZ);
      setCounter(count => count +1);
    }
    if (counter === 2) {
      todolistZA.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).reverse();
      setTodo(todolistZA);
      setCounter(0);
    }
  }

  if (todos.length !== 0) {
    return (
      <>
      <div className="todoApp">
        <CreateTaskInput setTodo={setTodo}/>
        <div className="card">
          <button className="btnSorting" onClick={sortTodos}>Tasks</button>
          <ul className="list">
            <TodoList todos={todos} checkTodo={checkTodo} delTodo={delTodo} changesTodo={changesTodo} editTodo={editTodo} editID={editID} inpVal={inpVal} setInpVal={setInpVal} />
          </ul>
          <span className="hide">
            Hide completed
            <input type="checkbox" onChange={filterCompleted}/>
          </span>
        </div>
      </div>
      </>
    );
  }
  return (
    <>
    <div className="todoApp">
      <CreateTaskInput setTodo={setTodo}/>
      <div className="placeholdercard">
        <div>This List is empty. Please create a new task.</div>
      </div>
    </div>
    </>
  );
}

export default App;
