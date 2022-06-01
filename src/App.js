import {React, useState} from "react";
import CreateTaskInput from "./CreateTaskInput";
import TodoList from "./TodoList";
import "./App.css";



function App() {
  const [todos, setTodo] = useState([])
  
  function checkTodo(id) {
    let todolist = [...todos];
    let todo = todolist.find(todo => todo.id === id);
    todo.complete =! todo.complete;
    setTodo(todolist);
  }

  function hideCompleted() {
    let todolist = [...todos];
    let uncompleted = todolist.filter( todo => todo.completed === false);
    setTodo(uncompleted);
  }

  if (todos.length !== 0) {
    return (
      <>
      <div className="todoApp">
        <CreateTaskInput setTodo={setTodo}/>
        <div className="card">
          <span>Tasks</span>
          <ul className="list">
            <TodoList todos={todos} checkTodo={checkTodo}/>
          </ul>
          <span className="hide">
            Hide completed
            <input type="checkbox" onChange={hideCompleted}/>
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
