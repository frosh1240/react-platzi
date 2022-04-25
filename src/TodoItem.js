import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/TodoItem.css";
import { faTrashArrowUp, faCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className="TodoItems">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <FontAwesomeIcon icon={faTrashArrowUp} />
      </span>
    </li>
  );
}

export { TodoItem };
