import React from "react";
import "./styles/CreateButtonTodo.css";

function CreateTodoButton() {
  const onClickButton = () => {
    alert("modal");
  };
  return (
    <div className="container_element">
      <button className="btn" onClick={() => onClickButton()}>
        Agregar Tarea
      </button>
    </div>
  );
}

export { CreateTodoButton };
