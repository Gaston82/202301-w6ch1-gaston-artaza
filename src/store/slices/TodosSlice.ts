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
    deleteTodo: (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
    createTodo: (state, action: PayloadAction<TodoStructure>) => [
      ...state,
      action.payload,
    ],
  },
});

export const {
  loadTodos,
  deleteTodo: deleteTodoActionCreator,
  createTodo: createTodoActionCreator,
} = todosSlice.actions;

export default todosSlice;
