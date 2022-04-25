import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateButton";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const todos = [
  { text: "Cortar cebollar", completed: false },
  { text: "Curso de platzi", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
              {todos.map((todo) => (
                <TodoItem key={todo.text} text={todo.text} />
              ))}
            </TodoList>
            <CreateTodoButton />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
