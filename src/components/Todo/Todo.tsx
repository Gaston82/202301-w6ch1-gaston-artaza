import React from "react";
import { TodoStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

interface TodoProps {
  todo: TodoStructure;
}

const Todo = ({ todo: { name, isDone, id } }: TodoProps): JSX.Element => {
  const { deleteTodo } = useApi();

  return (
    <article>
      <h3>{name}</h3>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </article>
  );
};

export default Todo;
