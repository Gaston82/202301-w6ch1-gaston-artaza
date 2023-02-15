import React from "react";
import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";
import "./Todo.css";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const { deleteTodo, toggleIsDone } = useApi();

  return (
    <article>
      <input type="checkbox" onClick={() => toggleIsDone(todo)} />
      <h3>{todo.name}</h3>
      <div>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </article>
  );
};

export default Todo;
