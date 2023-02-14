import React from "react";
import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  const { deleteTodo, toggleIsDone } = useApi();

  return (
    <article>
      <h3>{todo.name}</h3>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <input type="checkbox" onClick={() => toggleIsDone(todo)} />
    </article>
  );
};

export default Todo;
