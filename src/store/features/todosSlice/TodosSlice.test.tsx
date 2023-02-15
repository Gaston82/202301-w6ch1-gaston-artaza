import { TodosStructure } from "../../../types";
import todosReducer, {
  createTodoActionCreator,
  deleteTodoActionCreator,
} from "./TodosSlice";

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

  describe("When it recieves a list of task and task with id 2", () => {
    test("Then it should return a new task list with only one task", () => {
      const initialState = [
        {
          id: 500,
          name: "Make a cake",
          isDone: false,
        },
        {
          id: 2,
          name: "Have a bath",
          isDone: true,
        },
      ];

      const newTasksList = todosReducer(
        initialState,
        deleteTodoActionCreator(2)
      );
      expect(newTasksList).toHaveLength(1);
    });
  });
});
