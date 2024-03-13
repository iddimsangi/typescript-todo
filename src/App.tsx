import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./Module/Todo";

const App: React.FC = () => {
  // const [todos, setTodos] = useState<Array<Todo>>([]);
  const storedTodosString = localStorage.getItem("todos");
  const initialTodos: Todo[] = storedTodosString
    ? JSON.parse(storedTodosString)
    : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [editTodo, setEditTodo] = useState<Todo | undefined>();
  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodo) => todos.filter((todo) => todo.id !== id));
  };
  const isTodoCompletedHandler = (id: number) => {
    setTodos((prevTodo) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const editTodoHandler = (id: number) => {
    const todoObj = todos.find((todo) => todo.id === id);
    setEditTodo(todoObj);
    console.log("todoObj", todoObj);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className=" uppercase font-medium p-3">
        {" "}
        Welcome to TypesScript Todo App
      </h1>
      <TodoForm setTodos={setTodos} editTodo={editTodo} todos={todos} />
      <TodoList
        isTodoCompletedHandler={isTodoCompletedHandler}
        deleteTodoHandler={deleteTodoHandler}
        todos={todos}
        setTodos={setTodos}
        editTodoHandler={editTodoHandler}
      />
    </div>
  );
};
export default App;
