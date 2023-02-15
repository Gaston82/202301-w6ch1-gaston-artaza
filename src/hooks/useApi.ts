import { useCallback } from "react";
import { TodosStructure, TodoStructure } from "../data/types";
import { useAppDispatch } from "../store/hooks";
import todosSlice, {
  createTodoActionCreator,
  deleteTodoActionCreator,
  toggleIsDoneActionCreator,
} from "../store/features/TodosSlice";

const useApi = () => {
  const dispatch = useAppDispatch();
  const loadTodos = useCallback(async () => {
    const result = await fetch("https://todo-list-redux-ts.onrender.com/todos");

    const todos = (await result.json()) as TodosStructure;
    dispatch(todosSlice.actions.loadTodos(todos));
  }, [dispatch]);

  const deleteTodo = useCallback(
    async (id: number) => {
      await fetch(`https://todo-list-redux-ts.onrender.com/todos/${id}`, {
        method: "DELETE",
      });

      dispatch(deleteTodoActionCreator(id));
    },
    [dispatch]
  );

  const createTodo = useCallback(
    async (todo: TodoStructure) => {
      fetch("https://todo-list-redux-ts.onrender.com/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(createTodoActionCreator(todo));
    },
    [dispatch]
  );

  const toggleIsDone = useCallback(
    async (todo: TodoStructure) => {
      const response = await fetch(
        `https://todo-list-redux-ts.onrender.com/todos/${todo.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            ...todo,
            isDone: !todo.isDone,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        return;
      }

      dispatch(toggleIsDoneActionCreator(todo));
    },
    [dispatch]
  );

  return { loadTodos, deleteTodo, createTodo, toggleIsDone };
};

export default useApi;
