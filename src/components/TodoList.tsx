import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../Module/Todo";
import { Reorder } from "framer-motion";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodoHandler: (id: number) => void;
  isTodoCompletedHandler: (id: number) => void;
  editTodoHandler: (id: number) => void;
}
const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  deleteTodoHandler,
  isTodoCompletedHandler,
  editTodoHandler
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
      {todos.map((todo) => (
      <Reorder.Item key={todo.id} value={todo}>
          <SingleTodo
          key={todo.id}
          deleteTodoHandler={deleteTodoHandler}
          isTodoCompletedHandler={isTodoCompletedHandler}
          todo={todo}
          editTodoHandler={editTodoHandler}
        />
      </Reorder.Item>
      ))}
      </Reorder.Group>
    
    </div>
  );
};

export default TodoList;
