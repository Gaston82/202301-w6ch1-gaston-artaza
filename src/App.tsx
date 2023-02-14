import { useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import useApi from "./hooks/useApi";
import { useAppSelector } from "./store/hooks";

export const App = (): JSX.Element => {
  const { loadTodos } = useApi();
  const todos = useAppSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    (async () => loadTodos())();
  }, [loadTodos]);

  return (
    <>
      <h1>Todo RTk</h1>
      <TodoList todos={todos} />
      <Form />
    </>
  );
};

export default App;
