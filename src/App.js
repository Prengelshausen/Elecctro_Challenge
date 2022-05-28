import {React, useState} from "react";
import CreateTaskInput from "./CreateTaskInput";
import TodoList from "./TodoList";
import "./App.css";



function App() {
  const [todos, setTodo] = useState([{id:1,name: "Todo 1", complete: false}])
  
  return (
    <>
    <div>
      <CreateTaskInput/>
      <div className="card">
        <TodoList todos={todos}/>
      </div>
    </div>
    </>
  );
}

export default App;
