import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../style/appContent.css";

const AppContent = () => {

  const todoList = useSelector((state) => state.todo.todoList); //how you get value from store
  const sortedTodoList = [...todoList]; //... means all the vales will be used
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time)); // compare the time
  const filterStatus = useSelector((state) => state.todo.filterStatus)

  const filteredTodoList = sortedTodoList.filter((todo) => {
    if(filterStatus === 'all')
        return true 
    return todo.status === filterStatus
  })

  return (
    <div className="todo_wrap"> 
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => (
          <TodoItem key= {todo.id} todo={todo} />
          ))
      ) : (
       <p className="emptyText">No Todos</p>
      )}
    </div>
  );
};

export default AppContent;
