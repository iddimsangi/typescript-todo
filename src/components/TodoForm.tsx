import React, { useState, useEffect } from "react";
import { Todo } from "../Module/Todo";
import sprite from "../sprite.svg";

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  editTodo: Todo | undefined;
}

const TodoForm: React.FC<TodoFormProps> = ({ setTodos, todos, editTodo }) => {
  const [todo, setTodo] = useState<string | undefined>();
  const [editTodoID, setEditTodoID] = useState<number>();
  const todoSubmisionHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo?.trim()) return; // Prevent adding empty todo
    if (editTodoID) {
      setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
      prevTodo.id === editTodoID ? { ...prevTodo, todo:todo } : prevTodo
        )
      );
    }else{
      const newTodo: Todo = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]); 
    }
    setTodo("")
    setEditTodoID(undefined)

  };

  useEffect(() => {
    setEditTodoID(editTodo?.id);
    setTodo(editTodo?.todo);
  }, [editTodo]);
  return (
    <form
      action="#"
      className="flex justify-center items-center relative w-ful"
      onSubmit={todoSubmisionHandler}
    >
      <input
        className="p-3 border-2 focus:outline-none border-slate-600 rounded-lg "
        type="text"
        placeholder="Enter Todo Lists"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
        value={todo}
        required
      />
      <button className="bg-green-400 p-2 shadow-sm shadow-slate-900  absolute right-1 rounded-full">
        <svg
          height={"1.5rem"}
          fill="blue"
          width={"1.5rem"}
          className="icon icon-checkmark, pencil-square-o cursor-pointer"
        >
          <use xlinkHref={`${sprite}#icon-checkmark`}></use>
        </svg>
      </button>
    </form>
  );
};

export default TodoForm;
