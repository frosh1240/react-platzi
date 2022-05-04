import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/TodoItem.css";
import { faTrashArrowUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

function TodoItem(props) {
  const onComplete = () => {
    alert("Completaste el todo " + props.text);
  };

  const onDelete = () => {
    alert("borraste el todo " + props.text);
  };

  return (
    <Card body style={{ width: "18rem" }}>
      <li className="TodoItems">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={onComplete}
        >
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashArrowUp} />
        </span>
      </li>
    </Card>
  );
}

export { TodoItem };
