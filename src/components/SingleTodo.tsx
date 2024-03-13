import React from 'react'
import sprite from '../sprite.svg'
import { Todo } from '../Module/Todo'

interface PropsTypes {
  todo:Todo,
  deleteTodoHandler:(id:number) => void;
  isTodoCompletedHandler: (id: number) => void;
  editTodoHandler: (id: number) => void;
}
const SingleTodo:React.FC<PropsTypes> = ({todo, deleteTodoHandler,isTodoCompletedHandler,editTodoHandler}) => {
  return (
    <div className='p-3 mt-2 bg-green-400 w-full flex justify-between shadow-md shadow-green-600'>
    <h2 style={{textDecoration:todo.isDone ? "line-through":"" }}>{todo.todo}</h2>
    <div className='flex items-center'>
    <svg height={"1.5rem"} onClick={() => isTodoCompletedHandler(todo.id)} fill='green' width={"1.5rem"} className="icon icon-checkmark, pencil-square-o cursor-pointer mr-2">
    <use xlinkHref={`${sprite}#icon-checkmark`}></use>
    </svg>
    <svg height={"1.5rem"} onClick={() => editTodoHandler(todo.id)} fill='blue' width={"1.5rem"} className="icon icon-edit, pencil-square-o cursor-pointer mr-2">
    <use xlinkHref={`${sprite}#icon-edit`}></use>
    </svg>
    <svg height={"1.5rem"} onClick={() => deleteTodoHandler(todo.id)} fill='red' width={"1.5rem"} className="icon icon-trash, pencil-square-o cursor-pointer mr-2">
    <use xlinkHref={`${sprite}#icon-trash`}></use>
    </svg>
    </div>
</div>
  )
}

export default SingleTodo