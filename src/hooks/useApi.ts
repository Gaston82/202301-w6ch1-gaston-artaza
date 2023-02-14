import { useCallback } from "react";
import { TodosStructure } from "../data/types";
import { useAppDispatch } from "../store/hooks";
import todosSlice from "../store/slices/TodosSlice";

const useApi = () => {
  const dispatch = useAppDispatch();
  const loadTodos = useCallback(async () => {
    const result = await fetch("https://todo-list-redux-ts.onrender.com/todos");

    const todos = (await result.json()) as TodosStructure;
    dispatch(todosSlice.actions.loadTodos(todos));
  }, [dispatch]);
  return { loadTodos };
};

export default useApi;
