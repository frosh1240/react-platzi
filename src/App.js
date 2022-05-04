import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateButton";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";

const defaultTodos = [
  { text: "Cortar cebollar", completed: false },
  { text: "Curso de platzi", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                />
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
