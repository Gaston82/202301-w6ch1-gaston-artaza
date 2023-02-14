import React from "react";
import { TodosStructure } from "../../data/types";
import Todo from "../Todo/Todo";
interface TodosListProps {
  todos: TodosStructure;
}
const TodoList = ({ todos }: TodosListProps): JSX.Element => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
