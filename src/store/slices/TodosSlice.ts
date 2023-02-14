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
    toggleIsDone: (state, action: PayloadAction<TodoStructure>) =>
      state.map((todo) => ({
        ...todo,
        isDone: todo.id === action.payload.id ? !todo.isDone : todo.isDone,
      })),
  },
});

export const {
  loadTodos,
  deleteTodo: deleteTodoActionCreator,
  createTodo: createTodoActionCreator,
  toggleIsDone: toggleIsDoneActionCreator,
} = todosSlice.actions;

export default todosSlice;
