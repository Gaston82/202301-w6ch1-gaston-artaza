import React from "react";
import { TodosStructure } from "../../data/types";
interface TodosListProps {
  todos: TodosStructure;
}
const TodoList = ({ todos }: TodosListProps): JSX.Element => {
  return <div>TodoList</div>;
};

export default TodoList;
