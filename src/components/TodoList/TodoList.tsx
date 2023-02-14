import React from "react";
import { TodosStructure } from "../../data/types";
interface TodosListProps {
  todos: TodosStructure;
}
const TodoList = ({ todos }: TodosListProps): JSX.Element => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <article>
            <h3>{todo.name}</h3>
            <span>IsDone? : {todo.isDone}</span>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
