import { TodosStructure } from "../../data/types";
import todosReducer, { createTodoActionCreator } from "./TodosSlice";

describe("Given a todosReducer  function", () => {
  describe("When it recieves a new Task '", () => {
    test("Then it should return a list with a new task with the new task added", () => {
      const initialState: TodosStructure = [
        {
          id: 255,
          name: "Buy clothes",
          isDone: false,
        },
        {
          id: 855,
          name: "Let's go",
          isDone: true,
        },
      ];

      const newTask = {
        id: 3000,
        name: "Be water my friend",
        isDone: false,
      };

      const newTodosList = todosReducer(
        initialState,
        createTodoActionCreator(newTask)
      );
      expect(newTodosList).toHaveLength(3);
    });
  });
});
