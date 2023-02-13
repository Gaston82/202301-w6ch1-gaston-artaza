import { createSlice } from "@reduxjs/toolkit";
import { TodosStructure } from "../../data/types";

const initialState: TodosStructure = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos(state, action) {
      state.push(action.payload);
    },
  },
});

export const { loadTodos } = todosSlice.actions;

export default todosSlice;
