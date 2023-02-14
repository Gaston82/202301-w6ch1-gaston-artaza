import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure } from "../../data/types";

const initialState: TodosStructure = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos: (state, action: PayloadAction<TodosStructure>) => [
      ...action.payload,
    ],
    deleteTodo: (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { loadTodos, deleteTodo: deleteTodoActionCreator } =
  todosSlice.actions;

export default todosSlice;
