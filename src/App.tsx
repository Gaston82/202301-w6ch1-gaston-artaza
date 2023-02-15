import { useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import useApi from "./hooks/useApi";
import { useAppSelector } from "./store/hooks";
import "./App.css";

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
      <div className="container">
        <h1>Todo RTk</h1>
        <Form />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
