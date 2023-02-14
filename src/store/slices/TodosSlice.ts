import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure, TodoStructure } from "../../data/types";

const initialState: TodosStructure = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos: (state, action: PayloadAction<TodosStructure>) => [
      ...action.payload,
    ],
    deleteTodo: (state, action: PayloadAction<TodoStructure>) =>
      state.filter((todo) => todo.id !== action.payload.id),
  },
});

export const { loadTodos } = todosSlice.actions;

export default todosSlice;
