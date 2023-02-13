# DATA

## DATA LAYER

- id
- name
- isDone

## DATA MODIFICATIONS

- Add todo to the todos list
- Delete a todo
- Update a todo
- Create a new todo

# COMPONENTS

## TodosSlice

- Contains the function to add a todo to my list
- Contains the function to delete a todo
- Contains the function to update a todo
- Contains the function to create a new todo

## APP

- Recieves a list of todos
- Sends the list of todos to the TodosList component

## TodosList

- Receives the list of todos
- Sends the todo info to the Todo component

## Todo

- Receives the todo info
- Contains delete todo button
- Contains de information for each task : name - isDone - id
- Contains de update todo button

## Form

- Receives the function to add a new todo
- Receives the info for the new todo

## Header

- Contains the title
