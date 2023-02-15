import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import "./Form.css";

const Form = (): JSX.Element => {
  const { createTodo } = useApi();
  const [todo, setTodo] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: todo,
      isDone: false,
    };
    createTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          <input type="text" onChange={handleChange} value={todo} />
        </label>
      </div>

      <button>Add Task</button>
    </form>
  );
};

export default Form;
